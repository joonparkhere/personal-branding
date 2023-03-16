TAILWIND_DIR := tailwind
TAILWIND_EXEC := tailwindcss-linux-x64
TAILWIND_CONFIG := tailwind.config.json
TAILWIND_INPUT := tailwind.css
TAILWIND_OUT := index.css

build-tailwind:
	$(TAILWIND_DIR)/$(TAILWIND_EXEC) -c $(TAILWIND_DIR)/$(TAILWIND_CONFIG) -i $(TAILWIND_DIR)/$(TAILWIND_INPUT) -o $(TAILWIND_OUT) --minify

build-rust:
	trunk build

build: build-tailwind build-rust

serve-tailwind:
	$(TAILWIND_DIR)/$(TAILWIND_EXEC) -c $(TAILWIND_DIR)/$(TAILWIND_CONFIG) -i $(TAILWIND_DIR)/$(TAILWIND_INPUT) -o $(TAILWIND_OUT) --watch

serve-rust:
	trunk serve --release

clean:
	trunk clean

