interface GlassmorphicUI {
    new(): ImageLabel
    applyGlassToImageLabel(this: void, ImageLabel: ImageLabel): void;
    addGlassBackground(this: void, GuiObject: GuiObject): ImageLabel;
    setDefaultBlurRadius(radius: number): void;
    forceUpdate(Window: ImageLabel): ImageLabel;
    pauseUpdates(Window: ImageLabel): ImageLabel;
    resumeUpdates(Window: ImageLabel): ImageLabel;
}

declare const GlassmorphicUI: GlassmorphicUI

export = GlassmorphicUI
