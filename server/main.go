package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func main(){
	fmt.Print("Hello world")

	app := fiber.New()

	app.Get("/healthchecl", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})
}