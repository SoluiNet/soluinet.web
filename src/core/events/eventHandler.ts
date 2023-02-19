import mitt from "mitt"

export const eventKeys = {
  toggleDarkMode: "toggleDarkMode",
  toggleSideBar: "toggleSideBar",
}

export const emitter = mitt();