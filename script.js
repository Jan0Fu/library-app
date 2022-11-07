function Book() {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = Boolean(read)
    this.info = function() {
        return Object.values(this);
    }
    console.log(theHobbit.info());
}