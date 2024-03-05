interface GlassmorphicUI {
    new(): ImageLabel
    applyGlassToImageLabel(this: void, ImageLabel: ImageLabel): void;
    addGlassBackground(this: void, GuiObject: GuiObject): ImageLabel
}

declare const GlassmorphicUI: GlassmorphicUI

export = GlassmorphicUI
