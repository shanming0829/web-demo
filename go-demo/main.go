package main

import (
	"github.com/gin-gonic/gin"

	"godemo/albums"
)

func main() {
	router := gin.Default()
	albumsRouter := router.Group("/api/albums")
	albums.RegisterRouter(albumsRouter)

	router.Run(":8080")
}
