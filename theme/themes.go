package theme

import (
	"reflect"
)

type Theme string

const (
	Light Theme = "light"
	Dark  Theme = "dark"
)

type Variables struct {
	BgPage1      string
	BgPage2      string
	BgElement1   string
	BgElement2   string
	BgElement3   string
	BgElement4   string
	BgElement5   string
	BgElement6   string
	BgElement7   string
	BgElement8   string
	BgInvert     string
	BgInlineCode string
	BgTag        string

	Text1        string
	Text2        string
	Text3        string
	Text4        string
	Border1      string
	Border2      string
	Border3      string
	Border4      string
	Primary1     string
	Primary2     string
	Destructive1 string
	Destructive2 string
	ButtonText   string

	SlightLayer  string
	OpaqueLayer  string
	EditorFooter string

	PrismBg          string
	PrismDefaultText string
	PrismSelectionBg string
	PrismCodeBlockBg string
	PrismCode1       string
	PrismCode2       string
	PrismCode3       string
	PrismCode4       string
	PrismCode5       string
	PrismCode6       string
	PrismCode7       string
	PrismCode8       string
	PrismCode9       string
	PrismLineNumber  string
}

var (
	lightThemeVariables = Variables{
		BgPage1:      "#F8F9FA",
		BgPage2:      "#FFFFFF",
		BgElement1:   "#FFFFFF",
		BgElement2:   "#F8F9FA",
		BgElement3:   "#E9ECEF",
		BgElement4:   "#DEE2E6",
		BgElement5:   "#212529",
		BgElement6:   "#343A40",
		BgElement7:   "#FFFFFF",
		BgElement8:   "#FBFDFC",
		BgInvert:     "#1E1E1E",
		BgInlineCode: "#E9ECEF",
		BgTag:        "#F8F9FA",

		Text1:        "#212529",
		Text2:        "#495057",
		Text3:        "#868E96",
		Text4:        "#CED4DA",
		Border1:      "#343A40",
		Border2:      "#ADB5BD",
		Border3:      "#DEE2E6",
		Border4:      "#F1F3F5",
		Primary1:     "#17098B",
		Primary2:     "#2C1CAD",
		Destructive1: "#FF6B6B",
		Destructive2: "#FF8787",
		ButtonText:   "#FFFFFF",

		SlightLayer:  "rgba(0, 0, 0, 0.05)",
		OpaqueLayer:  "rgba(249, 249, 249, 0.85)",
		EditorFooter: "#FFFFFF",

		PrismBg:          "#fbfcfd",
		PrismDefaultText: "#24292e",
		PrismSelectionBg: "rgba(0, 0, 0, 0.15)",
		PrismCodeBlockBg: "#fbfcfd",
		PrismCode1:       "#969896",
		PrismCode2:       "#24292e",
		PrismCode3:       "#a626a4",
		PrismCode4:       "#63a35c",
		PrismCode5:       "#0184bc",
		PrismCode6:       "#50a14f",
		PrismCode7:       "#a626a4",
		PrismCode8:       "#005cc5",
		PrismCode9:       "#a626a4",
		PrismLineNumber:  "#585c63",
	}
	darkThemeVariables = Variables{
		BgPage1:      "#121212",
		BgPage2:      "#121212",
		BgElement1:   "#1E1E1E",
		BgElement2:   "#1E1E1E",
		BgElement3:   "#252525",
		BgElement4:   "#2E2E2E",
		BgElement5:   "#F1F3F5",
		BgElement6:   "#F8F9FA",
		BgElement7:   "#252525",
		BgElement8:   "#0c0c0c",
		BgInvert:     "#FFFFFF",
		BgInlineCode: "#363636",
		BgTag:        "#252525",

		Text1:        "#ECECEC",
		Text2:        "#D9D9D9",
		Text3:        "#ACACAC",
		Text4:        "#595959",
		Border1:      "#E0E0E0",
		Border2:      "#A0A0A0",
		Border3:      "#4D4D4D",
		Border4:      "#2A2A2A",
		Primary1:     "#5E5B7B",
		Primary2:     "#6A63AA",
		Destructive1: "#FFC9C9",
		Destructive2: "#FFA8A8",
		ButtonText:   "#121212",

		SlightLayer:  "rgba(255, 255, 255, 0.1)",
		OpaqueLayer:  "rgba(0, 0, 0, 0.85)",
		EditorFooter: "#2E2E2E",

		PrismBg:          "#1E1E1E",
		PrismDefaultText: "#e0e6f1",
		PrismSelectionBg: "#383e49",
		PrismCodeBlockBg: "#1e1e1e",
		PrismCode1:       "#7c858d",
		PrismCode2:       "#abb2bf",
		PrismCode3:       "#e06c75",
		PrismCode4:       "#d19a66",
		PrismCode5:       "#98c379",
		PrismCode6:       "#56b6c2",
		PrismCode7:       "#c678dd",
		PrismCode8:       "#61afef",
		PrismCode9:       "#c678dd",
		PrismLineNumber:  "#5c6370",
	}
)

func GetVariableSet(theme Theme) (Variables, bool) {
	switch theme {
	case Light:
		return lightThemeVariables, true
	case Dark:
		return darkThemeVariables, true
	default:
		return Variables{}, false
	}
}

func GetPalette(theme Theme) map[string]string {
	variables := Variables{}
	switch theme {
	case Light:
		variables = lightThemeVariables
	case Dark:
		variables = darkThemeVariables
	}

	varVal := reflect.ValueOf(variables)
	varType := varVal.Type()
	varIndirect := reflect.Indirect(varVal)

	palette := make(map[string]string)
	for i := 0; i < varType.NumField(); i++ {
		key := varType.Field(i).Name
		value := varIndirect.Field(i).String()

		palette[key] = value
	}
	return palette
}
