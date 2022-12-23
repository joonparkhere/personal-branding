package pages

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type NotFound struct {
	app.Compo
}

func (nf *NotFound) OnPreRender(ctx app.Context) {
	ctx.Page().SetTitle("Not Found")
}

func (nf *NotFound) Render() app.UI {
	return app.Div().Body(
		app.Div().
			Class("text-3xl").
			Text("not found error"),
	)
}
