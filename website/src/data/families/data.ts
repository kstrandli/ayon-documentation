import { type Family, FamilyType } from "./types";

const families: { [type in FamilyType]: Family } = {
    model: {
        title: "Model",
        icon: "language",
        docs: "#model",
    },
    look: {
        title: "Look",
        icon: "ev_shadow",
        docs: "#look",
    },
    rig: {
        title: "Rig",
        icon: "accessibility",
        docs: "#rig",
    },
    layout: {
        title: "Layout",
        icon: "nature_people",
        docs: "#layout",
    },
    setdress: {
        title: "Setdress",
        icon: "forest",
        docs: "#setdress",
    },
    camera: {
        title: "Camera",
        icon: "videocam",
        docs: "#camera",
    },
    animation: {
        title: "Animation",
        icon: "directions_run",
        docs: "#animation",
    },
    cache: {
        title: "Cache",
        icon: "animation",
        docs: "#cache",
    },
    render: {
        title: "Render",
        icon: "photo_library",
        docs: "#render",
    },
    prerender: {
        title: "Prerender",
        icon: "photo_library",
    },
    renderSetup: {
        title: "Render Setup",
        icon: "photo_library",
    },
    plate: {
        title: "Plate",
        icon: "camera_roll",
    },
    image: {
        title: "Image",
        icon: "imagesmode",
    },
    frame: {
        title: "Frame",
        icon: "imagesmode",
    },
    layeredImage: {
        title: "Layered Image",
        icon: "filter",
    },
    review: {
        title: "Review",
        icon: "smart_display",
    },
    texture: {
        title: "Texture",
        icon: "Texture",
    },
    matchmove: {
        title: "Matchmove",
        icon: "switch_video",
    },
    workfile: {
        title: "Workfile",
        icon: "home_repair_service",
    },
    nukeNodes: {
        title: "NukeNodes",
        icon: "line_start_square",
    },
    yetiCache: {
        title: "Yeti Cache",
        icon: "pets",
    },
    yetiRig: {
        title: "Yeti Rig",
        icon: "pets",
    },
    VDBCache: {
        title: "VDB Cache",
        icon: "filter",
    },
    vrayProxy: {
        title: "Vray Proxy",
        icon: "backlight_high",
    },
    vrayScene: {
        title: "Vray Scene",
        icon: "scene",
    },
    arnoldStandin: {
        title: "Arnold Standin",
        icon: "accessibility_new",
    },
    effect: {
        title: "Effect",
        icon: "ev_shadow",
    },
    gizmo: {
        title: "Gizmo",
        icon: "extension",
    },
    harmonyTemplate: {
        title: "Harmony Template",
        icon: "view_timeline",
    },
    harmonyPalette: {
        title: "Harmony Palette",
        icon: "palette",
    },
    audio: {
        title: "Audio",
        icon: "music_note",
    },
    background: {
        title: "Background",
        icon: "wallpaper",
    },
    pointcache: {
        title: "Point Cache",
        icon: "grain",
    },
    pointCloud: {
        title: "Point Cloud",
        icon: "grain",
    },
    mayaScene: {
        title: "Maya Scene",
        icon: "home_repair_service",
    },
    maxScene: {
        title: "Max Scene",
        icon: "home_repair_service",
    }
};

export default families;
