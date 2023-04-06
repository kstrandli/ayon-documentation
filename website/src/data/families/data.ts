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
    assembly: {
        title: "Assembly",
        icon: "grid_view",
        docs: "#assembly",
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
    mayaAscii: {
        title: "MayaAscii",
        icon: "imagesmode",
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
    write: {
        title: "Write",
        icon: "flag",
    },
    image: {
        title: "Image",
        icon: "imagesmode",
    },
    layeredImage: {
        title: "Layered Image",
        icon: "filter",
    },
    review: {
        title: "review",
        icon: "Smart Display",
    },
    texture: {
        title: "texture",
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
    lut: {
        title: "LUT",
        icon: "opacity",
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
    action: {
        title: "Point Cache",
        icon: "engineering",
    },
    pointcache: {
        title: "Point Cache",
        icon: "grain",
    },
    source: {
        title: "Source",
        icon: "settings_input_hdmi",
    },
};

export default families;
