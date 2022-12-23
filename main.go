package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"sinabro-dev/personal-branding/pages"

	"log"
	"net/http"
)

func main() {
	app.Route("/", &pages.NotFound{})
	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Styles: []string{
			"/web/tailwind.css",
		},
	})

	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
