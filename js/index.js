import Modal from "./modal.js"
import Events from "./events.js"
import checkerEvenOddEqualsDifferent from "./controls.js"
import {
    screenList,
    screenOperation,
    screenResult
} from "./elements.js"

const modal = Modal ({
    screenList,
    screenOperation,
    screenResult
})

Events({modal, checkerEvenOddEqualsDifferent})
