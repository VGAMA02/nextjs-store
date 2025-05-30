import { createElement, HTMLAttributes } from "react";
import sanitize from 'sanitize-html';


//npm i sanitize-html
type SanitizeHTML = {
    children:string;
    tag: string;
} &HTMLAttributes<HTMLElement>


export const SanitizedHTML = ({tag,children,...rest}: SanitizeHTML) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b','i','em','strong']
    })

    return createElement(
        tag,
        {...rest},
        sanitizedHTML
    )
};