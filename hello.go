package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"log"
	"net/http"
)

type hello struct {
	app.Compo
}

func (h *hello) OnPreRender(ctx app.Context) {
	ctx.Page().SetTitle("A Hello World Example with go-app")
}

func (h *hello) Render() app.UI {
	return app.Div().Body(
		app.H1().Text("Hello World!"),
		app.Div().
			Class("text-3xl").
			Text("Here is a text"),
	)
}

func main() {
	app.Route("/", &hello{})
	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Name:        "Hello",
		Description: "An Hello World Example",
		Styles: []string{
			"/web/tailwind.css",
		},
	})

	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
