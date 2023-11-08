import { compareDesc, parseISO } from "date-fns"

export const cx = (...classNames) => classNames.filter(Boolean).join(" ") // This will help in layout.js


export const sortBlogs = (blogs) => {
    return blogs.slice().sort((a,b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
}