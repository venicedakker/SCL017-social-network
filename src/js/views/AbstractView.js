// all view classes are gonna inheret this one
export default class {
    constructor() {
        
    }

    // Changes te title of the HTML use in the views
    setTitle(title) {
        document.title = title;
    }
    // gonna generate tje template desde las diferentes views
    async getHtml() {
        return "";
    }
}