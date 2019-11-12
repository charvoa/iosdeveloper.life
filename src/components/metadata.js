import React from "react"
import { Helmet } from "react-helmet"

export default ({pageTitle}) => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>iOSDeveloper.life - {pageTitle}</title>
        <meta name="description" content="Checklist of control points to become a better iOS Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Nicolas Charvoz" />
        <meta name="keywords" content="mobile,application,reliability,sre,engineering,checklist,ios" />
    </Helmet>
)