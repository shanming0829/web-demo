package albums

import (
	"fmt"
	"net/http"

	"github.com/bxcodec/faker/v3"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type Album struct {
	ID     string  `json:"id" faker:"uuid_hyphenated"`
	Title  string  `json:"title" faker:"sentence"`
	Artist string  `json:"artist" faker:"name"`
	Price  float64 `json:"price" faker:"amount"`
}

type AlbumResource struct {
	albums map[string]Album
}

func (ar AlbumResource) initAlbums(count int) {
	for i := 0; i < count; i++ {
		newAlbum := Album{}
		err := faker.FakeData(&newAlbum)
		if err != nil {
			fmt.Println(err)
		}
		ar.albums[newAlbum.ID] = newAlbum
	}
}

func (ar AlbumResource) getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, ar.albums)
}

func (ar AlbumResource) getAlbumByID(c *gin.Context) {
	id := c.Param("id")
	item, ok := ar.albums[id]

	if ok {
		c.IndentedJSON(http.StatusOK, item)
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
	}
}

func (ar AlbumResource) createAlbum(c *gin.Context) {
	id := uuid.NewString()
	newAlbum := Album{ID: id}
	if err := c.BindJSON(&newAlbum); err != nil {
		return
	}
	ar.albums[id] = newAlbum
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

func (ar AlbumResource) updateAlbum(c *gin.Context) {
	id := c.Param("id")
	item, ok := ar.albums[id]
	if ok {
		if err := c.BindJSON(&item); err != nil {
			return
		}
		ar.albums[id] = item
		c.IndentedJSON(http.StatusAccepted, item)
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
	}
}

func (ar AlbumResource) deleteAlbumByID(c *gin.Context) {
	id := c.Param("id")
	_, ok := ar.albums[id]
	if ok {
		delete(ar.albums, id)
		c.IndentedJSON(http.StatusNoContent,
			gin.H{"message": "Delete album successful"})
	} else {
		c.IndentedJSON(http.StatusNotFound,
			gin.H{"message": "album already deleted"})
	}
}

func RegisterRouter(router *gin.RouterGroup) {
	ar :=  AlbumResource{map[string]Album{}}
	ar.initAlbums(100)
	router.GET("/", ar.getAlbums)
	router.POST("/", ar.createAlbum)
	router.GET("/:id", ar.getAlbumByID)
	router.PUT("/:id", ar.updateAlbum)
	router.DELETE("/:id", ar.deleteAlbumByID)
}
