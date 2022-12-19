APP_DIR := web
APP_INTER := app.wasm
APP_OUT := app

TAILWIND_DIR := tailwind
TAILWIND_EXEC := tailwindcss-macos-arm64
TAILWIND_CONFIG := tailwind.config.json
TAILWIND_OUT := tailwind.css

build-go:
	rm -f $(APP_DIR)/$(APP_INTER) $(APP_DIR)/$(APP_OUT)
	GOARCH=wasm GOOS=js go build -o $(APP_DIR)/$(APP_INTER)
	go build -o $(APP_DIR)/$(APP_OUT)

build-css:
	rm -f $(APP_OUT)/$(TAILWIND_OUT)
	$(TAILWIND_DIR)/$(TAILWIND_EXEC) -c $(TAILWIND_DIR)/$(TAILWIND_CONFIG) -o $(APP_DIR)/$(TAILWIND_OUT) --minify

build: build-go build-css

run: build
	$(APP_DIR)/$(APP_OUT)

watch-css:
	$(TAILWIND_DIR)/$(TAILWIND_EXEC) -c $(TAILWIND_DIR)/$(TAILWIND_CONFIG) -o $(APP_DIR)/$(TAILWIND_OUT) --watch

clear:
	rm -rf $(APP_DIR)
