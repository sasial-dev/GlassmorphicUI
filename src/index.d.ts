interface GlassmorphicUI {
    new(): ImageLabel
    applyGlassToImageLabel(this: void, ImageLabel: ImageLabel): void;
    addGlassBackground(this: void, GuiObject: GuiObject): ImageLabel
    setDefaultBlurRadius(radius: number): void;
}

declare const GlassmorphicUI: GlassmorphicUI

export = GlassmorphicUI
