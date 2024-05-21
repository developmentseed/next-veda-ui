import {jsx as $22uAH$jsx, jsxs as $22uAH$jsxs, Fragment as $22uAH$Fragment1} from "react/jsx-runtime";
import $22uAH$react, {useState as $22uAH$useState, useEffect as $22uAH$useEffect, Children as $22uAH$Children, createElement as $22uAH$createElement, Component as $22uAH$Component, Fragment as $22uAH$Fragment, forwardRef as $22uAH$forwardRef, useMemo as $22uAH$useMemo, useCallback as $22uAH$useCallback, useRef as $22uAH$useRef, useImperativeHandle as $22uAH$useImperativeHandle, createContext as $22uAH$createContext, useContext as $22uAH$useContext, lazy as $22uAH$lazy, useLayoutEffect as $22uAH$useLayoutEffect} from "react";
import $22uAH$proptypes from "prop-types";
import {MDXProvider as $22uAH$MDXProvider} from "@mdx-js/react";
import {useParams as $22uAH$useParams, Outlet as $22uAH$Outlet, useLocation as $22uAH$useLocation1, useNavigate as $22uAH$useNavigate1} from "react-router";
import {uniqBy as $22uAH$uniqBy, defaultsDeep as $22uAH$defaultsDeep, clamp as $22uAH$clamp, omit as $22uAH$omit, set as $22uAH$set} from "lodash";
import $22uAH$styledcomponents, {keyframes as $22uAH$keyframes, css as $22uAH$css, useTheme as $22uAH$useTheme, ThemeProvider as $22uAH$ThemeProvider} from "styled-components";
import {themeVal as $22uAH$themeVal, glsp as $22uAH$glsp, visuallyHidden as $22uAH$visuallyHidden, media as $22uAH$media, truncated as $22uAH$truncated, multiply as $22uAH$multiply, visuallyDisabled as $22uAH$visuallyDisabled, rgba as $22uAH$rgba, listReset as $22uAH$listReset} from "@devseed-ui/theme-provider";
import {CollecticonChartLine as $22uAH$CollecticonChartLine, CollecticonCircleInformation as $22uAH$CollecticonCircleInformation, CollecticonSortAsc as $22uAH$CollecticonSortAsc, CollecticonSortDesc as $22uAH$CollecticonSortDesc, CollecticonSortNone as $22uAH$CollecticonSortNone, iconDataURI as $22uAH$iconDataURI, CollecticonChevronRightSmall as $22uAH$CollecticonChevronRightSmall, CollecticonChevronLeftSmall as $22uAH$CollecticonChevronLeftSmall, CollecticonCircleXmark as $22uAH$CollecticonCircleXmark, CollecticonPlusSmall as $22uAH$CollecticonPlusSmall, CollecticonMinusSmall as $22uAH$CollecticonMinusSmall, CollecticonMagnifierLeft as $22uAH$CollecticonMagnifierLeft, CollecticonXmarkSmall as $22uAH$CollecticonXmarkSmall, CollecticonTrashBin as $22uAH$CollecticonTrashBin, CollecticonGlobe as $22uAH$CollecticonGlobe, CollecticonExpandTopRight as $22uAH$CollecticonExpandTopRight, CollecticonEnvelope as $22uAH$CollecticonEnvelope, CollecticonBrandGithub as $22uAH$CollecticonBrandGithub, CollecticonHamburgerMenu as $22uAH$CollecticonHamburgerMenu, CollecticonEllipsisVertical as $22uAH$CollecticonEllipsisVertical, CollecticonCog as $22uAH$CollecticonCog, CollecticonBook as $22uAH$CollecticonBook, CollecticonDownload2 as $22uAH$CollecticonDownload2, CollecticonCode as $22uAH$CollecticonCode, CollecticonPage as $22uAH$CollecticonPage, CollecticonCompass as $22uAH$CollecticonCompass, CollecticonDiscXmark as $22uAH$CollecticonDiscXmark, CollecticonChevronUp as $22uAH$CollecticonChevronUp, CollecticonChevronDown as $22uAH$CollecticonChevronDown, createCollecticon as $22uAH$createCollecticon} from "@devseed-ui/collecticons";
import {Subtitle as $22uAH$Subtitle, Heading as $22uAH$Heading, Lead as $22uAH$Lead, Prose as $22uAH$Prose, Table as $22uAH$Table, createSubtitleStyles as $22uAH$createSubtitleStyles, Overline as $22uAH$Overline} from "@devseed-ui/typography";
import * as $22uAH$datefns from "date-fns";
import $22uAH$reactlazyload from "react-lazyload";
import {csv as $22uAH$csv, json as $22uAH$json, timeFormat as $22uAH$timeFormat, timeParse as $22uAH$timeParse, scaleTime as $22uAH$scaleTime, csvParse as $22uAH$csvParse, scaleLinear as $22uAH$scaleLinear} from "d3";
import * as $22uAH$d3scalechromatic from "d3-scale-chromatic";
import {LineChart as $22uAH$LineChart, Curve as $22uAH$Curve, ResponsiveContainer as $22uAH$ResponsiveContainer, CartesianGrid as $22uAH$CartesianGrid, XAxis as $22uAH$XAxis, Label as $22uAH$Label, YAxis as $22uAH$YAxis, ReferenceArea as $22uAH$ReferenceArea, Customized as $22uAH$Customized, Line as $22uAH$Line, Tooltip as $22uAH$Tooltip, Legend as $22uAH$Legend} from "recharts";
import $22uAH$reactcooldimensions from "react-cool-dimensions";
import {useReactTable as $22uAH$useReactTable, getCoreRowModel as $22uAH$getCoreRowModel, getSortedRowModel as $22uAH$getSortedRowModel, flexRender as $22uAH$flexRender} from "@tanstack/react-table";
import {useVirtual as $22uAH$useVirtual} from "react-virtual";
import $22uAH$axios from "axios";
import {read as $22uAH$read, utils as $22uAH$utils} from "xlsx";
import $22uAH$reactcompareimage from "react-compare-image";
import "mapbox-gl/dist/mapbox-gl.css";
import $22uAH$mapboxglcompare from "mapbox-gl-compare";
import "mapbox-gl-compare/dist/mapbox-gl-compare.css";
import $22uAH$qs from "qs";
import {featureCollection as $22uAH$featureCollection, point as $22uAH$point} from "@turf/helpers";
import $22uAH$turfcentroid from "@turf/centroid";
import $22uAH$mapboxgl, {Map as $22uAH$Map, NavigationControl as $22uAH$NavigationControl, ScaleControl as $22uAH$ScaleControl, AttributionControl as $22uAH$AttributionControl} from "mapbox-gl";
import $22uAH$mapboxmapboxglgeocoder from "@mapbox/mapbox-gl-geocoder";
import {createButtonGroupStyles as $22uAH$createButtonGroupStyles, createButtonStyles as $22uAH$createButtonStyles, Button as $22uAH$Button} from "@devseed-ui/button";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import {TransitionGroup as $22uAH$TransitionGroup, CSSTransition as $22uAH$CSSTransition, Transition as $22uAH$Transition, SwitchTransition as $22uAH$SwitchTransition} from "react-transition-group";
import $22uAH$reactdom from "react-dom";
import {Toolbar as $22uAH$Toolbar, ToolbarIconButton as $22uAH$ToolbarIconButton, VerticalDivider as $22uAH$VerticalDivider} from "@devseed-ui/toolbar";
import $22uAH$turfbbox from "@turf/bbox";
import $22uAH$turfarea from "@turf/area";
import $22uAH$turfunion from "@turf/union";
import $22uAH$mapboxmapboxgldraw from "@mapbox/mapbox-gl-draw";
import {Dropdown as $22uAH$Dropdown, DropTitle as $22uAH$DropTitle, DropMenu as $22uAH$DropMenu, DropMenuItem as $22uAH$DropMenuItem} from "@devseed-ui/dropdown";
import {FormSwitch as $22uAH$FormSwitch, FormFieldsetHeader as $22uAH$FormFieldsetHeader, FormLegend as $22uAH$FormLegend, FormGroupStructure as $22uAH$FormGroupStructure, FormInput as $22uAH$FormInput, FormFieldset as $22uAH$FormFieldset, FormFieldsetBody as $22uAH$FormFieldsetBody, FormHelperMessage as $22uAH$FormHelperMessage, FormCheckableGroup as $22uAH$FormCheckableGroup, FormCheckable as $22uAH$FormCheckable} from "@devseed-ui/form";
import {createRoot as $22uAH$createRoot} from "react-dom/client";
import $22uAH$clipboard from "clipboard";
import {AccordionFold as $22uAH$AccordionFold, AccordionManager as $22uAH$AccordionManager} from "@devseed-ui/accordion";
import {followCursor as $22uAH$followCursor} from "tippy.js";
import $22uAH$tippyjsreact from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {useQuery as $22uAH$useQuery, useQueryClient as $22uAH$useQueryClient, useQueries as $22uAH$useQueries} from "@tanstack/react-query";
import {useDeepCompareMemo as $22uAH$useDeepCompareMemo, useDeepCompareEffect as $22uAH$useDeepCompareEffect} from "use-deep-compare";
import $22uAH$scrollama from "scrollama";
import {reveal as $22uAH$reveal} from "@devseed-ui/animation";
import {Helmet as $22uAH$Helmet} from "react-helmet";
import {useLocation as $22uAH$useLocation, Link as $22uAH$Link, NavLink as $22uAH$NavLink, useNavigate as $22uAH$useNavigate} from "react-router-dom";
import $22uAH$reactgtmmodule from "react-gtm-module";
import {Modal as $22uAH$Modal} from "@devseed-ui/modal";
import $22uAH$qsstatehook from "qs-state-hook";

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref6bf"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref6bf"] = parcelRequire;
}
parcelRequire.register("fhtwm", function(module, exports) {
module.exports = import("./about.3981b582.js").then(()=>parcelRequire("262j5"));

});

parcelRequire.register("gUk6W", function(module, exports) {
module.exports = import("./sandbox-override.63d9bb83.js").then(()=>parcelRequire("4K0b6"));

});

parcelRequire.register("fEBGk", function(module, exports) {
module.exports = import("./disclaimer.4b88cc06.js").then(()=>parcelRequire("fBlqp"));

});

parcelRequire.register("bqq39", function(module, exports) {
module.exports = import("./custom.a670266c.js").then(()=>parcelRequire("65eVQ"));

});

parcelRequire.register("fR8Lm", function(module, exports) {
module.exports = import("./aparam.27adf3ba.js").then(()=>parcelRequire("gOZb4"));

});

parcelRequire.register("clTb4", function(module, exports) {
module.exports = new URL("gpmimergdaily.f7cbf0b3.png", import.meta.url).toString();

});

parcelRequire.register("5CG1q", function(module, exports) {
module.exports = import("./GPM_3IMERGDF.data.530e2a4e.js").then(()=>parcelRequire("gDpdH"));

});

parcelRequire.register("fmmYi", function(module, exports) {
module.exports = new URL("trmm.88120269.png", import.meta.url).toString();

});

parcelRequire.register("aNDQu", function(module, exports) {
module.exports = import("./TRMM_3B42_Daily.data.184ea235.js").then(()=>parcelRequire("ghOJ2"));

});

parcelRequire.register("9lvBw", function(module, exports) {
module.exports = new URL("east_coast_mar_20.c916ac9e.jpg", import.meta.url).toString();

});

parcelRequire.register("65cGT", function(module, exports) {
module.exports = import("./data-from-ghg.data.0037b4a8.js").then(()=>parcelRequire("i4SoD"));

});

parcelRequire.register("9cL5F", function(module, exports) {
module.exports = new URL("no2--dataset-cover.80478047.jpg", import.meta.url).toString();

});

parcelRequire.register("8mRqF", function(module, exports) {
module.exports = import("./fire.data.3436385b.js").then(()=>parcelRequire("kPpTF"));

});

parcelRequire.register("jwB8a", function(module, exports) {
module.exports = new URL("nighttime-lights--dataset-cover.1cd08e26.jpg", import.meta.url).toString();

});

parcelRequire.register("30D7I", function(module, exports) {
module.exports = import("./nighttime-lights.data.34e29c97.js").then(()=>parcelRequire("cyXyS"));

});

parcelRequire.register("lVV9f", function(module, exports) {
module.exports = new URL("img-placeholder-3.4c5b2358.jpg", import.meta.url).toString();

});

parcelRequire.register("28H4e", function(module, exports) {
module.exports = import("./no2.data.b1582e46.js").then(()=>parcelRequire("grUmx"));

});

parcelRequire.register("bALel", function(module, exports) {
module.exports = new URL("img-placeholder-4.728679b2.jpg", import.meta.url).toString();

});

parcelRequire.register("ikRkU", function(module, exports) {
module.exports = import("./sandbox.data.d54def4d.js").then(()=>parcelRequire("b3i3L"));

});

parcelRequire.register("82Jkt", function(module, exports) {
module.exports = new URL("air-quality-and-covid-19--story-cover.0e88beec.jpg", import.meta.url).toString();

});

parcelRequire.register("9uLHp", function(module, exports) {
module.exports = import("./air-quality-and-covid-19.stories.e5355462.js").then(()=>parcelRequire("5BEBQ"));

});

parcelRequire.register("2tUNo", function(module, exports) {
module.exports = new URL("img-placeholder-6.88847e66.jpg", import.meta.url).toString();

});

parcelRequire.register("2TPpb", function(module, exports) {
module.exports = import("./external-link-example.stories.e9f753e8.js").then(()=>parcelRequire("c5Ko5"));

});

parcelRequire.register("2Eg1g", function(module, exports) {
module.exports = import("./internal-link-example.stories.98ca11fe.js").then(()=>parcelRequire("cZJgW"));

});

parcelRequire.register("eYFxV", function(module, exports) {
module.exports = import("./life-of-water.stories.43a61ea9.js").then(()=>parcelRequire("7FVXN"));

});

parcelRequire.register("8b31i", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $5f41b185219f52a8$export$2e2bcd8739ae039; });





var $47Isj = parcelRequire("47Isj");

var $978L3 = parcelRequire("978L3");

var $4FnrG = parcelRequire("4FnrG");

var $a91Fy = parcelRequire("a91Fy");

var $lWu9G = parcelRequire("lWu9G");

var $eL5VT = parcelRequire("eL5VT");

var $5Pq7j = parcelRequire("5Pq7j");

var $djhuc = parcelRequire("djhuc");

var $V0mFk = parcelRequire("V0mFk");

var $6WR6j = parcelRequire("6WR6j");

var $hBlPC = parcelRequire("hBlPC");
function $5f41b185219f52a8$var$MdxContent(props) {
    const pageMdx = (0, $47Isj.useMdxPageLoader)(props.loader);
    if (pageMdx.status === (0, $978L3.S_LOADING)) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.ContentLoading), {});
    if (pageMdx.status === (0, $978L3.S_SUCCEEDED)) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$MDXProvider), {
        components: {
            Block: $a91Fy.default,
            Prose: (0, $eL5VT.ContentBlockProse),
            Figure: (0, $lWu9G.default),
            Caption: $5Pq7j.Caption,
            Chapter: $djhuc.Chapter,
            Image: $5Pq7j.default,
            Map: (0, $V0mFk.LazyMap),
            ScrollytellingBlock: (0, $V0mFk.LazyScrollyTelling),
            Chart: (0, $V0mFk.LazyChart),
            CompareImage: (0, $V0mFk.LazyCompareImage),
            NotebookConnectCallout: (0, $6WR6j.NotebookConnectCalloutBlock),
            Link: (0, $hBlPC.default),
            a: (0, $hBlPC.CustomLink),
            Table: (0, $V0mFk.LazyTable),
            Embed: (0, $V0mFk.LazyEmbed)
        },
        children: /*#__PURE__*/ (0, $22uAH$jsx)(pageMdx.MdxContent, {
            ...props.throughProps || {}
        })
    });
    return null;
}
$5f41b185219f52a8$var$MdxContent.propTypes = {
    loader: (0, $22uAH$proptypes).func,
    throughProps: (0, $22uAH$proptypes).object
};
var $5f41b185219f52a8$export$2e2bcd8739ae039 = $5f41b185219f52a8$var$MdxContent;

});
parcelRequire.register("47Isj", function(module, exports) {

$parcel$export(module.exports, "useMdxPageLoader", function () { return $451a2f684023e5f0$export$35be397a9d49deea; });
$parcel$export(module.exports, "generateTaxonomies", function () { return $451a2f684023e5f0$export$169842684a0b1048; });
$parcel$export(module.exports, "TAXONOMY_TOPICS", function () { return $451a2f684023e5f0$export$d101bd2158e5168d; });
$parcel$export(module.exports, "TAXONOMY_SOURCE", function () { return $451a2f684023e5f0$export$d4f4f1e55b8a9393; });
$parcel$export(module.exports, "TAXONOMY_GRADE", function () { return $451a2f684023e5f0$export$7dcd5643bc2d64d8; });
$parcel$export(module.exports, "TAXONOMY_UNCERTAINTY", function () { return $451a2f684023e5f0$export$c6dd31dcfd3be20b; });
$parcel$export(module.exports, "getTaxonomy", function () { return $451a2f684023e5f0$export$6c3855d1405cdf74; });
$parcel$export(module.exports, "getAllTaxonomyValues", function () { return $451a2f684023e5f0$export$d7c8b3df777589c6; });
$parcel$export(module.exports, "getTaxonomyByIds", function () { return $451a2f684023e5f0$export$3b9206893354b380; });




var $etfqO = parcelRequire("etfqO");

var $978L3 = parcelRequire("978L3");
const $451a2f684023e5f0$export$7dd07fd28ae1506d = Object.values((0, $etfqO.datasets)).map((d)=>d.data);
const $451a2f684023e5f0$export$adbcb364ea5e63ec = Object.values((0, $etfqO.stories)).map((d)=>d.data);
function $451a2f684023e5f0$export$3ee30d5a4184e73f() {
    const { storyId: storyId  } = (0, $22uAH$useParams)();
    const story = (0, $etfqO.stories)[storyId ?? ""]; // Stop if the story doesn't exist.
    return story ?? null;
}
function $451a2f684023e5f0$export$1aafb48d4543fc87() {
    const { datasetId: datasetId  } = (0, $22uAH$useParams)();
    const dataset = (0, $etfqO.datasets)[datasetId ?? ""]; // Stop if the datasets doesn't exist.
    return dataset ?? null;
}
function $451a2f684023e5f0$export$35be397a9d49deea(loader) {
    const [pageMdx, setPageMdx] = (0, $22uAH$useState)({
        status: (0, $978L3.S_IDLE),
        MdxContent: null
    });
    (0, $22uAH$useEffect)(()=>{
        if (!loader) return;
        const load = async ()=>{
            setPageMdx({
                status: (0, $978L3.S_LOADING),
                MdxContent: null
            });
            const content = await loader();
            setPageMdx({
                status: (0, $978L3.S_SUCCEEDED),
                MdxContent: content.default
            });
        };
        load();
    }, [
        loader
    ]);
    return pageMdx;
}
function $451a2f684023e5f0$export$169842684a0b1048(data) {
    const concat = (arr, v)=>(arr || []).concat(v);
    const taxonomyData = {}; // for loops are faster than reduces.
    for (const { taxonomy: taxonomy  } of data)for (const { name: name , values: values  } of taxonomy){
        if (!name || !values?.length) continue;
        taxonomyData[name] = concat(taxonomyData[name], values);
    }
    const taxonomiesUnique = Object.entries(taxonomyData).map(([key, tx])=>({
            name: key,
            // eslint-disable-next-line fp/no-mutating-methods
            values: (0, $22uAH$uniqBy)(tx, (t)=>t.id).sort((a, b)=>a.name.localeCompare(b.name))
        }));
    return taxonomiesUnique;
} // Taxonomies with special meaning as they're used in the app, like in the cards
const $451a2f684023e5f0$export$d101bd2158e5168d = "Topics";
const $451a2f684023e5f0$export$d4f4f1e55b8a9393 = "Source";
const $451a2f684023e5f0$export$7dcd5643bc2d64d8 = "Grade";
const $451a2f684023e5f0$export$c6dd31dcfd3be20b = "Uncertainty";
function $451a2f684023e5f0$export$6c3855d1405cdf74(data, taxonomyName) {
    const list = Array.isArray(data) ? data : data.taxonomy;
    return list.find((t)=>t.name === taxonomyName);
}
function $451a2f684023e5f0$export$d7c8b3df777589c6(data) {
    const list = Array.isArray(data) ? data : data.taxonomy;
    const allValues = list.map((l)=>l.values).flat();
    return allValues;
}
function $451a2f684023e5f0$export$3b9206893354b380(group, ids, taxonomies) {
    const groupValues = taxonomies.find((t)=>t.name == group)?.values;
    let taxonomyItems = [];
    if (ids instanceof Array) {
        const items = ids.map((id)=>groupValues?.filter((value)=>value.id == id)[0]);
        taxonomyItems = items.map((item)=>({
                ...item,
                taxonomy: group
            }));
    } else {
        const taxonomy = groupValues?.filter((value)=>value.id == ids)[0];
        /* eslint-disable-next-line fp/no-mutating-methods */ if (taxonomy) taxonomyItems.push({
            ...taxonomy,
            taxonomy: group
        });
    }
    return taxonomyItems;
}

});
parcelRequire.register("etfqO", function(module, exports) {

$parcel$export(module.exports, "getOverride", function () { return $02b7fef17b68d058$export$72427a1521dd0069; });
$parcel$export(module.exports, "userPages", function () { return $02b7fef17b68d058$export$dce756e42e46fb8d; });
$parcel$export(module.exports, "getString", function () { return $02b7fef17b68d058$export$f8963f3214707ee4; });
$parcel$export(module.exports, "getBoolean", function () { return $02b7fef17b68d058$export$11811c4d2c6a473d; });
$parcel$export(module.exports, "datasets", function () { return $02b7fef17b68d058$export$98351ca05c1b59e4; });
$parcel$export(module.exports, "stories", function () { return $02b7fef17b68d058$export$417f05a13bd2667c; });





const $02b7fef17b68d058$var$config = {
    pageOverrides: {
        "aboutContent": {
            data: {
                "title": "About the Dashboard",
                "description": "Visualization, Exploration, and Data Analysis (VEDA): Scalable and Interactive System for Science Data."
            },
            content: ()=>(parcelRequire("fhtwm"))
        },
        "sandbox-override": {
            data: {},
            content: ()=>(parcelRequire("gUk6W"))
        },
        "/disclaimer": {
            data: {
                "menu": "Disclaimer",
                "title": "This is the disclaimer"
            },
            content: ()=>(parcelRequire("fEBGk"))
        },
        "/custom-page": {
            data: {
                "menu": "Custom",
                "title": "A custom page",
                "description": "This is the description of a custom page. And it is optional!"
            },
            content: ()=>(parcelRequire("bqq39"))
        },
        "/aparam/:id": {
            data: {
                "title": "This is a param!",
                "description": "why so sullen..."
            },
            content: ()=>(parcelRequire("fR8Lm"))
        }
    },
    strings: {
        "stories": {
            "one": "Story",
            "other": "Stories"
        },
        "storiesBanner": {
            "one": "Explore the guided narratives below to discover how NASA satellites and other Earth observing resources reveal a changing planet.",
            "other": "Explore the guided narratives below to discover how NASA satellites and other Earth observing resources reveal a changing planet."
        },
        "dataCatalogBanner": {
            "one": "This dashboard explores key indicators to track and compare changes over time.",
            "other": "This dashboard explores key indicators to track and compare changes over time."
        }
    },
    booleans: {
        "stories": {
            "one": "Story",
            "other": "Stories"
        },
        "storiesBanner": {
            "one": "Explore the guided narratives below to discover how NASA satellites and other Earth observing resources reveal a changing planet.",
            "other": "Explore the guided narratives below to discover how NASA satellites and other Earth observing resources reveal a changing planet."
        },
        "dataCatalogBanner": {
            "one": "This dashboard explores key indicators to track and compare changes over time.",
            "other": "This dashboard explores key indicators to track and compare changes over time."
        }
    }
};
const $02b7fef17b68d058$export$bca14c5b3b88a9c9 = null;
const $02b7fef17b68d058$export$73105a133948e25f = [
    {
        "name": "Topics",
        "values": [
            {
                "id": "agriculture",
                "name": "Agriculture"
            },
            {
                "id": "air-quality",
                "name": "Air Quality"
            },
            {
                "id": "covid-19",
                "name": "Covid 19"
            }
        ]
    },
    {
        "name": "Source",
        "values": [
            {
                "id": "development-seed",
                "name": "Development Seed"
            }
        ]
    }
];
const $02b7fef17b68d058$export$72427a1521dd0069 = (key)=>$02b7fef17b68d058$var$config.pageOverrides[key];
const $02b7fef17b68d058$export$dce756e42e46fb8d = Object.keys($02b7fef17b68d058$var$config.pageOverrides).filter((k)=>k.startsWith("/"));
const $02b7fef17b68d058$export$f8963f3214707ee4 = (variable)=>$02b7fef17b68d058$var$config.strings[variable];
const $02b7fef17b68d058$export$11811c4d2c6a473d = (variable)=>$02b7fef17b68d058$var$config.booleans[variable];















const $02b7fef17b68d058$export$98351ca05c1b59e4 = {
    "GPM_3IMERGDF.v07": {
        data: {
            "id": "GPM_3IMERGDF.v07",
            "name": "GPM IMERG Daily Precipitation",
            "description": "GPM IMERG Final Precipitation L3 1 day 0.1 degree x 0.1 degree",
            "media": {
                "src": (parcelRequire("clTb4")),
                "alt": "CMIP6 Near-Surface Air Temperature Screenshot",
                "author": {
                    "name": "NASA",
                    "url": null
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "climate",
                            "name": "Climate"
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "id": "GPM_3IMERGDF.v07",
                    "type": "cmr",
                    "stacApiEndpoint": "https://cmr.earthdata.nasa.gov/cloudstac/GES_DISC",
                    "tileApiEndpoint": "https://prod-titiler-xarray.delta-backend.com/tilejson.json",
                    "stacCol": "GPM_3IMERGDF.v07",
                    "assetUrlReplacements": {
                        "from": "https://data.gesdisc.earthdata.nasa.gov/data",
                        "to": "s3://gesdisc-cumulus-prod-protected"
                    },
                    "name": "GPM IMERG Final Precipitation L3 1 day 0.1 degree x 0.1 degree",
                    "description": "GPM Level 3 IMERG Final Daily 10 x 10 km (GPM_3IMERGDF) accumulated precipitation",
                    "time_density": "day",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "variable": "precipitation",
                        "colormap_name": "gnbu",
                        "rescale": "0,46",
                        "maxzoom": 12
                    },
                    "legend": {
                        "unit": {
                            "label": null
                        },
                        "type": "gradient",
                        "min": "0 mm/hr",
                        "max": "46 mm/hr",
                        "stops": [
                            "#f7fcf0",
                            "#e6f5e1",
                            "#d7efd1",
                            "#c5e8c2",
                            "#abdeb6",
                            "#8bd2bf",
                            "#6bc3c9",
                            "#4bafd1",
                            "#3193c2",
                            "#1878b4",
                            "#085da0",
                            "#084081"
                        ]
                    }
                }
            ]
        },
        content: ()=>(parcelRequire("5CG1q"))
    },
    "TRMM_3B42_Daily": {
        data: {
            "id": "TRMM_3B42_Daily",
            "name": "Daily accumulated precipitation from the TRMM Multi-Satellite",
            "description": "Daily accumulated precipitation product generated from the research-quality 3-hourly TRMM Multi-Satellite Precipitation Analysis TMPA (3B42)",
            "media": {
                "src": (parcelRequire("fmmYi")),
                "alt": "CMIP6 Near-Surface Air Temperature Screenshot",
                "author": {
                    "name": "NASA",
                    "url": null
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "climate",
                            "name": "Climate"
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "id": "TRMM_3B42_Daily.v7",
                    "stacApiEndpoint": "https://cmr.earthdata.nasa.gov/cloudstac/GES_DISC",
                    "tileApiEndpoint": "https://prod-titiler-xarray.delta-backend.com/tilejson.json",
                    "stacCol": "TRMM_3B42_Daily.v7",
                    "name": "TRMM_3B42_Daily",
                    "type": "cmr",
                    "time_density": "day",
                    "assetUrlReplacements": {
                        "from": "https://data.gesdisc.earthdata.nasa.gov/data",
                        "to": "s3://gesdisc-cumulus-prod-protected"
                    },
                    "description": "Daily accumulated precipitation product generated from the research-quality 3-hourly TRMM Multi-Satellite Precipitation Analysis TMPA (3B42)",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "variable": "precipitation",
                        "colormap_name": "gnbu",
                        "rescale": "0,46",
                        "maxzoom": 12
                    },
                    "analysis": {
                        "exclude": true
                    },
                    "legend": {
                        "unit": {
                            "label": null
                        },
                        "type": "gradient",
                        "min": "0 mm/hr",
                        "max": "46 mm/hr",
                        "stops": [
                            "#f7fcf0",
                            "#e6f5e1",
                            "#d7efd1",
                            "#c5e8c2",
                            "#abdeb6",
                            "#8bd2bf",
                            "#6bc3c9",
                            "#4bafd1",
                            "#3193c2",
                            "#1878b4",
                            "#085da0",
                            "#084081"
                        ]
                    }
                }
            ]
        },
        content: ()=>(parcelRequire("aNDQu"))
    },
    "casagfed-carbonflux-monthgrid-v3": {
        data: {
            "id": "casagfed-carbonflux-monthgrid-v3",
            "name": "CASA-GFED3 Land Carbon Flux",
            "description": "Global, monthly 0.5 degree resolution carbon fluxes from Net Primary Production (NPP), heterotrophic respiration (Rh), wildfire emissions (FIRE), and fuel wood burning emissions (FUEL) derived from the CASA-GFED model, version 3",
            "usage": [
                {
                    "url": "https://us-ghg-center.github.io/ghgc-docs/cog_transformation/casagfed-carbonflux-monthgrid-v3.html",
                    "label": "Notebook showing data transformation to COG for ingest to the US GHG Center",
                    "title": "Data Transformation Notebook"
                },
                {
                    "url": "https://us-ghg-center.github.io/ghgc-docs/user_data_notebooks/casagfed-carbonflux-monthgrid-v3_User_Notebook.html",
                    "label": "Notebook to read, visualize, and explore data statistics",
                    "title": "Sample Data Notebook"
                },
                {
                    "url": "https://hub.ghg.center/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2FUS-GHG-Center%2Fghgc-docs&urlpath=tree%2Fghgc-docs%2Fuser_data_notebooks%2Fcasagfed-carbonflux-monthgrid-v3_User_Notebook.ipynb&branch=main",
                    "label": "Run example notebook",
                    "title": "Interactive Session in the US GHG Center JupyterHub (requires account)"
                },
                {
                    "url": "https://dljsq618eotzp.cloudfront.net/browseui/index.html#casagfed-carbonflux-monthgrid-v3/",
                    "label": "Browse and download the data",
                    "title": "Data Browser"
                }
            ],
            "media": {
                "src": (parcelRequire("9lvBw")),
                "alt": "wildfire",
                "author": {
                    "name": "Marcus Kauffman"
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "natural-emissions-and-sinks",
                            "name": "Natural Emissions and Sinks"
                        }
                    ]
                },
                {
                    "name": "Source",
                    "values": [
                        {
                            "id": "nasa",
                            "name": "NASA"
                        }
                    ]
                },
                {
                    "name": "Gas",
                    "values": [
                        {
                            "id": "co₂",
                            "name": "CO₂"
                        }
                    ]
                },
                {
                    "name": "Product Type",
                    "values": [
                        {
                            "id": "model-output",
                            "name": "Model Output"
                        }
                    ]
                }
            ],
            "infoDescription": "<ul><li>Temporal Extent: January 2000 - December 2021</li><li>Temporal Resolution: Monthly</li><li>Spatial Extent: Global</li><li>Spatial Resolution: 1 km x 1 km</li><li>Data Units: Tons of carbon per 1 km x 1 km cell (monthly total)</li><li>Data Type: Research</li><li>Data Latency: Updated annually, following the release of an updated [BP Statistical Review of World Energy report]</li></ul>",
            "layers": [
                {
                    "id": "casa-gfed-co2-flux",
                    "stacApiEndpoint": "https://ghg.center/api/stac",
                    "tileApiEndpoint": "https://ghg.center/api/raster",
                    "stacCol": "casagfed-carbonflux-monthgrid-v3",
                    "name": "Net Primary Production (NPP)",
                    "type": "raster",
                    "description": "Model-estimated net primary production (NPP), which is the amount of carbon available from plants",
                    "initialDatetime": "newest",
                    "projection": {
                        "id": "equirectangular"
                    },
                    "basemapId": "light",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "assets": "npp",
                        "colormap_name": "purd",
                        "rescale": [
                            0,
                            0.3
                        ]
                    },
                    "compare": {
                        "datasetId": "nighttime-lights",
                        "layerId": "nightlights-hd-monthly",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            if (dateFns && datetime && compareDatetime) return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "kg Carbon/m\xb2/mon"
                        },
                        "type": "gradient",
                        "min": 0,
                        "max": 0.3,
                        "stops": [
                            "#F7F4F9",
                            "#E9E3F0",
                            "#D9C3DF",
                            "#CDA0CD",
                            "#D57ABA",
                            "#E34A9F",
                            "#DF2179",
                            "#C10E51",
                            "#92003F",
                            "#67001F"
                        ]
                    },
                    "info": {
                        "source": "NASA",
                        "spatialExtent": "Global",
                        "temporalResolution": "Monthly",
                        "unit": "10\xb9⁵ molecules cm⁻\xb2"
                    }
                },
                {
                    "id": "casa-gfed-co2-flux-hr",
                    "stacApiEndpoint": "https://ghg.center/api/stac",
                    "tileApiEndpoint": "https://ghg.center/api/raster",
                    "stacCol": "casagfed-carbonflux-monthgrid-v3",
                    "name": "Heterotrophic Respiration (Rh)",
                    "type": "raster",
                    "description": "Model-estimated heterotrophic respiration (Rh), which is the flux of carbon from the soil to the atmosphere",
                    "initialDatetime": "newest",
                    "projection": {
                        "id": "equirectangular"
                    },
                    "basemapId": "light",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "assets": "rh",
                        "colormap_name": "purd",
                        "rescale": [
                            0,
                            0.3
                        ]
                    },
                    "compare": {
                        "datasetId": "casagfed-carbonflux-monthgrid-v3",
                        "layerId": "casa-gfed-co2-flux-hr",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            if (dateFns && datetime && compareDatetime) return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "kg Carbon/m\xb2/mon"
                        },
                        "type": "gradient",
                        "min": 0,
                        "max": 0.3,
                        "stops": [
                            "#F7F4F9",
                            "#E9E3F0",
                            "#D9C3DF",
                            "#CDA0CD",
                            "#D57ABA",
                            "#E34A9F",
                            "#DF2179",
                            "#C10E51",
                            "#92003F",
                            "#67001F"
                        ]
                    }
                },
                {
                    "id": "casa-gfed-co2-flux-nee",
                    "stacApiEndpoint": "https://ghg.center/api/stac",
                    "tileApiEndpoint": "https://ghg.center/api/raster",
                    "stacCol": "casagfed-carbonflux-monthgrid-v3",
                    "name": "Net Ecosystem Exchange (NEE)",
                    "type": "raster",
                    "description": "Model-estimated net ecosystem exchange (NEE), which is the net carbon flux to the atmosphere",
                    "initialDatetime": "newest",
                    "projection": {
                        "id": "equirectangular"
                    },
                    "basemapId": "light",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "assets": "nee",
                        "colormap_name": "coolwarm",
                        "rescale": [
                            -0.1,
                            0.1
                        ]
                    },
                    "compare": {
                        "datasetId": "casagfed-carbonflux-monthgrid-v3",
                        "layerId": "casa-gfed-co2-flux-nee",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            if (dateFns && datetime && compareDatetime) return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "kg Carbon/m\xb2/mon"
                        },
                        "type": "gradient",
                        "min": -0.1,
                        "max": 0.1,
                        "stops": [
                            "#3B4CC0",
                            "#6788EE",
                            "#9ABBFF",
                            "#C9D7F0",
                            "#EDD1C2",
                            "#F7A889",
                            "#E26952",
                            "#B40426"
                        ]
                    }
                },
                {
                    "id": "casa-gfed-co2-flux-fe",
                    "stacApiEndpoint": "https://ghg.center/api/stac",
                    "tileApiEndpoint": "https://ghg.center/api/raster",
                    "stacCol": "casagfed-carbonflux-monthgrid-v3",
                    "name": "Fire Emissions (FIRE)",
                    "type": "raster",
                    "description": "Model-estimated flux of carbon to the atmosphere from wildfires",
                    "initialDatetime": "newest",
                    "projection": {
                        "id": "equirectangular"
                    },
                    "basemapId": "light",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "assets": "fire",
                        "colormap_name": "purd",
                        "rescale": [
                            0,
                            0.3
                        ]
                    },
                    "compare": {
                        "datasetId": "casagfed-carbonflux-monthgrid-v3",
                        "layerId": "casa-gfed-co2-flux-fe",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            if (dateFns && datetime && compareDatetime) return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "kg Carbon/m\xb2/mon"
                        },
                        "type": "gradient",
                        "min": 0,
                        "max": 0.3,
                        "stops": [
                            "#F7F4F9",
                            "#E9E3F0",
                            "#D9C3DF",
                            "#CDA0CD",
                            "#D57ABA",
                            "#E34A9F",
                            "#DF2179",
                            "#C10E51",
                            "#92003F",
                            "#67001F"
                        ]
                    }
                },
                {
                    "id": "casa-gfed-co2-flux-fuel",
                    "stacApiEndpoint": "https://ghg.center/api/stac",
                    "tileApiEndpoint": "https://ghg.center/api/raster",
                    "stacCol": "casagfed-carbonflux-monthgrid-v3",
                    "name": "Wood Fuel Emissions (FUEL)",
                    "type": "raster",
                    "description": "Model-estimated flux of carbon to the atmosphere from wood burned for fuel",
                    "initialDatetime": "newest",
                    "projection": {
                        "id": "equirectangular"
                    },
                    "basemapId": "light",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "assets": "fuel",
                        "colormap_name": "bupu",
                        "rescale": [
                            0,
                            0.03
                        ]
                    },
                    "compare": {
                        "datasetId": "casagfed-carbonflux-monthgrid-v3",
                        "layerId": "casa-gfed-co2-flux-fuel",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            if (dateFns && datetime && compareDatetime) return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "kg Carbon/m\xb2/mon"
                        },
                        "type": "gradient",
                        "min": 0,
                        "max": 0.03,
                        "stops": [
                            "#F7FCFD",
                            "#DCE9F2",
                            "#B5CCE3",
                            "#96ACD2",
                            "#8C7DBA",
                            "#894DA3",
                            "#821580",
                            "#4D004B"
                        ]
                    }
                }
            ]
        },
        content: ()=>(parcelRequire("65cGT"))
    },
    "fire": {
        data: {
            "id": "fire",
            "name": "EIS Fire",
            "description": "EIS Fire.",
            "media": {
                "src": (parcelRequire("9cL5F")),
                "alt": "Power plant shooting steam at the sky.",
                "author": {
                    "name": "Mick Truyts",
                    "url": "https://unsplash.com/photos/x6WQeNYJC1w"
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "covid-19",
                            "name": "Covid 19"
                        }
                    ]
                },
                {
                    "name": "Sector",
                    "values": [
                        {
                            "id": "agriculture-forestry-and-land-use",
                            "name": "Agriculture, Forestry and Land Use"
                        },
                        {
                            "id": "energy",
                            "name": "Energy"
                        }
                    ]
                },
                {
                    "name": "Producer",
                    "values": [
                        {
                            "id": "nist",
                            "name": "NIST"
                        }
                    ]
                },
                {
                    "name": "Gas Emission",
                    "values": [
                        {
                            "id": "c-ox",
                            "name": "COx"
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "id": "eis_fire_perimeter",
                    "stacCol": "eis_fire_perimeter",
                    "name": "Fire",
                    "type": "vector",
                    "description": "eis_fire_perimeter",
                    "zoomExtent": [
                        5,
                        20
                    ]
                }
            ]
        },
        content: ()=>(parcelRequire("8mRqF"))
    },
    "nighttime-lights": {
        data: {
            "featured": true,
            "id": "nighttime-lights",
            "name": "Nighttime Lights",
            "description": "During the COVID-19 pandemic, researchers are using night light observations to track variations in energy use, migration, and transportation in response to social distancing and lockdown measures.",
            "media": {
                "src": (parcelRequire("jwB8a")),
                "alt": "Satellite image of Earth at night.",
                "author": {
                    "name": "NASA Earth Observatory",
                    "url": "https://earthobservatory.nasa.gov/images/90008/night-light-maps-open-up-new-applications"
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "covid-19",
                            "name": "Covid 19"
                        },
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        }
                    ]
                },
                {
                    "name": "Sector",
                    "values": [
                        {
                            "id": "electricity",
                            "name": "Electricity"
                        }
                    ]
                },
                {
                    "name": "Producer",
                    "values": [
                        {
                            "id": "nasa",
                            "name": "NASA"
                        }
                    ]
                },
                {
                    "name": "Gas Emission",
                    "values": [
                        {
                            "id": "dos",
                            "name": "DOS"
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "id": "nightlights-hd-monthly",
                    "stacCol": "nightlights-hd-monthly",
                    "name": "Nightlights Monthly",
                    "type": "raster",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales semper risus, suscipit varius diam facilisis non.",
                    "zoomExtent": [
                        4,
                        16
                    ],
                    "sourceParams": {
                        "bidx": 1,
                        "colormap_name": "inferno",
                        "rescale": [
                            0,
                            255
                        ]
                    },
                    "legend": {
                        "type": "gradient",
                        "min": "Less",
                        "max": "More",
                        "stops": [
                            "#08041d",
                            "#1f0a46",
                            "#52076c",
                            "#f57c16",
                            "#f7cf39"
                        ]
                    }
                }
            ]
        },
        content: ()=>(parcelRequire("30D7I"))
    },
    "no2": {
        data: {
            "id": "no2",
            "name": "Nitrogen Dioxide",
            "featured": true,
            "sourceExclusive": "Mock",
            "description": "Since the outbreak of the novel coronavirus, atmospheric concentrations of nitrogen dioxide have changed by as much as 60% in some regions.",
            "usage": [
                {
                    "url": "https://nasa-impact.github.io/veda-documentation/timeseries-stac-api.html",
                    "label": "Static notebook",
                    "title": "Time series using STAC API statistics endpoints"
                },
                {
                    "url": "https://daskhub.veda.smce.nasa.gov/hub/user-redirect/git-pull?repo=https%3A%2F%2Fgithub.com%2Fnasa-impact%2Fveda-documentation&urlpath=lab%2Ftree%2Fveda-documentation%2Ftimeseries-stac-api.ipynb&branch=main",
                    "label": "SMCE DaskHub",
                    "title": "Time series using STAC API statistics endpoints"
                },
                {
                    "url": "https://github.com/NASA-IMPACT/veda-docs",
                    "label": "All the docs for the site",
                    "title": "Documentaion repo"
                },
                {
                    "url": "https://d36s2ep3ahcq5b.cloudfront.net/browseui/index.html#ch4_inverse_flux",
                    "label": "Data Browser",
                    "title": "Download data"
                }
            ],
            "media": {
                "src": (parcelRequire("9cL5F")),
                "alt": "Power plant shooting steam at the sky.",
                "author": {
                    "name": "Mick Truyts",
                    "url": "https://unsplash.com/photos/x6WQeNYJC1w"
                }
            },
            "taxonomy": [
                {
                    "name": "Grade",
                    "values": [
                        {
                            "id": "research",
                            "name": "Research"
                        }
                    ]
                },
                {
                    "name": "Uncertainty",
                    "values": [
                        {
                            "id": "low",
                            "name": "Low"
                        }
                    ]
                },
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "covid-19",
                            "name": "Covid 19"
                        },
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        },
                        {
                            "id": "air-quality",
                            "name": "Air Quality"
                        }
                    ]
                },
                {
                    "name": "Sector",
                    "values": [
                        {
                            "id": "electricity",
                            "name": "Electricity"
                        }
                    ]
                },
                {
                    "name": "Producer",
                    "values": [
                        {
                            "id": "nasa",
                            "name": "NASA"
                        }
                    ]
                },
                {
                    "name": "Gas Emission",
                    "values": [
                        {
                            "id": "dos",
                            "name": "DOS"
                        }
                    ]
                },
                {
                    "name": "Source",
                    "values": [
                        {
                            "id": "mock",
                            "name": "Mock"
                        }
                    ]
                }
            ],
            "infoDescription": '<ul><li>Temporal Extent: January 2000 - December 2021</li><li>Temporal Resolution: Monthly</li><li>Spatial Extent: Global</li><li>Spatial Resolution: 1 km x 1 km</li><li>Data Units: Tons of carbon per 1 km x 1 km cell (monthly total)</li><li>Data Type: Research</li><li>Data Latency: Updated annually, following the release of an updated <a href="https://www.bp.com/en/global/corporate/energy-economics.html">BP Statistical Review of World Energy report</a></li></ul>',
            "layers": [
                {
                    "id": "no2-monthly",
                    "stacCol": "no2-monthly",
                    "name": "No2 PT",
                    "media": {
                        "src": (parcelRequire("lVV9f")),
                        "alt": "Placeholder Image"
                    },
                    "type": "raster",
                    "projection": {
                        "id": "polarNorth"
                    },
                    "bounds": [
                        -10,
                        36,
                        -5,
                        42
                    ],
                    "description": "Levels in 10\xb9⁵ molecules cm⁻\xb2. Darker colors indicate higher nitrogen dioxide (NO₂) levels associated and more activity. Lighter colors indicate lower levels of NO₂ and less activity.",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "bidx": 1,
                        "color_formula": "gamma r 1.05",
                        "colormap_name": "coolwarm",
                        "rescale": [
                            0,
                            15000000000000000
                        ]
                    },
                    "compare": {
                        "datasetId": "nighttime-lights",
                        "layerId": "nightlights-hd-monthly",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "Molecules cm3"
                        },
                        "type": "gradient",
                        "min": "Less",
                        "max": "More",
                        "stops": [
                            "#99c5e0",
                            "#f9eaa9",
                            "#f7765d",
                            "#c13b72",
                            "#461070",
                            "#050308"
                        ]
                    },
                    "analysis": {
                        "metrics": [
                            "min",
                            "max",
                            "non-existent"
                        ]
                    },
                    "info": {
                        "source": "NASA",
                        "spatialExtent": "Global",
                        "temporalResolution": "Monthly",
                        "unit": "10\xb9⁵ molecules cm⁻\xb2"
                    }
                },
                {
                    "id": "no2-monthly-2",
                    "stacCol": "no2-monthly",
                    "name": "No2 US",
                    "bounds": [
                        -124,
                        29,
                        -65,
                        49
                    ],
                    "type": "raster",
                    "description": "Levels in 10\xb9⁵ molecules cm⁻\xb2. Darker colors indicate higher nitrogen dioxide (NO₂) levels associated and more activity. Lighter colors indicate lower levels of NO₂ and less activity.",
                    "basemapId": "dark",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "bidx": 1,
                        "color_formula": "gamma r 1.05",
                        "colormap_name": "coolwarm",
                        "rescale": [
                            0,
                            15000000000000000
                        ]
                    },
                    "legend": {
                        "unit": {
                            "label": "Molecules cm3"
                        },
                        "type": "gradient",
                        "min": "Less",
                        "max": "More",
                        "stops": [
                            "#99c5e0",
                            "#f9eaa9",
                            "#f7765d",
                            "#c13b72",
                            "#461070",
                            "#050308"
                        ]
                    },
                    "analysis": {
                        "exclude": true
                    }
                },
                {
                    "id": "no2-monthly-diff",
                    "stacCol": "no2-monthly-diff",
                    "name": "No2 (Diff) - let's make this title reaaaaaaly long",
                    "type": "raster",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales semper risus, suscipit varius diam facilisis non.",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "bidx": 1,
                        "colormap_name": "rdbu_r",
                        "rescale": [
                            -8000000000000000,
                            8000000000000000
                        ]
                    },
                    "compare": {
                        "datasetId": "no2",
                        "layerId": "no2-monthly-diff",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "unit": {
                            "label": "molecules/cm3"
                        },
                        "type": "gradient",
                        "min": "-3934857984753",
                        "max": "3348573489573",
                        "stops": [
                            "#3A88BD",
                            "#C9E0ED",
                            "#E4EEF3",
                            "#FDDCC9",
                            "#DD7059"
                        ]
                    }
                }
            ]
        },
        content: ()=>(parcelRequire("28H4e"))
    },
    "sandbox": {
        data: {
            "featured": false,
            "id": "sandbox",
            "name": "Sandbox",
            "description": "Travel restrictions and lockdown measures have disrupted the shipping industry and the global economy broadly. NASA researchers are using artificial intelligence to track shipping activities across major ports in the U.S.",
            "media": {
                "src": (parcelRequire("bALel")),
                "alt": "Generic placeholder by Unsplash",
                "author": {
                    "name": "Unsplash",
                    "url": "https://unsplash.com/"
                }
            },
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "covid-19",
                            "name": "Covid 19"
                        },
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        },
                        {
                            "id": "our-planet",
                            "name": "Our Planet"
                        },
                        {
                            "id": "experimental",
                            "name": "Experimental"
                        },
                        {
                            "id": "untested",
                            "name": "Untested"
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "id": "combined_CMIP6_daily_GISS-E2-1-G_tas_kerchunk_DEMO",
                    "stacCol": "combined_CMIP6_daily_GISS-E2-1-G_tas_kerchunk_DEMO",
                    "name": "CMIP6 Daily GISS-E2-1-G Near-Surface Air Temperature (demo subset)",
                    "type": "zarr",
                    "tileApiEndpoint": "https://prod-titiler-xarray.delta-backend.com/tilejson.json",
                    "description": "Historical (1950-2014) daily-mean near-surface (usually, 2 meter) air temperature in Kelvin.",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "reference": "true",
                        "resampling_method": "bilinear",
                        "variable": "tas",
                        "colormap_name": "coolwarm",
                        "rescale": "232,312",
                        "maxzoom": 12
                    },
                    "legend": {
                        "unit": {
                            "label": "K"
                        },
                        "type": "gradient",
                        "min": 232,
                        "max": 312,
                        "stops": [
                            "#3b4cc0",
                            "#7b9ff9",
                            "#c0d4f5",
                            "#f2cbb7",
                            "#ee8468",
                            "#b40426"
                        ]
                    }
                },
                {
                    "id": "blue-tarp-planetscope",
                    "stacCol": "blue-tarp-planetscope",
                    "name": "Blue tarp test",
                    "type": "raster",
                    "description": "Blue tarp tests",
                    "zoomExtent": [
                        10,
                        20
                    ]
                },
                {
                    "id": "hls-s30-002-ej",
                    "stacCol": "hls-s30-002-ej",
                    "name": "HLS",
                    "type": "raster",
                    "description": "Testing HLS",
                    "zoomExtent": [
                        10,
                        16
                    ],
                    "sourceParams": {
                        "post_process": "swir",
                        "assets": [
                            "B12",
                            "B8A",
                            "B04"
                        ]
                    }
                },
                {
                    "id": "social-vul-1",
                    "stacCol": "social-vulnerability-index-household",
                    "name": "Household and Disability Score",
                    "type": "raster",
                    "description": "Household Composition & Disability (Aged 65 or Older, Aged 17 or Younger, Civilian with a Disability, Single-Parent Households) - Percentile ranking",
                    "projection": {
                        "name": "lambertConformalConic",
                        "center": [
                            0,
                            30
                        ],
                        "parallels": [
                            30,
                            30
                        ]
                    },
                    "zoomExtent": [
                        2,
                        16
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "bidx": 1,
                        "colormap_name": "oranges",
                        "rescale": [
                            0,
                            1
                        ]
                    },
                    "compare": {
                        "datasetId": "sandbox",
                        "layerId": "social-vul-1",
                        "mapLabel": ({ dateFns: dateFns , datetime: datetime , compareDatetime: compareDatetime  })=>{
                            return `${dateFns.format(datetime, "LLL yyyy")} VS ${dateFns.format(compareDatetime, "LLL yyyy")}`;
                        }
                    },
                    "legend": {
                        "type": "gradient",
                        "min": "0",
                        "max": "1",
                        "stops": [
                            "#fff5eb",
                            "#fdd9b4",
                            "#fda762",
                            "#f3701b",
                            "#c54102",
                            "#7f2704"
                        ]
                    }
                },
                {
                    "id": "social-vul-2",
                    "stacCol": "social-vulnerability-index-household",
                    "name": "Household and Disability Score 2",
                    "type": "raster",
                    "description": "Household Composition & Disability (Aged 65 or Older, Aged 17 or Younger, Civilian with a Disability, Single-Parent Households) - Percentile ranking",
                    "zoomExtent": [
                        2,
                        16
                    ],
                    "sourceParams": {
                        "resampling_method": "bilinear",
                        "bidx": 1,
                        "colormap_name": "blues",
                        "rescale": [
                            0,
                            0.5
                        ]
                    },
                    "legend": {
                        "type": "gradient",
                        "min": "0",
                        "max": "1",
                        "stops": [
                            "#ffffff",
                            "#0000ff"
                        ]
                    }
                },
                {
                    "id": "epa-annual-emissions_1b1a_coal_mining_underground",
                    "stacCol": "EPA-annual-emissions_1B1a_Coal_Mining_Underground",
                    "name": "Underground Coal Mines",
                    "type": "raster",
                    "description": "Emissions from sector 1B1a from underground coal mining.",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "colormap_name": "rainbow",
                        "rescale": [
                            0,
                            2022634652958
                        ],
                        "nodata": 0
                    },
                    "legend": {
                        "type": "gradient",
                        "min": 0,
                        "max": 2022634652958,
                        "stops": [
                            "#60007d",
                            "#30137d",
                            "#1960ae",
                            "#7ac300",
                            "#f2ce00",
                            "#ef6a01",
                            "#cc0019"
                        ]
                    }
                },
                {
                    "id": "dev-fail",
                    "stacCol": "dev-fail",
                    "name": "Failing layer",
                    "description": "failing",
                    "type": "raster"
                },
                {
                    "id": "geoglam",
                    "stacCol": "geoglam",
                    "name": "GEOGLAM Crop Conditions",
                    "type": "raster",
                    "description": "Combined crop conditions across both the Crop Monitor for AMIS and Crop Monitor for Early Warning",
                    "zoomExtent": [
                        0,
                        16
                    ],
                    "sourceParams": {
                        "colormap": '{"1": [120, 120, 120], "2": [130, 65, 0], "3": [66, 207, 56], "4": [245, 239, 0], "5": [241, 89, 32], "6": [168, 0, 0], "7": [0, 143, 201]}',
                        "bidx": 1,
                        "unscale": false,
                        "resampling": "nearest",
                        "max_size": 1024,
                        "return_mask": true
                    },
                    "legend": {
                        "type": "categorical",
                        "stops": [
                            {
                                "color": "#3A8DC6",
                                "label": "Exceptional"
                            },
                            {
                                "color": "#62D246",
                                "label": "Favourable"
                            },
                            {
                                "color": "#FFFF00",
                                "label": "Watch"
                            },
                            {
                                "color": "#EC5830",
                                "label": "Poor"
                            },
                            {
                                "color": "#891911",
                                "label": "Failure"
                            },
                            {
                                "color": "#787878",
                                "label": "Out of season"
                            },
                            {
                                "color": "#804115",
                                "label": "No data"
                            }
                        ]
                    }
                },
                {
                    "id": "facebook_population_density",
                    "stacCol": "facebook_population_density",
                    "name": "Facebook Population Density",
                    "type": "raster",
                    "description": "Facebook high-resolution population density with a 30m\xb2 resolution",
                    "zoomExtent": [
                        0,
                        20
                    ],
                    "sourceParams": {
                        "resampling": "bilinear",
                        "bidx": 1,
                        "colormap_name": "ylorrd",
                        "rescale": [
                            0,
                            69
                        ]
                    },
                    "legend": {
                        "type": "gradient",
                        "min": "0",
                        "max": "69",
                        "stops": [
                            "#ffffcc",
                            "#fee187",
                            "#feab49",
                            "#fc5b2e",
                            "#d41020",
                            "#800026"
                        ]
                    }
                }
            ],
            "related": [
                {
                    "type": "dataset",
                    "id": "no2"
                },
                {
                    "type": "story",
                    "id": "air-quality-and-covid-19"
                }
            ]
        },
        content: ()=>(parcelRequire("ikRkU"))
    }
};








const $02b7fef17b68d058$export$417f05a13bd2667c = {
    "air-quality-and-covid-19": {
        data: {
            "featured": true,
            "id": "air-quality-and-covid-19",
            "name": "Air Quality and COVID-19",
            "description": "When governments began implementing shutdowns at the start of the COVID-19 pandemic, scientists wondered how the atmosphere would respond to the sudden change in human behavior.",
            "media": {
                "src": (parcelRequire("82Jkt")),
                "alt": "Clear nightsky with crescent moon above the mountains",
                "author": {
                    "name": "Benjamin Voros",
                    "url": "https://unsplash.com/photos/U-Kty6HxcQc"
                }
            },
            "pubDate": "2020-12-01T00:00:00.000Z",
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "air-quality",
                            "name": "Air Quality"
                        },
                        {
                            "id": "covid-19",
                            "name": "Covid 19"
                        }
                    ]
                }
            ]
        },
        content: ()=>(parcelRequire("9uLHp"))
    },
    "external-link-test": {
        data: {
            "featured": true,
            "id": "external-link-test",
            "name": "External Link Test",
            "description": "Story to test external link",
            "media": {
                "src": (parcelRequire("2tUNo")),
                "alt": "Generic placeholder by Unsplash",
                "author": {
                    "name": "Unsplash",
                    "url": "https://unsplash.com/"
                }
            },
            "pubDate": "2023-02-09T00:00:00.000Z",
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        }
                    ]
                },
                {
                    "name": "Source",
                    "values": [
                        {
                            "id": "development-seed",
                            "name": "Development Seed"
                        }
                    ]
                }
            ],
            "related": [
                {
                    "type": "dataset",
                    "id": "no2"
                },
                {
                    "type": "story",
                    "id": "air-quality-and-covid-19"
                }
            ],
            "asLink": {
                "url": "https://developmentseed.org"
            }
        },
        content: ()=>(parcelRequire("2TPpb"))
    },
    "internal-link-test": {
        data: {
            "featured": true,
            "id": "internal-link-test",
            "name": "Internal Link Test",
            "description": "Story to test internal link. Link to cata catalog.",
            "media": {
                "src": (parcelRequire("2tUNo")),
                "alt": "Generic placeholder by Unsplash",
                "author": {
                    "name": "Unsplash",
                    "url": "https://unsplash.com/"
                }
            },
            "pubDate": "2023-02-09T00:00:00.000Z",
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        }
                    ]
                },
                {
                    "name": "Source",
                    "values": [
                        {
                            "id": "development-seed",
                            "name": "Development Seed"
                        }
                    ]
                }
            ],
            "related": [
                {
                    "type": "dataset",
                    "id": "no2"
                },
                {
                    "type": "story",
                    "id": "air-quality-and-covid-19"
                }
            ],
            "asLink": {
                "url": "/data-catalog"
            }
        },
        content: ()=>(parcelRequire("2Eg1g"))
    },
    "life-of-water": {
        data: {
            "featured": true,
            "id": "life-of-water",
            "name": "This is the life of water",
            "description": "Sed sed lectus vitae odio vestibulum mattis. Integer iaculis nisl lectus, vel aliquet nulla imperdiet in.",
            "media": {
                "src": (parcelRequire("2tUNo")),
                "alt": "Generic placeholder by Unsplash",
                "author": {
                    "name": "Unsplash",
                    "url": "https://unsplash.com/"
                }
            },
            "pubDate": "2022-02-09T00:00:00.000Z",
            "taxonomy": [
                {
                    "name": "Topics",
                    "values": [
                        {
                            "id": "agriculture",
                            "name": "Agriculture"
                        }
                    ]
                },
                {
                    "name": "Source",
                    "values": [
                        {
                            "id": "development-seed",
                            "name": "Development Seed"
                        }
                    ]
                }
            ],
            "related": [
                {
                    "type": "dataset",
                    "id": "no2"
                },
                {
                    "type": "story",
                    "id": "external-link-test"
                }
            ]
        },
        content: ()=>(parcelRequire("eYFxV"))
    }
};

});

parcelRequire.register("978L3", function(module, exports) {

$parcel$export(module.exports, "S_IDLE", function () { return $738289d003c8df89$export$4173a1cafc17f10c; });
$parcel$export(module.exports, "S_LOADING", function () { return $738289d003c8df89$export$c328c4e9193d023b; });
$parcel$export(module.exports, "S_SUCCEEDED", function () { return $738289d003c8df89$export$5a7aba0f257f66; });
$parcel$export(module.exports, "S_FAILED", function () { return $738289d003c8df89$export$4733fe50ccd1b736; });
const $738289d003c8df89$export$4173a1cafc17f10c = "idle";
const $738289d003c8df89$export$c328c4e9193d023b = "loading";
const $738289d003c8df89$export$5a7aba0f257f66 = "success";
const $738289d003c8df89$export$4733fe50ccd1b736 = "error";

});


parcelRequire.register("4FnrG", function(module, exports) {

$parcel$export(module.exports, "LoadingSkeleton", function () { return $3f64113ffdaefe86$export$44c18d210d5de37b; });
$parcel$export(module.exports, "ContentLoading", function () { return $3f64113ffdaefe86$export$199be3e6e7e83c08; });
$parcel$export(module.exports, "MapLoading", function () { return $3f64113ffdaefe86$export$3db9e2b8f2eba706; });






var $de7zf = parcelRequire("de7zf");
const $3f64113ffdaefe86$var$pulse = (0, $22uAH$keyframes)([
    "0%{opacity:0;}100%{opacity:1;}"
]);
const $3f64113ffdaefe86$export$84a97ed1b33c6a8d = (0, $22uAH$css)([
    "animation:",
    " 0.8s ease 0s infinite alternate;"
], $3f64113ffdaefe86$var$pulse);
const $3f64113ffdaefe86$export$44c18d210d5de37b = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "loading-skeleton__LoadingSkeleton",
    componentId: "sc-5hn2xq-0"
})([
    "display:",
    ";background:",
    ";height:",
    ";width:",
    "%;",
    " ",
    " ",
    " ",
    ""
], ({ inline: inline  })=>inline ? "inline-block" : "block", (0, $22uAH$themeVal)("color.base-100"), ({ height: height  })=>height ? height : "1rem", ({ width: width  })=>(width || 1) * 100, $3f64113ffdaefe86$export$84a97ed1b33c6a8d, ({ size: size  })=>size === "large" && "height: 2.25rem;", ({ variation: variation  })=>variation === "light" && "background: rgba(#fff, 0.48);", ({ type: type , variation: variation  })=>type === "heading" && (0, $22uAH$css)([
        "background:",
        ";",
        ""
    ], (0, $22uAH$themeVal)("color.base-200"), variation === "light" && "background: rgba(#fff, 0.80);"));
const $3f64113ffdaefe86$export$9a0a40bbe698a200 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "loading-skeleton__LoadingSkeletonGroup",
    componentId: "sc-5hn2xq-1"
})([
    "display:flex;flex-flow:column;gap:",
    ";"
], (0, $22uAH$glsp)(0.5));
const $3f64113ffdaefe86$var$MapLoadingWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "loading-skeleton__MapLoadingWrapper",
    componentId: "sc-5hn2xq-2"
})([
    "position:absolute;z-index:1;display:grid;top:50%;transform:translate(-50%,-50%);grid-template-columns:repeat(1fr,3);grid-template-rows:repeat(1fr,3);width:8rem;aspect-ratio:1;gap:",
    ";",
    " > *{height:auto;}> *:nth-child(1){grid-column:1 / span 2;grid-row:1 / span 2;}> *:nth-child(2){grid-column:3 / span 1;grid-row:2 / span 1;}> *:nth-child(3){grid-column:2 / span 1;grid-row:3 / span 1;}"
], (0, $22uAH$glsp)(0.5), ({ position: position  })=>{
    if (position === "left") return "left: 25%;";
    if (position === "right") return "left: 75%;";
    return "left: 50%;";
});
const $3f64113ffdaefe86$var$ContentLoadingSelf = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "loading-skeleton__ContentLoadingSelf",
    componentId: "sc-5hn2xq-3"
})([
    "display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,24vh);gap:",
    ";padding:",
    ";background:",
    ";> div{background:",
    ";",
    "}> div:nth-child(1){grid-column:1 / span 1;}> div:nth-child(2){grid-column:2 / span 3;}> div:nth-child(3){grid-column:1 / span 3;grid-row:2;}> div:nth-child(4){grid-column:4 / span 1;grid-row:2;}p{",
    "}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.base-100"), $3f64113ffdaefe86$export$84a97ed1b33c6a8d, (0, $22uAH$visuallyHidden)());
const $3f64113ffdaefe86$var$ChartLoadingWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "loading-skeleton__ChartLoadingWrapper",
    componentId: "sc-5hn2xq-4"
})([
    "position:relative;display:flex;align-items:center;justify-content:center;flex-flow:column;text-align:center;padding:",
    ";gap:",
    ";aspect-ratio:16/9;color:",
    ";&::before{position:absolute;inset:0;display:flex;content:'';z-index:-1;padding:",
    ";background:",
    ";",
    "}"
], (0, $de7zf.variableGlsp)(), (0, $22uAH$glsp)(), (0, $22uAH$themeVal)("color.base-400"), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.base-100"), $3f64113ffdaefe86$export$84a97ed1b33c6a8d);
function $3f64113ffdaefe86$export$199be3e6e7e83c08() {
    return /*#__PURE__*/ (0, $22uAH$jsxs)($3f64113ffdaefe86$var$ContentLoadingSelf, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                children: "Loading contents..."
            })
        ]
    });
}
const $3f64113ffdaefe86$var$PageLoadingSelf = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "loading-skeleton__PageLoadingSelf",
    componentId: "sc-5hn2xq-5"
})([
    "display:flex;flex-flow:column nowrap;gap:",
    ";height:100vh;padding:",
    ";background:",
    ";> div{background:",
    ";",
    "}> div:nth-child(1){height:10%;}> div:nth-child(2){height:25%;}> div:nth-child(3){flex-grow:1;}p{",
    "}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.base-100"), $3f64113ffdaefe86$export$84a97ed1b33c6a8d, (0, $22uAH$visuallyHidden)());
function $3f64113ffdaefe86$export$a89b8b542bf88e85() {
    return /*#__PURE__*/ (0, $22uAH$jsxs)($3f64113ffdaefe86$var$PageLoadingSelf, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {}),
            /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                children: "Loading page..."
            })
        ]
    });
}
const $3f64113ffdaefe86$export$3db9e2b8f2eba706 = (props)=>{
    return /*#__PURE__*/ (0, $22uAH$jsxs)($3f64113ffdaefe86$var$MapLoadingWrapper, {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($3f64113ffdaefe86$export$44c18d210d5de37b, {}),
            /*#__PURE__*/ (0, $22uAH$jsx)($3f64113ffdaefe86$export$44c18d210d5de37b, {}),
            /*#__PURE__*/ (0, $22uAH$jsx)($3f64113ffdaefe86$export$44c18d210d5de37b, {})
        ]
    });
};
const $3f64113ffdaefe86$export$54cd1f09c6562ed4 = (props)=>{
    return /*#__PURE__*/ (0, $22uAH$jsxs)($3f64113ffdaefe86$var$ChartLoadingWrapper, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonChartLine), {
                size: "xlarge"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                children: props.message
            })
        ]
    });
};

});
parcelRequire.register("de7zf", function(module, exports) {

$parcel$export(module.exports, "variableBaseType", function () { return $8b5f1d4a7d769a76$export$13258753b704e79f; });
$parcel$export(module.exports, "variableProseVSpace", function () { return $8b5f1d4a7d769a76$export$43981dacff470a11; });
$parcel$export(module.exports, "variableGlsp", function () { return $8b5f1d4a7d769a76$export$ade793d24924ca57; });


const $8b5f1d4a7d769a76$var$variableType = (base, variable)=>{
    return (0, $22uAH$css)([
        "calc(",
        " + var(",
        ",0rem))"
    ], base, variable);
};
const $8b5f1d4a7d769a76$export$13258753b704e79f = (base)=>$8b5f1d4a7d769a76$var$variableType(base, "--base-text-increment");
const $8b5f1d4a7d769a76$export$43981dacff470a11 = ()=>{
    return (0, $22uAH$css)([
        "calc( ",
        " + 0.5rem )"
    ], $8b5f1d4a7d769a76$export$13258753b704e79f((0, $22uAH$themeVal)("type.base.size")));
};
const $8b5f1d4a7d769a76$export$ade793d24924ca57 = (...args)=>{
    args = args.length ? args : [
        1
    ];
    const fns = args.map((m)=>(0, $22uAH$css)([
            "calc(",
            " * var(--base-space-multiplier,1) * ",
            ")"
        ], (0, $22uAH$themeVal)("layout.space"), m));
    const spaces = Array(args.length - 1).fill(" ");
    return (0, $22uAH$css)([
        "",
        ...spaces,
        ""
    ], ...fns);
};

});


parcelRequire.register("a91Fy", function(module, exports) {

$parcel$export(module.exports, "BlockErrorBoundary", function () { return $8ffbc9750049bd00$export$7933a0b7f75adab8; });
$parcel$export(module.exports, "default", function () { return $8ffbc9750049bd00$export$2e2bcd8739ae039; });





var $jdv3b = parcelRequire("jdv3b");

var $bCYmV = parcelRequire("bCYmV");

var $lWu9G = parcelRequire("lWu9G");

var $eL5VT = parcelRequire("eL5VT");

var $de7zf = parcelRequire("de7zf");

var $9gKLh = parcelRequire("9gKLh");
const $8ffbc9750049bd00$export$351d2fec58b3e62c = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPAlpha",
    componentId: "sc-1ga4eap-0"
})([
    "",
    "{grid-column:content-start / content-end;",
    "}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).largeUp`
      grid-column:  content-3 / content-11;
    `);
const $8ffbc9750049bd00$export$1e182ce3a1fc27c2 = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPBeta",
    componentId: "sc-1ga4eap-1"
})([
    "",
    "{grid-column:content-start / content-end;",
    "}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).mediumUp`
      column-count: 2;
    `);
const $8ffbc9750049bd00$export$70c689fe76b78d8e = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockFAlpha",
    componentId: "sc-1ga4eap-2"
})([
    "",
    "{grid-column:content-start / content-end;",
    "}"
], (0, $lWu9G.default), (0, $22uAH$media).largeUp`
      grid-column:  content-3 / content-11;
    `);
const $8ffbc9750049bd00$export$c7c53c91bf9717d = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockFBeta",
    componentId: "sc-1ga4eap-3"
})([
    "",
    "{grid-column:content-start / content-end;}"
], (0, $lWu9G.default));
const $8ffbc9750049bd00$export$92ca76b1739bd491 = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockFGama",
    componentId: "sc-1ga4eap-4"
})([
    "",
    "{grid-column:full-start / full-end;}",
    "{padding:",
    ";}"
], (0, $lWu9G.default), (0, $jdv3b.FigcaptionInner), (0, $de7zf.variableGlsp)(0.5, 1, 0, 1));
const $8ffbc9750049bd00$export$f46d6cb46cfac145 = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPFAlpha",
    componentId: "sc-1ga4eap-5"
})([
    "",
    "{grid-column:content-start / content-end;",
    " ",
    "}",
    "{grid-column:content-start / content-end;grid-row:2;",
    " ",
    "}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).largeUp`
      grid-column:  content-start / content-7;
    `, (0, $22uAH$media).xlargeUp`
      grid-column:  content-start / content-6;
    `, (0, $lWu9G.default), (0, $22uAH$media).mediumUp`
      grid-column: content-2 / content-8;
    `, (0, $22uAH$media).largeUp`
      grid-column: content-7 / content-end;
      grid-row: 1;
    `);
const $8ffbc9750049bd00$export$a096430b01b741d4 = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPFBeta",
    componentId: "sc-1ga4eap-6"
})([
    "",
    "{grid-column:content-start / content-end;",
    " ",
    "}",
    "{grid-column:content-start / content-end;grid-row:2;",
    " ",
    "}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).largeUp`
      grid-column: content-7 / content-end;
    `, (0, $22uAH$media).xlargeUp`
      grid-column: content-8 / content-end;
    `, (0, $lWu9G.default), (0, $22uAH$media).mediumUp`
      grid-column: content-2 / content-8;
    `, (0, $22uAH$media).largeUp`
      grid-column:  content-start / content-7;
      grid-row: 1;
    `);
const $8ffbc9750049bd00$export$89d95c0a5a48e1dc = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPFGama",
    componentId: "sc-1ga4eap-7"
})([
    "",
    "{grid-column:content-start / content-end;",
    " ",
    " ",
    "}",
    "{grid-column:content-start / full-end;grid-row:2;",
    " ",
    " ",
    "}",
    "{padding:",
    ";}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).mediumUp`
      grid-column:  content-2 / content-8;
    `, (0, $22uAH$media).largeUp`
      grid-column:  content-start / content-7;
    `, (0, $22uAH$media).xlargeUp`
      grid-column:  content-start / content-6;
    `, (0, $lWu9G.default), (0, $22uAH$media).smallUp`
      grid-column: content-2 / full-end;
    `, (0, $22uAH$media).mediumUp`
      grid-column: content-3 / full-end;
    `, (0, $22uAH$media).largeUp`
      grid-column: content-7 / full-end;
      grid-row: 1;
    `, (0, $jdv3b.FigcaptionInner), (0, $de7zf.variableGlsp)(0.5, 1, 0, 1));
const $8ffbc9750049bd00$export$4f63471b4148f023 = (0, $22uAH$styledcomponents)((0, $eL5VT.ContentBlock)).withConfig({
    displayName: "blocks__ContentBlockPFDelta",
    componentId: "sc-1ga4eap-8"
})([
    "",
    "{grid-column:content-start / content-end;",
    " ",
    " ",
    "}",
    "{grid-column:full-start / content-end;grid-row:2;",
    " ",
    " ",
    "}",
    "{padding:",
    ";}"
], (0, $eL5VT.ContentBlockProse), (0, $22uAH$media).mediumUp`
      grid-column:  content-2 / content-8;
    `, (0, $22uAH$media).largeUp`
      grid-column:  content-7 / content-end;
    `, (0, $22uAH$media).xlargeUp`
      grid-column:  content-8 / content-end;
    `, (0, $lWu9G.default), (0, $22uAH$media).smallUp`
      grid-column: full-start / content-4;
    `, (0, $22uAH$media).mediumUp`
      grid-column: full-start / content-7;
    `, (0, $22uAH$media).largeUp`
      grid-row: 1;
    `, (0, $jdv3b.FigcaptionInner), (0, $de7zf.variableGlsp)(0.5, 1, 0, 1)); // This will result an object like below
// { defaultProse: ContentBlockPAlpha,
// wideProse: ContentBlockPBeta,
// defaultFigure; ContentBlockFAlpha,
// ...
// fullProseFigure: ContentBlockPFGama
// fullFigureProse: ContentBlockPFDelta }
const $8ffbc9750049bd00$var$matchingBlocks = {
    [`${0, $bCYmV.defaultBlockName}${0, $bCYmV.proseDisplayName}`]: $8ffbc9750049bd00$export$351d2fec58b3e62c,
    [`${0, $bCYmV.wideBlockName}${0, $bCYmV.proseDisplayName}`]: $8ffbc9750049bd00$export$1e182ce3a1fc27c2,
    [`${0, $bCYmV.defaultBlockName}${0, $bCYmV.figureDisplayName}`]: $8ffbc9750049bd00$export$70c689fe76b78d8e,
    [`${0, $bCYmV.wideBlockName}${0, $bCYmV.figureDisplayName}`]: $8ffbc9750049bd00$export$c7c53c91bf9717d,
    [`${0, $bCYmV.fullBlockName}${0, $bCYmV.figureDisplayName}`]: $8ffbc9750049bd00$export$92ca76b1739bd491,
    [`${0, $bCYmV.defaultBlockName}${0, $bCYmV.proseDisplayName}${0, $bCYmV.figureDisplayName}`]: $8ffbc9750049bd00$export$f46d6cb46cfac145,
    [`${0, $bCYmV.defaultBlockName}${0, $bCYmV.figureDisplayName}${0, $bCYmV.proseDisplayName}`]: $8ffbc9750049bd00$export$a096430b01b741d4,
    [`${0, $bCYmV.fullBlockName}${0, $bCYmV.proseDisplayName}${0, $bCYmV.figureDisplayName}`]: $8ffbc9750049bd00$export$89d95c0a5a48e1dc,
    [`${0, $bCYmV.fullBlockName}${0, $bCYmV.figureDisplayName}${0, $bCYmV.proseDisplayName}`]: $8ffbc9750049bd00$export$4f63471b4148f023
};
function $8ffbc9750049bd00$export$d57e94fb778e9d84(props) {
    const { children: children , type: type  } = props; // Concat block type name (default, wide, full)
    // and children component type name (Figure, Prose)
    // to return matching block type
    // ex. <Block type='wide'><Figure /></Block> will result in 'wideFigure'
    const typeName = type ? type : "default";
    const childrenAsArray = (0, $22uAH$Children).toArray(children);
    const childrenComponents = childrenAsArray.map(// will be caught and this won't break.
    (e)=>e.type?.displayName ?? "undefined");
    const childrenNames = childrenComponents.reduce((acc, curr)=>acc + curr, "");
    if (![
        (0, $bCYmV.defaultBlockName),
        (0, $bCYmV.wideBlockName),
        (0, $bCYmV.fullBlockName)
    ].includes(typeName)) throw new (0, $9gKLh.HintedError)(`${(0, $bCYmV.blockTypeErrorMessage)} '${typeName}'`, [
        `Supported block types: 'wide', 'full'`
    ]);
    if (!$8ffbc9750049bd00$var$matchingBlocks[`${typeName}${childrenNames}`]) {
        let hints = [
            "The only direct children that blocks can have are Figure and Prose.",
            "Example:",
            /*#__PURE__*/ (0, $22uAH$jsx)("pre", {
                children: `<Block>
  <Figure><Image/></Figure>
  <Prose>
    This is some text.
  </Prose>
</Block>
`
            }, "block-1")
        ];
        if (childrenComponents.filter((e)=>e == "Figure").length > 1) hints = [
            ...hints,
            "Block cannot have more than one Figure. Try to wrap Figures with Blocks.",
            "Before:",
            /*#__PURE__*/ (0, $22uAH$jsx)("pre", {
                children: `<Block>
  <Figure><Image/></Figure>
  <Figure><Image/></Figure>
</Block>
`
            }, "block-1"),
            "After:",
            /*#__PURE__*/ (0, $22uAH$jsx)("pre", {
                children: `<Block>
  <Figure><Image/></Figure>
</Block>
<Block>
  <Figure><Image/></Figure>
</Block>
`
            }, "block-2"),
            "--",
            "If you want your image to be inline, you can drop the Figure and use the images inside a Prose.",
            "Before:",
            /*#__PURE__*/ (0, $22uAH$jsx)("pre", {
                children: `<Block>
  <Figure><Image/></Figure>
  <Figure><Image/></Figure>
</Block>
`
            }, "block-3"),
            "After:",
            /*#__PURE__*/ (0, $22uAH$jsx)("pre", {
                children: `<Block>
  <Prose>
    <Image/>
    Some more text...
  </Prose>
</Block>
`
            }, "block-4")
        ];
        throw new (0, $9gKLh.HintedError)((0, $bCYmV.contentTypeErrorMessage), hints);
    }
    return /*#__PURE__*/ (0, $22uAH$createElement)($8ffbc9750049bd00$var$matchingBlocks[`${typeName}${childrenNames}`], props);
}
class $8ffbc9750049bd00$export$7933a0b7f75adab8 extends (0, $22uAH$Component) {
    static getDerivedStateFromError(error) {
        error.CRAOverlayIgnore = true;
        return {
            error: error
        };
    }
    clearError() {
        this.setState({
            error: null
        });
    }
    render() {
        const { error: error  } = this.state;
        const { childToRender: Block , passErrorToChild: passErrorToChild , ...rest } = this.props;
        if (error && !passErrorToChild) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $9gKLh.HintedErrorDisplay), {
            title: (0, $bCYmV.generalErrorMessage),
            subtitle: (0, $9gKLh.docsMessage),
            message: error.message,
            className: rest.className,
            hints: error.hints
        });
        return /*#__PURE__*/ (0, $22uAH$jsx)(Block, {
            error: error,
            clearError: this.clearError,
            ...rest
        });
    }
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
        this.clearError = this.clearError.bind(this);
    }
}
function $8ffbc9750049bd00$export$2e2bcd8739ae039(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)($8ffbc9750049bd00$export$7933a0b7f75adab8, {
        ...props,
        childToRender: $8ffbc9750049bd00$export$d57e94fb778e9d84
    });
}

});
parcelRequire.register("jdv3b", function(module, exports) {

$parcel$export(module.exports, "Figure", function () { return $dfd75126221f7075$export$820c702ddd5a7343; });
$parcel$export(module.exports, "Figcaption", function () { return $dfd75126221f7075$export$d98f36ee5a5a6a9b; });
$parcel$export(module.exports, "FigcaptionInner", function () { return $dfd75126221f7075$export$e7803c8e09bf93da; });
$parcel$export(module.exports, "FigureAttributionSelf", function () { return $dfd75126221f7075$export$cdfaaca76cdea965; });
$parcel$export(module.exports, "FigureAttribution", function () { return $dfd75126221f7075$export$4884627e33af2296; });








var $de7zf = parcelRequire("de7zf");
const $dfd75126221f7075$export$820c702ddd5a7343 = (0, $22uAH$styledcomponents).figure.withConfig({
    displayName: "figure__Figure",
    componentId: "sc-13pw4w6-0"
})([
    "position:relative;display:inline-block;vertical-align:top;> a{display:block;}"
]);
const $dfd75126221f7075$export$d98f36ee5a5a6a9b = (0, $22uAH$styledcomponents).figcaption.withConfig({
    displayName: "figure__Figcaption",
    componentId: "sc-13pw4w6-1"
})([
    "clear:both;display:flex;flex-flow:row nowrap;"
]);
const $dfd75126221f7075$export$e7803c8e09bf93da = (0, $22uAH$styledcomponents)((0, $22uAH$Subtitle)).attrs({
    as: "span"
}).withConfig({
    displayName: "figure__FigcaptionInner",
    componentId: "sc-13pw4w6-2"
})([
    "padding:",
    ";flex-grow:1;display:flex;flex-direction:column;align-items:start;font-size:",
    ";text-align:left;max-width:52rem;&::after{content:'';width:",
    ";height:",
    ";margin-top:calc(",
    " - ",
    ");background:",
    ";}"
], (0, $de7zf.variableGlsp)(0.5, 0, 0, 0), (0, $de7zf.variableBaseType)("0.75rem"), (0, $22uAH$glsp)(2), (0, $22uAH$themeVal)("layout.border"), (0, $de7zf.variableGlsp)(0.5), (0, $22uAH$themeVal)("layout.border"), (0, $22uAH$themeVal)("color.base-100a"));
function $dfd75126221f7075$var$renderAttributionPosition(props) {
    const { position: position  } = props;
    switch(position){
        case "top-left":
            return (0, $22uAH$css)([
                "top:",
                ";left:",
                ";"
            ], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
        case "bottom-left":
            return (0, $22uAH$css)([
                "bottom:",
                ";left:",
                ";"
            ], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
        case "bottom-right":
            return (0, $22uAH$css)([
                "bottom:",
                ";right:",
                ";"
            ], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
        // top-right
        default:
            return (0, $22uAH$css)([
                "top:",
                ";right:",
                ";"
            ], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
    }
}
const $dfd75126221f7075$export$cdfaaca76cdea965 = (0, $22uAH$styledcomponents).p.withConfig({
    displayName: "figure__FigureAttributionSelf",
    componentId: "sc-13pw4w6-3"
})([
    "position:absolute;z-index:40;max-width:calc(100% - ",
    ");height:1.5rem;display:inline-flex;color:",
    ";border-radius:",
    ";padding:",
    ";font-size:0.75rem;background:",
    ";overflow:hidden;",
    " a,a:visited{color:inherit;text-decoration:none;}"
], (0, $22uAH$glsp)(2), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("shape.ellipsoid"), (0, $22uAH$glsp)(0, 0.25), (0, $22uAH$themeVal)("color.base-400a"), $dfd75126221f7075$var$renderAttributionPosition);
const $dfd75126221f7075$var$FigureAttributionInner = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "figure__FigureAttributionInner",
    componentId: "sc-13pw4w6-4"
})([
    "display:flex;flex-flow:nowrap;align-items:center;svg{flex-shrink:0;}strong{display:block;width:100%;max-width:0;overflow:hidden;font-weight:normal;white-space:nowrap;padding:",
    ";opacity:0;transition:all 0.24s ease-in-out 0s;}&:hover{strong{",
    " max-width:64vw;padding:",
    ";opacity:1;}}"
], (0, $22uAH$glsp)(0), (0, $22uAH$truncated)(), (0, $22uAH$glsp)(0, 0.5, 0, 0.25));
function $dfd75126221f7075$var$FigureAttributionCmp(props) {
    const { author: author , url: url , position: position , ...rest } = props;
    if (!author) return null;
    const innerProps = url ? {
        as: "a",
        href: url,
        target: "_blank",
        rel: "noreferrer noopener"
    } : {};
    return /*#__PURE__*/ (0, $22uAH$jsx)($dfd75126221f7075$export$cdfaaca76cdea965, {
        position: position,
        ...rest,
        children: /*#__PURE__*/ (0, $22uAH$jsxs)($dfd75126221f7075$var$FigureAttributionInner, {
            ...innerProps,
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCircleInformation), {}),
                /*#__PURE__*/ (0, $22uAH$jsxs)("strong", {
                    children: [
                        "Figure by ",
                        author
                    ]
                })
            ]
        })
    });
}
const $dfd75126221f7075$export$4884627e33af2296 = (0, $22uAH$styledcomponents)($dfd75126221f7075$var$FigureAttributionCmp).withConfig({
    displayName: "figure__FigureAttribution",
    componentId: "sc-13pw4w6-5"
})([
    ""
]);
$dfd75126221f7075$var$FigureAttributionCmp.propTypes = {
    author: (0, $22uAH$proptypes).string,
    url: (0, $22uAH$proptypes).string,
    position: (0, $22uAH$proptypes).oneOf([
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
    ])
};

});

parcelRequire.register("bCYmV", function(module, exports) {

$parcel$export(module.exports, "defaultBlockName", function () { return $877212469d973705$export$118614607e8dcf65; });
$parcel$export(module.exports, "wideBlockName", function () { return $877212469d973705$export$38b0a766c9dac22; });
$parcel$export(module.exports, "fullBlockName", function () { return $877212469d973705$export$a84e006e74141e5e; });
$parcel$export(module.exports, "generalErrorMessage", function () { return $877212469d973705$export$10f2923c441284d; });
$parcel$export(module.exports, "blockTypeErrorMessage", function () { return $877212469d973705$export$c0dcfd7ed4b165c1; });
$parcel$export(module.exports, "contentTypeErrorMessage", function () { return $877212469d973705$export$9449ede1c1bd8740; });
$parcel$export(module.exports, "figureDisplayName", function () { return $877212469d973705$export$7940ebc7f9f1a73d; });
$parcel$export(module.exports, "proseDisplayName", function () { return $877212469d973705$export$6a526ca7ff83cb40; });
$parcel$export(module.exports, "captionDisplayName", function () { return $877212469d973705$export$31a06e30ce68717; });
const $877212469d973705$export$118614607e8dcf65 = "default";
const $877212469d973705$export$38b0a766c9dac22 = "wide";
const $877212469d973705$export$a84e006e74141e5e = "full";
const $877212469d973705$export$10f2923c441284d = "There is an error in this block";
const $877212469d973705$export$c0dcfd7ed4b165c1 = "We do not support block type";
const $877212469d973705$export$9449ede1c1bd8740 = "We do not support this composition of contents";
const $877212469d973705$export$7940ebc7f9f1a73d = "Figure";
const $877212469d973705$export$6a526ca7ff83cb40 = "Prose";
const $877212469d973705$export$31a06e30ce68717 = "Caption";

});

parcelRequire.register("lWu9G", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $ff9667f5237f07ec$export$2e2bcd8739ae039; });





var $bCYmV = parcelRequire("bCYmV");

var $jdv3b = parcelRequire("jdv3b");
const $ff9667f5237f07ec$var$ContentBlockFigure = (props)=>{
    const { children: children  } = props; // Figure can be empty
    if (children && children.length) {
        const captionChild = children.filter((e)=>e.type.displayName === (0, $bCYmV.captionDisplayName));
        if (captionChild.length > 1) throw Error("More than one caption for a figure");
    }
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $jdv3b.Figure), {
        ...props
    });
};
$ff9667f5237f07ec$var$ContentBlockFigure.propTypes = {
    children: (0, $22uAH$proptypes).node
};
const $ff9667f5237f07ec$var$StyledContentBlockFigure = (0, $22uAH$styledcomponents)($ff9667f5237f07ec$var$ContentBlockFigure).withConfig({
    displayName: "figure__StyledContentBlockFigure",
    componentId: "sc-1h4i53g-0"
})([
    "img{width:100%;}"
]);
$ff9667f5237f07ec$var$StyledContentBlockFigure.displayName = (0, $bCYmV.figureDisplayName);
var $ff9667f5237f07ec$export$2e2bcd8739ae039 = $ff9667f5237f07ec$var$StyledContentBlockFigure;

});

parcelRequire.register("eL5VT", function(module, exports) {

$parcel$export(module.exports, "ContentBlock", function () { return $abea0e92dacccd0a$export$eb38b3b9c7f5f31b; });
$parcel$export(module.exports, "ContentBlockProse", function () { return $abea0e92dacccd0a$export$de2d73703e5451d1; });



var $de7zf = parcelRequire("de7zf");

var $5InEa = parcelRequire("5InEa");

var $4qnuQ = parcelRequire("4qnuQ");

var $jdv3b = parcelRequire("jdv3b");

var $bCYmV = parcelRequire("bCYmV");
const $abea0e92dacccd0a$export$eb38b3b9c7f5f31b = (0, $22uAH$styledcomponents)((0, $4qnuQ.default)).withConfig({
    displayName: "content-block__ContentBlock",
    componentId: "sc-h19k54-0"
})([
    "padding-top:",
    ";padding-bottom:",
    ";align-items:center;& + &{padding-top:0;}"
], (0, $de7zf.variableGlsp)(2), (0, $de7zf.variableGlsp)(2));
const $abea0e92dacccd0a$export$de2d73703e5451d1 = (0, $22uAH$styledcomponents)((0, $5InEa.VarProse)).withConfig({
    displayName: "content-block__ContentBlockProse",
    componentId: "sc-h19k54-1"
})([
    "gap:",
    ";h1,h2,h3,h4,h5,h6{&:first-child{column-span:all;max-width:52rem;display:flex;flex-direction:column;gap:calc(",
    " - ",
    ");margin-bottom:",
    ";&::before{content:'';width:",
    ";height:",
    ";border-radius:",
    ";background:",
    ";}}}*{break-inside:avoid;}",
    "{padding:",
    ";&::after{display:none;}}",
    "{top:",
    ";right:",
    ";}[class*='align-']{figcaption{padding:0;}}.align-left{float:left;margin-right:",
    ";}.align-right{float:right;margin-left:",
    ";",
    "{align-items:end;text-align:right;}}.align-center{margin-left:50%;transform:translate(-50%,0);",
    "{align-items:center;text-align:center;}}.img-align-right{margin-left:auto;}.img-align-center{margin-left:auto;margin-right:auto;}"
], (0, $de7zf.variableGlsp)(), (0, $22uAH$glsp)(), (0, $22uAH$glsp)(0.25), (0, $de7zf.variableProseVSpace)(), (0, $22uAH$glsp)(2), (0, $22uAH$glsp)(0.25), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.primary"), (0, $jdv3b.FigcaptionInner), (0, $22uAH$glsp)(1, 0, 0, 0), (0, $jdv3b.FigureAttributionSelf), (0, $22uAH$glsp)(), (0, $22uAH$glsp)(), (0, $de7zf.variableProseVSpace)(), (0, $de7zf.variableProseVSpace)(), (0, $jdv3b.FigcaptionInner), (0, $jdv3b.FigcaptionInner)); // assign displayName that a block can tell
$abea0e92dacccd0a$export$de2d73703e5451d1.displayName = (0, $bCYmV.proseDisplayName);
const $abea0e92dacccd0a$export$ea5ac132c1b3abdd = (0, $22uAH$styledcomponents)((0, $jdv3b.Figure)).withConfig({
    displayName: "content-block__ContentBlockFigure",
    componentId: "sc-h19k54-2"
})([
    "img{width:100%;}"
]);

});
parcelRequire.register("5InEa", function(module, exports) {

$parcel$export(module.exports, "VarHeading", function () { return $a7575b4e08dc3dba$export$ba54789bf8e7668f; });
$parcel$export(module.exports, "VarLead", function () { return $a7575b4e08dc3dba$export$17646834d55fad90; });
$parcel$export(module.exports, "VarProse", function () { return $a7575b4e08dc3dba$export$b0a152e86c019ad8; });




var $de7zf = parcelRequire("de7zf");
// Heading
//
const $a7575b4e08dc3dba$var$sizeMapping = {
    xxsmall: "0.75rem",
    xsmall: "1rem",
    small: "1.25rem",
    medium: "1.5rem",
    large: "1.75rem",
    xlarge: "2rem",
    xxlarge: "2.25rem",
    jumbo: "3rem"
};
const $a7575b4e08dc3dba$var$renderHeadingSize = (props = {})=>{
    const { size: size = "medium"  } = props;
    return (0, $22uAH$css)([
        "font-size:calc(",
        " + var(--base-text-increment,0rem));",
        ""
    ], $a7575b4e08dc3dba$var$sizeMapping[size], size === "xxsmall" && "line-height: 1rem;");
};
const $a7575b4e08dc3dba$export$ba54789bf8e7668f = (0, $22uAH$styledcomponents)((0, $22uAH$Heading)).withConfig({
    displayName: "variable-components__VarHeading",
    componentId: "sc-e2fh7o-0"
})([
    "",
    ""
], $a7575b4e08dc3dba$var$renderHeadingSize); //
const $a7575b4e08dc3dba$export$17646834d55fad90 = (0, $22uAH$styledcomponents)((0, $22uAH$Lead)).withConfig({
    displayName: "variable-components__VarLead",
    componentId: "sc-e2fh7o-1"
})([
    "font-size:",
    ";"
], (0, $de7zf.variableBaseType)((0, $22uAH$themeVal)("type.base.leadSize"))); //
const $a7575b4e08dc3dba$export$b0a152e86c019ad8 = (0, $22uAH$styledcomponents)((0, $22uAH$Prose)).withConfig({
    displayName: "variable-components__VarProse",
    componentId: "sc-e2fh7o-2"
})([
    "font-size:",
    ";h1{",
    "}h2{",
    "}h3{",
    "}h4{",
    "}h5{",
    "}h6{",
    "}h1,h2,h3,h4,h5,h6{margin-bottom:calc(",
    " / 2);&:not(:first-child){margin-top:calc(",
    " * 2);}}> *{margin-bottom:",
    ";}> *:last-child{margin-bottom:0;}",
    ""
], (0, $de7zf.variableBaseType)((0, $22uAH$themeVal)("type.base.size")), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "xxlarge"
}), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "xlarge"
}), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "large"
}), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "medium"
}), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "small"
}), $a7575b4e08dc3dba$var$renderHeadingSize({
    size: "xsmall"
}), (0, $de7zf.variableProseVSpace)(), (0, $de7zf.variableProseVSpace)(), (0, $de7zf.variableProseVSpace)(), (0, $22uAH$media).mediumDown`
    a {
      word-break: break-word;
    }
  `);

});

parcelRequire.register("4qnuQ", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $031db2f59e2c92f7$export$2e2bcd8739ae039; });



var $de7zf = parcelRequire("de7zf");
//
// Grid:
//   start    1    2    3    4    5    6    7    8    9   10   11   12     end
// |      |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|      |
// |      |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|      |
// |      |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|      |
// |      |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|      |
// |      |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|  |*|      |
//
// The start and end take up 1 fraction and its size is fluid, depending on
// window size.
// Each column takes up a 12th of the max content width (defined in the theme).
// Grid gaps are marked with an asterisk.
// Each instance of Human Universal Gridder, nested inside another Human
// Universal Gridder must define its grid for the different media queries,
// through a grid prop.
// If the grid for a given media query is not defined the previous one will be
// used (<media query>Up pattern).
// The value for each media query breakpoint is an array with a start and an end
// column. It works much like the `grid-column` property of css.
//    <Hug>
//      <Hug
//        grid={{
//          smallUp: ['full-start', 'full-end'],
//          mediumUp: ['content-2', 'content-4'],
//          largeUp: ['content-2', 'content-5'],
//        }}
//      >
//        Subgrid 1
//      </Hug>
//      <Hug
//        grid={{
//          smallUp: ['full-start', 'full-end'],
//          // mediumUp is not defined, so smallUp will be used until largeUp.
//          largeUp: ['content-6', 'full-end'],
//        }}
//      >
//        Subgrid 2
//      </Hug>
//    </Hug>
//
// The Human Universal Gridder will define a grid whose line names are always
// the same regardless of how many nested grids there are. Therefore an element
// placed on `content-5` will be aligned with the top most `content-5`.
// Line names to be used on the grid.
// In a css grid, the lines are named, not the columns.
const $031db2f59e2c92f7$var$gridLineNames = [
    "full-start",
    "content-start",
    // content-1 does not exist as it is named content-start
    "content-2",
    "content-3",
    "content-4",
    "content-5",
    "content-6",
    "content-7",
    "content-8",
    "content-9",
    "content-10",
    "content-11",
    "content-12",
    "content-end",
    "full-end"
]; // List of media queries from the smallest to the largest.
const $031db2f59e2c92f7$var$mdQueryOrdered = [
    "xsmall",
    "small",
    "medium",
    "large",
    "xlarge"
]; // Util from https://stackoverflow.com/a/49725198
/**
 * Check that the provided range is in the expected format which is an array
 * with the start and end grid lines.
 * For example: ['full-start', 'full-end']
 *
 * @throws Error if the value is not in correct format or names are invalid.
 *
 * @param {any} cols The grid range to validate
 */ const $031db2f59e2c92f7$var$validateGridLineNames = (cols)=>{
    let error = "";
    if (!Array.isArray(cols) || cols.length !== 2) error = `The grid definition format is not valid. Please use an array defining the start and end range. Example:
  ['full-start', 'full-end']`;
    if (cols.some((v)=>$031db2f59e2c92f7$var$gridLineNames.indexOf(v) === -1)) error = `The grid line names not valid. Please provide a valid name for the grid definition`;
     // There was an error. Show the user info for debugging.
    if (error) throw new Error(`🤗 Human Universal Gridder

    ${JSON.stringify(cols)}

${error}`);
};
/**
 * Creates the universal grid for this component.
 *
 * @param {number} columns Number of columns for the grid.
 * @param {string} mdQuery Media query at which this grid is shown
 * @returns css
 */ function $031db2f59e2c92f7$var$makeGrid(columns, mdQuery) {
    return ({ grid: grid  })=>{
        const gridGap = (0, $de7zf.variableGlsp)();
        const layoutMax = (0, $22uAH$themeVal)("layout.max"); // Discard the base padding to ensure that gridded folds have the same size as
        // the constrainers.
        const layoutMaxNoPadding = (0, $22uAH$css)([
            "calc(",
            " - ",
            ")"
        ], layoutMax, gridGap); // Calculate how much of the content block (with is the layoutMaxNoPadding)
        // each column takes up.
        const fullColumn = (0, $22uAH$css)([
            "calc(",
            " / ",
            ")"
        ], layoutMaxNoPadding, columns); // To get the usable size of each column we need to account for the gap.
        const contentColWidth = (0, $22uAH$css)([
            "calc(",
            " - ",
            ")"
        ], fullColumn, gridGap); // Create the columns as:
        // [content-<num>] minmax(0, <size>)
        // Content columns start at index 2.
        const contentColumns = Array(columns - 1).fill(0).map((_, i)=>({
                name: `content-${i + 2}`,
                value: (0, $22uAH$css)([
                    "[content-",
                    "] minmax(0,",
                    ")"
                ], i + 2, contentColWidth)
            })); // Create an array with all the columns definitions. It will be used to
        // filter out the ones that are not needed when taking the user's grid
        // definition into account.
        const columnTemplate = [
            {
                name: "full-start",
                value: (0, $22uAH$css)([
                    "[full-start] minmax(0,1fr)"
                ])
            },
            {
                name: "content-start",
                value: (0, $22uAH$css)([
                    "[content-start] minmax(0,",
                    ")"
                ], contentColWidth)
            },
            ...contentColumns,
            {
                name: "content-end",
                value: (0, $22uAH$css)([
                    "[content-end] minmax(0,1fr)"
                ])
            },
            {
                name: "full-end",
                value: "[full-end]"
            }
        ];
        let gridTemplateColumns;
        let gridColumn; // If the user defined a grid property compute the subgrid.
        // This does two things:
        // - Set the start and end columns to what the user defined.
        // - Set the template-columns of this element to a subset of the parent (columnTemplate list)
        if (grid) {
            const [start, end] = $031db2f59e2c92f7$var$getGridProp(grid, mdQuery);
            gridColumn = (0, $22uAH$css)([
                "grid-column:",
                " / ",
                ";"
            ], start, end);
            const startIdx = columnTemplate.findIndex((col)=>col.name === start);
            const endIdx = columnTemplate.findIndex((col)=>col.name === end);
            if (startIdx === -1 || endIdx === -1) {
                const line = startIdx === -1 ? start : end;
                throw new Error(`🤗 Human Universal Gridder

The grid line \`${line}\` does not exist in the ${mdQuery} media query which has ${columns} columns.
Grid lines for ${mdQuery}: ${columnTemplate.map((c)=>c.name).join(" | ")}`);
            }
            const lastColumn = columnTemplate[endIdx];
            gridTemplateColumns = [
                ...columnTemplate.slice(startIdx, endIdx),
                // naming purposes.
                {
                    name: lastColumn.name,
                    value: `[${lastColumn.name}]`
                }
            ];
        } else // If we're not using a subset, just use all the columns.
        gridTemplateColumns = columnTemplate;
         // The grid-template-columns will be a subset of this, depending on the grid
        // defined by the user.
        // grid-template-columns:
        //   [full-start] minmax(0, 1fr)
        //   [content-start] minmax(0, 000px)
        //   [content-2] minmax(0, 000px)
        //   [content-3] minmax(0, 000px)
        //   [content-4] minmax(0, 000px)
        //   ...
        //   [content-end] minmax(0, 1fr)
        //   [full-end];
        return (0, $22uAH$css)([
            "",
            " grid-gap:",
            ";grid-template-columns:",
            ";"
        ], gridColumn, gridGap, gridTemplateColumns.map((col)=>col.value));
    };
}
/**
 * Get the correct grid range for the given media query. If the grid for a given
 * media query is not defined the previous one will be used (<media query>Up
 * pattern).
 *
 * @param {number} columns Number of columns for the grid.
 * @param {string} mdQuery Media query at which this grid is shown
 *
 * @returns array
 */ const $031db2f59e2c92f7$var$getGridProp = (grid, mdQuery)=>{
    // If the user provided an array, assume it is the same on all media queries.
    if (Array.isArray(grid)) {
        $031db2f59e2c92f7$var$validateGridLineNames(grid);
        return grid;
    } // From the current media query go back until we find one defined by the user
    // or reach the default. The replicates the behavior of <mediaQuery>Up
    const mdIndex = $031db2f59e2c92f7$var$mdQueryOrdered.findIndex((v)=>v === mdQuery);
    for(let i = mdIndex; i >= 0; i--){
        const m = $031db2f59e2c92f7$var$mdQueryOrdered[i];
        const key = `${m}Up`; // Did the user provide an override for this media query?
        if (grid[key]) {
            $031db2f59e2c92f7$var$validateGridLineNames(grid[key]);
            return grid[key];
        } // No override. Check previous media range.
    } // content-start to content-end
    return [
        $031db2f59e2c92f7$var$gridLineNames[1],
        $031db2f59e2c92f7$var$gridLineNames[$031db2f59e2c92f7$var$gridLineNames.length - 2]
    ];
}; // Redeclare the media function to fix the types defined in the UI library.
const $031db2f59e2c92f7$var$_media = (0, $22uAH$media);
const $031db2f59e2c92f7$var$Hug = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "hug__Hug",
    componentId: "sc-11bbqoa-0"
})([
    "display:grid;",
    " ",
    " ",
    " ",
    " ",
    ""
], $031db2f59e2c92f7$var$makeGrid(4, $031db2f59e2c92f7$var$mdQueryOrdered[0]), $031db2f59e2c92f7$var$_media.smallUp`
    ${$031db2f59e2c92f7$var$makeGrid(4, $031db2f59e2c92f7$var$mdQueryOrdered[1])}
  `, $031db2f59e2c92f7$var$_media.mediumUp`
    ${$031db2f59e2c92f7$var$makeGrid(8, $031db2f59e2c92f7$var$mdQueryOrdered[2])}
  `, $031db2f59e2c92f7$var$_media.largeUp`
    ${$031db2f59e2c92f7$var$makeGrid(12, $031db2f59e2c92f7$var$mdQueryOrdered[3])}
  `, $031db2f59e2c92f7$var$_media.xlargeUp`
    ${$031db2f59e2c92f7$var$makeGrid(12, $031db2f59e2c92f7$var$mdQueryOrdered[4])}
  `);
var $031db2f59e2c92f7$export$2e2bcd8739ae039 = $031db2f59e2c92f7$var$Hug;

});


parcelRequire.register("9gKLh", function(module, exports) {

$parcel$export(module.exports, "HintedError", function () { return $0142efec1921ceca$export$5e2fc0291e57f772; });
$parcel$export(module.exports, "HintedErrorDisplay", function () { return $0142efec1921ceca$export$295970e1d7fe83c4; });
$parcel$export(module.exports, "docsMessage", function () { return $0142efec1921ceca$export$ee7e8e40289d22e; });




class $0142efec1921ceca$export$5e2fc0291e57f772 extends Error {
    constructor(message, hints = []){
        super(message);
        this.hints = hints;
    }
}
const $0142efec1921ceca$export$5f71c1e53eaf1d93 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "hinted-error__ErrorBlock",
    componentId: "sc-1y9s9xn-0"
})([
    "margin:",
    ";padding:",
    ";"
], (0, $22uAH$glsp)(1, 0), (0, $22uAH$glsp)(0, 1));
const $0142efec1921ceca$export$8a35684520b35731 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "hinted-error__ErrorBlockInner",
    componentId: "sc-1y9s9xn-1"
})([
    "width:100%;color:",
    ";border:3px solid ",
    ";padding:",
    ";> div{max-width:48rem;margin:0 auto;> *{display:block;}}"
], (0, $22uAH$themeVal)("color.danger"), (0, $22uAH$themeVal)("color.danger"), (0, $22uAH$glsp)(3));
const $0142efec1921ceca$export$3beebeb686a5eb38 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "hinted-error__ErrorHints",
    componentId: "sc-1y9s9xn-2"
})([
    "margin-top:",
    ";color:",
    ";pre{font-size:0.875rem;}"
], (0, $22uAH$glsp)(), (0, $22uAH$themeVal)("color.base"));
const $0142efec1921ceca$var$ErrorSubtitle = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "hinted-error__ErrorSubtitle",
    componentId: "sc-1y9s9xn-3"
})([
    "color:",
    ";font-size:0.875rem;"
], (0, $22uAH$themeVal)("color.base"));
function $0142efec1921ceca$export$295970e1d7fe83c4(props) {
    const { className: className , hints: hints , message: message , title: title , subtitle: subtitle  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($0142efec1921ceca$export$5f71c1e53eaf1d93, {
        className: className,
        children: /*#__PURE__*/ (0, $22uAH$jsx)($0142efec1921ceca$export$8a35684520b35731, {
            children: /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)("small", {
                        children: title
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                        children: message
                    }),
                    subtitle && /*#__PURE__*/ (0, $22uAH$jsx)($0142efec1921ceca$var$ErrorSubtitle, {
                        children: subtitle
                    }),
                    !!hints?.length && /*#__PURE__*/ (0, $22uAH$jsxs)($0142efec1921ceca$export$3beebeb686a5eb38, {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                                    children: "Hints:"
                                })
                            }),
                            hints.map((e, i)=>typeof e === "string" ? /* eslint-disable-next-line react/no-array-index-key */ /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                                    children: e
                                }, i) : /* eslint-disable-next-line react/no-array-index-key */ /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment), {
                                    children: e
                                }, i))
                        ]
                    })
                ]
            })
        })
    });
}
const $0142efec1921ceca$export$ee7e8e40289d22e = /*#__PURE__*/ (0, $22uAH$jsxs)("p", {
    children: [
        "\uD83D\uDCDC Find all documentation in our",
        " ",
        /*#__PURE__*/ (0, $22uAH$jsx)("a", {
            href: "https://github.com/NASA-IMPACT/veda-config/blob/main/docs/MDX_BLOCKS.md",
            target: "_blank",
            rel: "noreferrer nofollow",
            children: /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                children: "Github repo"
            })
        }),
        "."
    ]
});

});


parcelRequire.register("5Pq7j", function(module, exports) {

$parcel$export(module.exports, "Caption", function () { return $43e5f97587b8f94c$export$32fbfacc5d962e0c; });
$parcel$export(module.exports, "default", function () { return $43e5f97587b8f94c$export$2e2bcd8739ae039; });




var $jdv3b = parcelRequire("jdv3b");

var $bCYmV = parcelRequire("bCYmV");
function $43e5f97587b8f94c$export$32fbfacc5d962e0c({ children: children , attrAuthor: attrAuthor , attrUrl: attrUrl  }) {
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $jdv3b.Figcaption), {
        children: [
            children && /*#__PURE__*/ (0, $22uAH$jsx)((0, $jdv3b.FigcaptionInner), {
                children: children
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $jdv3b.FigureAttribution), {
                author: attrAuthor,
                url: attrUrl,
                forwardedAs: "span"
            })
        ]
    });
}
$43e5f97587b8f94c$export$32fbfacc5d962e0c.displayName = (0, $bCYmV.captionDisplayName);
$43e5f97587b8f94c$export$32fbfacc5d962e0c.propTypes = {
    attrAuthor: (0, $22uAH$proptypes).string,
    attrUrl: (0, $22uAH$proptypes).string,
    children: (0, $22uAH$proptypes).node
};
function $43e5f97587b8f94c$export$2e2bcd8739ae039(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { align: align , caption: caption , attrAuthor: attrAuthor , ...propsWithoutAttrs } = props;
    if (caption || attrAuthor) {
        const imageAlign = align ? align : "center";
        return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $jdv3b.Figure), {
            className: `align-${imageAlign}`,
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)("img", {
                    loading: "lazy",
                    ...propsWithoutAttrs
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)($43e5f97587b8f94c$export$32fbfacc5d962e0c, {
                    attrAuthor: attrAuthor,
                    attrUrl: props.attrUrl,
                    children: caption
                })
            ]
        });
    }
    const imageAlign1 = align ? align : "left";
    return /*#__PURE__*/ (0, $22uAH$jsx)("img", {
        className: `img-align-${imageAlign1}`,
        loading: "lazy",
        ...propsWithoutAttrs
    });
}
$43e5f97587b8f94c$export$2e2bcd8739ae039.propTypes = {
    src: (0, $22uAH$proptypes).string,
    alt: (0, $22uAH$proptypes).string,
    align: (0, $22uAH$proptypes).string,
    caption: (0, $22uAH$proptypes).string,
    attrAuthor: (0, $22uAH$proptypes).string,
    attrUrl: (0, $22uAH$proptypes).string
};

});

parcelRequire.register("djhuc", function(module, exports) {

$parcel$export(module.exports, "chapterDisplayName", function () { return $e780f5a9d4116bdc$export$907529ebb3ca6636; });
$parcel$export(module.exports, "Chapter", function () { return $e780f5a9d4116bdc$export$942479cbbfd2c573; });
$parcel$export(module.exports, "validateChapter", function () { return $e780f5a9d4116bdc$export$8de67224247a6ba3; });





var $de7zf = parcelRequire("de7zf");

var $eL5VT = parcelRequire("eL5VT");

var $8mxqI = parcelRequire("8mxqI");

var $EAuO5 = parcelRequire("EAuO5");

var $jfO2i = parcelRequire("jfO2i");
const $e780f5a9d4116bdc$export$907529ebb3ca6636 = "Chapter";
const $e780f5a9d4116bdc$var$ChapterSelf = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "chapter__ChapterSelf",
    componentId: "sc-1ejimj-0"
})([
    "padding-bottom:80vh;grid-column:content-start / content-end;",
    " > ",
    "{background:",
    ";padding:",
    ";border-radius:",
    ";box-shadow:",
    ";pointer-events:auto;}"
], (0, $22uAH$media).mediumUp`
    grid-column: content-start / content-7;
  `, (0, $eL5VT.ContentBlockProse), (0, $22uAH$themeVal)("color.surface"), (0, $de7zf.variableGlsp)(), (0, $22uAH$multiply)((0, $22uAH$themeVal)("shape.rounded"), 2), (0, $22uAH$themeVal)("boxShadow.elevationD"));
function $e780f5a9d4116bdc$export$942479cbbfd2c573(props) {
    const { children: children  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($e780f5a9d4116bdc$var$ChapterSelf, {
        "data-step": true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $eL5VT.ContentBlockProse), {
            children: children
        })
    });
}
$e780f5a9d4116bdc$export$942479cbbfd2c573.displayName = $e780f5a9d4116bdc$export$907529ebb3ca6636;
const $e780f5a9d4116bdc$var$lngValidator = (0, $EAuO5.validateRangeNum)(-180, 180);
const $e780f5a9d4116bdc$var$latValidator = (0, $EAuO5.validateRangeNum)(-90, 90);
function $e780f5a9d4116bdc$export$8de67224247a6ba3(chapter, index) {
    const dataProperties = [
        "layerId",
        "datasetId"
    ];
    const mapProperties = [
        "center",
        "zoom"
    ];
    const missingDataProps = dataProperties.filter((p)=>{
        // When showBaseMap is set the layer related properties are not needed.
        return chapter.showBaseMap ? false : chapter[p] === undefined;
    });
    const missingMapProps = mapProperties.filter((p)=>chapter[p] === undefined);
    const missing = [
        ...missingDataProps,
        ...missingMapProps
    ];
    const missingError = !!missing.length && `- Missing some properties: ${missing.map((p)=>`[${p}]`).join(", ")}`;
    const dateError = chapter.datetime && isNaN((0, $8mxqI.utcString2userTzDate)(chapter.datetime).getTime()) && "- Invalid datetime. Use YYYY-MM-DD format";
    const contentError = !chapter.children && "- Missing content. Add some between <Chapter ...props>content here</Chapter>";
    const centerValid = $e780f5a9d4116bdc$var$lngValidator(chapter?.center?.[0]) && $e780f5a9d4116bdc$var$latValidator(chapter?.center?.[1]);
    const centerError = !centerValid && "- Invalid center coordinates. Use [longitude, latitude]";
    const projectionErrors = (0, $jfO2i.validateProjectionBlockProps)({
        id: chapter.projectionId,
        center: chapter.projectionCenter,
        parallels: chapter.projectionParallels
    });
    const errors = [
        missingError,
        dateError,
        contentError,
        centerError,
        ...projectionErrors
    ].filter(Boolean);
    return errors.length ? [
        `Chapter ${index + 1}:`,
        ...errors
    ] : [];
}

});
parcelRequire.register("8mxqI", function(module, exports) {

$parcel$export(module.exports, "utcString2userTzDate", function () { return $d408f5f243aa2fb3$export$eed8ce5347a58f09; });
$parcel$export(module.exports, "userTzDate2utcString", function () { return $d408f5f243aa2fb3$export$cd22809177ba486; });

function $d408f5f243aa2fb3$export$eed8ce5347a58f09(str) {
    // Always return a Date even if invalid
    if (typeof str !== "string") return new Date("invalid");
     // The date should always be in the user's TZ but the input string affects
    // how the date is constructed.
    // An input string of only year or with `-` (2020-01 | 2020-1-1) will be
    // considered to be in ISO format, meaning that the user date will be this
    // date +- the TZ offset. For example:
    // 2020-01-01
    //   Tue Dec 31 2019 19:00:00 GMT-0500 (Eastern Standard Time)
    //   Wed Jan 01 2020 01:00:00 GMT+0100 (Central European Time)
    //
    // whereas 2020/01/01
    //   Wed Jan 01 2020 00:00:00 GMT-0500 (Eastern Standard Time)
    //   Wed Jan 01 2020 00:00:00 GMT+0100 (Central European Time)
    // and if converted to ISO
    //   2020-01-01T05:00:00.000Z
    //   2020-01-01T01:00:00.000Z
    //
    // The code below ensures that all dates behave the same.
    //
    const isoYearOrMonth = str.match(/^([0-9]{4})(?:-([0-9]{1,2}))?$/);
    const isoMatch = str.match(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/);
    if (isoYearOrMonth || isoMatch) {
        const date = new Date(str); // If the date is not valid, return it and be done.
        if (isNaN(date.getTime())) return date;
        const offset = date.getTimezoneOffset();
        date.setTime(date.getTime() + offset * 60000);
        return date;
    } else // For the full date view Date does a good job, except with the ordinal
    // numbers. Remove those from the date before parsing.
    return new Date(str.replace(/([0-9])(st|nd|rd|th)/g, "$1"));
}
function $d408f5f243aa2fb3$export$cd22809177ba486(date) {
    const tz = date.getTimezoneOffset();
    const d = new Date(date.getTime() - tz * 60000);
    return d.toISOString();
}
function $d408f5f243aa2fb3$export$c03bb0116ee09d4b(dateString) {
    const date = $d408f5f243aa2fb3$export$eed8ce5347a58f09(dateString);
    return !isNaN(date.getTime());
}
function $d408f5f243aa2fb3$export$2e9241a0bdf6c8b8(start, end, datesSeparator = " to ", useOrdinalDays = true) {
    const DATE_FORMAT_FULL = useOrdinalDays ? "MMM do, yyyy" : "MMM dd, yyyy"; // Format the label in a pretty way as to not repeat values if the month or
    // year are the same.
    // Examples:
    // Jan 1st, 2020 to Dec 31st, 2021
    // Jan 1st — Dec 31st, 2020
    // Dec 01-31, 2020
    // Dec 31st, 2020
    const startStr = (0, $22uAH$format)(start, DATE_FORMAT_FULL);
    const endStr = (0, $22uAH$format)(end, DATE_FORMAT_FULL);
    if (startStr === endStr) return startStr;
     // Things get trickier when we have to compare dates. Here the range plays a
    // role.
    if ((0, $22uAH$isSameMonth)(start, end) && (0, $22uAH$isSameYear)(start, end)) return `${(0, $22uAH$format)(start, "MMM dd")}-${(0, $22uAH$format)(end, "dd, yyyy")}`;
    else if ((0, $22uAH$isSameYear)(start, end)) {
        const monthDayFormat = useOrdinalDays ? "MMM do" : "MMM dd";
        return `${(0, $22uAH$format)(start, monthDayFormat)}${datesSeparator}${endStr}`;
    } else return `${startStr}${datesSeparator}${endStr}`;
}
function $d408f5f243aa2fb3$export$16bf106cb3f52bd5(date) {
    if (!date) return undefined;
    return (0, $22uAH$format)(date, "yyyy-MM-dd");
}
function $d408f5f243aa2fb3$export$5262b014bdb225e3(inputFormat) {
    const d = (0, $22uAH$parse)(inputFormat, "yyyy-MM-dd", new Date());
    return isNaN(d.getTime()) ? null : d;
}
function $d408f5f243aa2fb3$export$cf36134b7b6ebabc(preset) {
    let end = new Date();
    let start = (0, $22uAH$startOfYear)(new Date());
    if (preset === "last30Days") start = (0, $22uAH$sub)(end, {
        days: 30
    });
    else if (preset === "lastYear") start = (0, $22uAH$sub)(end, {
        years: 1
    });
    else if (preset === "last10Years") start = (0, $22uAH$sub)(end, {
        years: 10
    });
    else if (preset === "2018-2022") {
        start = new Date(2018, 0, 1);
        end = new Date(2022, 11, 31);
    }
    return {
        start: start,
        end: end
    };
}

});

parcelRequire.register("EAuO5", function(module, exports) {

$parcel$export(module.exports, "validateRangeNum", function () { return $ec62c4f813a17e9e$export$233456f449dff06c; });
$parcel$export(module.exports, "checkEnvFlag", function () { return $ec62c4f813a17e9e$export$b1ae4add8586f53a; });


function $ec62c4f813a17e9e$export$842a2cf37af977e1(a, n) {
    return (a % n + n) % n;
}
function $ec62c4f813a17e9e$export$233456f449dff06c(min, max) {
    return (raw)=>{
        const value = Number(raw);
        return !isNaN(value) && raw !== "" && value >= min && value <= max;
    };
}
function $ec62c4f813a17e9e$export$930856e8dcb3692d(a, b) {
    // Exist early if they're the same.
    if (a === b) return true;
    return JSON.stringify(a) === JSON.stringify(b);
}
function $ec62c4f813a17e9e$export$6df8b10de86b21f9(Comp, additionalStyles) {
    return (0, $22uAH$styledcomponents)(Comp).attrs((props)=>{
        const onClickOriginal = props.onClick;
        return {
            onClick: (e)=>{
                if (props.visuallyDisabled) {
                    e.preventDefault();
                    return;
                }
                return onClickOriginal?.(e);
            }
        };
    }).withConfig({
        displayName: "utils",
        componentId: "sc-1plitz6-0"
    })([
        "",
        ""
    ], ({ visuallyDisabled: vd  })=>vd && (0, $22uAH$css)([
            "",
            " &&&:hover{",
            " background:inherit;}",
            ""
        ], (0, $22uAH$visuallyDisabled)(), (0, $22uAH$visuallyDisabled)(), additionalStyles));
}
function $ec62c4f813a17e9e$export$b1ae4add8586f53a(value) {
    return (value ?? "").toLowerCase() === "true";
}

});

parcelRequire.register("jfO2i", function(module, exports) {

$parcel$export(module.exports, "projectionsList", function () { return $15918d6f7f4b773e$export$d907e5f1c098e072; });
$parcel$export(module.exports, "projectionDefault", function () { return $15918d6f7f4b773e$export$ab286974363eaa30; });
$parcel$export(module.exports, "convertProjectionToMapbox", function () { return $15918d6f7f4b773e$export$a06236a21ded82b8; });
$parcel$export(module.exports, "validateLon", function () { return $15918d6f7f4b773e$export$ebf483883eb81e38; });
$parcel$export(module.exports, "validateLat", function () { return $15918d6f7f4b773e$export$575713d68770cd1d; });
$parcel$export(module.exports, "validateProjectionBlockProps", function () { return $15918d6f7f4b773e$export$4468e6c7182c8702; });

var $EAuO5 = parcelRequire("EAuO5");
const $15918d6f7f4b773e$export$d907e5f1c098e072 = [
    {
        id: "globe",
        mbId: "globe",
        label: "Globe"
    },
    {
        id: "albers",
        mbId: "albers",
        label: "Albers",
        conicValues: {
            center: [
                -96,
                37.5
            ],
            parallels: [
                29.5,
                45.5
            ]
        }
    },
    {
        id: "equalEarth",
        mbId: "equalEarth",
        label: "Equal Earth"
    },
    {
        id: "equirectangular",
        mbId: "equirectangular",
        label: "Equirectangular"
    },
    {
        id: "lambertConformalConic",
        mbId: "lambertConformalConic",
        label: "Lambert Conformal Conic",
        conicValues: {
            center: [
                0,
                30
            ],
            parallels: [
                30,
                30
            ]
        }
    },
    {
        id: "mercator",
        mbId: "mercator",
        label: "Mercator"
    },
    {
        id: "naturalEarth",
        mbId: "naturalEarth",
        label: "Natural Earth"
    },
    {
        id: "winkelTripel",
        mbId: "winkelTripel",
        label: "Winkel Tripel"
    },
    {
        id: "polarNorth",
        mbId: "lambertConformalConic",
        label: "Polar North",
        isCustom: true,
        conicValues: {
            center: [
                -40,
                0
            ],
            parallels: [
                90,
                90
            ]
        }
    },
    {
        id: "polarSouth",
        mbId: "lambertConformalConic",
        label: "Polar South",
        isCustom: true,
        conicValues: {
            center: [
                -40,
                0
            ],
            parallels: [
                -89.99,
                -89.99
            ]
        }
    }
]; // Default value for the projection state.
const $15918d6f7f4b773e$export$ab286974363eaa30 = {
    id: "mercator"
};
const $15918d6f7f4b773e$export$a06236a21ded82b8 = (projection)=>{
    const p = $15918d6f7f4b773e$export$d907e5f1c098e072.find((proj)=>proj.id === projection.id);
    if (!p) {
        /* eslint-disable-next-line no-console */ console.error("projection", projection);
        throw new Error(`Invalid projection with id: ${projection.id}`);
    }
    return {
        center: p.conicValues?.center || projection.center,
        parallels: p.conicValues?.parallels || projection.parallels,
        name: p.mbId
    };
};
const $15918d6f7f4b773e$export$ebf483883eb81e38 = (0, $EAuO5.validateRangeNum)(-180, 180);
const $15918d6f7f4b773e$export$575713d68770cd1d = (0, $EAuO5.validateRangeNum)(-90, 90);
function $15918d6f7f4b773e$export$4468e6c7182c8702({ id: id , center: center , parallels: parallels  }) {
    // Projections
    const projectionErrors = [];
    if (id) {
        const allowedProjections = $15918d6f7f4b773e$export$d907e5f1c098e072.map((p)=>p.id);
        const projectionsConic = $15918d6f7f4b773e$export$d907e5f1c098e072.filter((p)=>!p.isCustom && !!p.conicValues).map((p)=>p.id);
        if (!allowedProjections.includes(id)) {
            const a = allowedProjections.join(", ");
            projectionErrors.push(`- Invalid projectionId. Must be one of: ${a}.`);
        }
        if (projectionsConic.includes(id)) {
            if (!center || !$15918d6f7f4b773e$export$ebf483883eb81e38(center[0]) || !$15918d6f7f4b773e$export$575713d68770cd1d(center[1])) {
                const o = projectionsConic.join(", ");
                projectionErrors.push(`- Invalid projectionCenter. This property is required for ${o} projections. Use [longitude, latitude].`);
            }
            if (!parallels || !$15918d6f7f4b773e$export$575713d68770cd1d(parallels[0]) || !$15918d6f7f4b773e$export$575713d68770cd1d(parallels[1])) {
                const o1 = projectionsConic.join(", ");
                projectionErrors.push(`- Invalid projectionParallels. This property is required for ${o1} projections. Use [Southern parallel latitude, Northern parallel latitude].`);
            }
        }
    }
    return projectionErrors;
}

});


parcelRequire.register("V0mFk", function(module, exports) {

$parcel$export(module.exports, "LazyChart", function () { return $0ab59b6202f0ff48$export$f99a4a97637049e5; });
$parcel$export(module.exports, "LazyScrollyTelling", function () { return $0ab59b6202f0ff48$export$534cac33aab113d0; });
$parcel$export(module.exports, "LazyMap", function () { return $0ab59b6202f0ff48$export$6a8d730ca5a4eb4d; });
$parcel$export(module.exports, "LazyCompareImage", function () { return $0ab59b6202f0ff48$export$81b05af62efa4780; });
$parcel$export(module.exports, "LazyTable", function () { return $0ab59b6202f0ff48$export$4216bf4ee40e506e; });
$parcel$export(module.exports, "LazyEmbed", function () { return $0ab59b6202f0ff48$export$1f13dec720e6c00d; });





var $jegiK = parcelRequire("jegiK");

var $4OKRl = parcelRequire("4OKRl");

var $5CSGp = parcelRequire("5CSGp");

var $1L02j = parcelRequire("1L02j");

var $7PPHS = parcelRequire("7PPHS");

var $aZ6ql = parcelRequire("aZ6ql");

var $eA4Xl = parcelRequire("eA4Xl");

var $4FnrG = parcelRequire("4FnrG");
function $0ab59b6202f0ff48$export$f99a4a97637049e5(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: `${(0, $4OKRl.chartMaxHeight)}px`
        }),
        offset: 50,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $jegiK.default), {
            ...props
        })
    });
}
function $0ab59b6202f0ff48$export$534cac33aab113d0(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: (0, $eA4Xl.scrollyMapHeight)
        }),
        offset: 100,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $eA4Xl.ScrollytellingBlock), {
            ...props
        })
    });
}
function $0ab59b6202f0ff48$export$6a8d730ca5a4eb4d(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: (0, $7PPHS.mapHeight)
        }),
        offset: 100,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $7PPHS.default), {
            ...props
        })
    });
}
function $0ab59b6202f0ff48$export$81b05af62efa4780(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: 200
        }),
        offset: 50,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $1L02j.default), {
            ...props
        })
    });
}
function $0ab59b6202f0ff48$export$4216bf4ee40e506e(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: (0, $5CSGp.tableHeight)
        }),
        offset: 50,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5CSGp.default), {
            ...props
        })
    });
}
function $0ab59b6202f0ff48$export$1f13dec720e6c00d(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactlazyload // eslint-disable-next-line react/prop-types
    ), {
        placeholder: /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.LoadingSkeleton), {
            height: props.height
        }),
        offset: 50,
        once: true,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $aZ6ql.default), {
            ...props
        })
    });
}
$0ab59b6202f0ff48$export$1f13dec720e6c00d.propTypes = {
    src: (0, $22uAH$proptypes).string,
    height: (0, $22uAH$proptypes).number
};

});
parcelRequire.register("jegiK", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $f55c5a314009f3e9$export$2e2bcd8739ae039; });




var $3ih4j = parcelRequire("3ih4j");

var $4OKRl = parcelRequire("4OKRl");

var $d7NJe = parcelRequire("d7NJe");

var $ftTSk = parcelRequire("ftTSk");
const $f55c5a314009f3e9$var$subIdKey = "subIdeKey";
function $f55c5a314009f3e9$var$BlockChart(props) {
    const { dataPath: dataPath , idKey: idKey , xKey: xKey , yKey: yKey , dateFormat: dateFormat  } = props;
    const [chartData, setChartData] = (0, $22uAH$useState)([]);
    const [uniqueKeys, setUniqueKeys] = (0, $22uAH$useState)([]);
    const newDataPath = dataPath.split("?")[0];
    const extension = (0, $4OKRl.fileExtensionRegex).exec(newDataPath)[1];
    const throwAsyncError = (0, $ftTSk.default)();
    (0, $22uAH$useEffect)(()=>{
        const getData = async ()=>{
            try {
                const data = extension === "csv" ? await (0, $22uAH$csv)(dataPath) : await (0, $22uAH$json)(dataPath).then((d)=>[
                        d
                    ].flat()); // if no idKey is provided (when there are only two columns in the data), sub it with empty data
                const dataToUse = idKey ? data : data.map((e)=>({
                        ...e,
                        [$f55c5a314009f3e9$var$subIdKey]: ""
                    }));
                const { fData: fData , uniqueKeys: uniqueKeys  } = (0, $3ih4j.getFData)({
                    data: dataToUse,
                    idKey: idKey ? idKey : $f55c5a314009f3e9$var$subIdKey,
                    xKey: xKey,
                    yKey: yKey,
                    dateFormat: dateFormat
                });
                const formattedUniqueKeys = uniqueKeys.map((e)=>({
                        label: e,
                        value: e,
                        active: true
                    }));
                setChartData(fData);
                setUniqueKeys(formattedUniqueKeys);
            } catch (e) {
                throwAsyncError(e);
            }
        };
        getData();
    }, [
        setChartData,
        setUniqueKeys,
        throwAsyncError,
        extension,
        idKey,
        xKey,
        yKey,
        dataPath,
        dateFormat
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $d7NJe.default), {
        ...props,
        chartData: chartData,
        uniqueKeys: uniqueKeys,
        renderLegend: true
    });
}
var $f55c5a314009f3e9$export$2e2bcd8739ae039 = $f55c5a314009f3e9$var$BlockChart;

});
parcelRequire.register("3ih4j", function(module, exports) {

$parcel$export(module.exports, "timeFormatter", function () { return $65c0e759da2167d8$export$5a00511f040384d7; });
$parcel$export(module.exports, "convertToTime", function () { return $65c0e759da2167d8$export$6bcf10fa924b8f90; });
$parcel$export(module.exports, "getFData", function () { return $65c0e759da2167d8$export$776836780a938436; });
$parcel$export(module.exports, "getColors", function () { return $65c0e759da2167d8$export$6cee60e8aa85e528; });
$parcel$export(module.exports, "getNumForChart", function () { return $65c0e759da2167d8$export$104b63ca24cf6df9; });



var $2RWby = parcelRequire("2RWby");

var $9gKLh = parcelRequire("9gKLh");
const $65c0e759da2167d8$export$5a00511f040384d7 = (time, dateFormat)=>{
    return $65c0e759da2167d8$export$406508d2ca449bd(new Date(time), dateFormat);
};
const $65c0e759da2167d8$export$406508d2ca449bd = (date, dateFormat)=>{
    const format = (0, $22uAH$timeFormat)(dateFormat);
    return format(date);
};
const $65c0e759da2167d8$export$6bcf10fa924b8f90 = ({ timeString: timeString , dateFormat: dateFormat  })=>{
    if (!timeString) return undefined;
    const parseDate = (0, $22uAH$timeParse)(dateFormat);
    if (!parseDate(timeString)) throw new (0, $9gKLh.HintedError)(`Failed to parse time with the dateFormat provided: ${dateFormat}.`, [
        `The data has "${timeString}" as value.`,
        `Please check if you are using the right time format: https://github.com/d3/d3-time-format.`
    ]);
    return parseDate(timeString)?.getTime();
};
function $65c0e759da2167d8$export$ab9a23b9671556a6({ timeSeriesData: timeSeriesData , dates: dates , dateFormat: dateFormat , uniqueKeys: uniqueKeys ,  }) {
    /* eslint-disable-next-line fp/no-mutating-methods */ return timeSeriesData.map((e, idx)=>{
        const currentStat = e;
        const date = $65c0e759da2167d8$export$6bcf10fa924b8f90({
            timeString: dates[idx],
            dateFormat: dateFormat
        }) ?? 0;
        return {
            date: date,
            dateFormat: dateFormat,
            ...uniqueKeys.reduce((acc, curr)=>{
                return {
                    ...acc,
                    [curr.label]: currentStat[curr.value]
                };
            }, {})
        };
    }).sort((a, b)=>a.date - b.date);
}
function $65c0e759da2167d8$export$776836780a938436({ data: data , idKey: idKey , xKey: xKey , yKey: yKey , dateFormat: dateFormat  }) {
    // Throw an error if no key is found.
    const columnErrors = [
        xKey,
        yKey,
        idKey
    ].map((key)=>({
            key: key,
            noErr: Object.keys(data[0]).includes(key)
        })).filter((e)=>!e.noErr).map((e)=>`"${e.key}" is not found in columns. Please check if the data has "${e.key}" column.`);
    if (columnErrors.length > 0) throw new (0, $9gKLh.HintedError)("Key not found", columnErrors); // Check sensitivity value
    const collator = new Intl.Collator("en", {
        numeric: true
    });
    /* eslint-disable-next-line fp/no-mutating-methods */ const uniqueKeys = [
        ...Array.from(new Set(data.map((d)=>d[idKey])))
    ].sort(collator.compare); // Format csv/json data into chart suitable data
    // ## From:
    // {
    //   "xkey": xKey value,
    //   "yKey": yKey value,
    //   "idKey": idKey value
    // }
    // ## to
    // {
    //   "xkey": xKey value,
    //   "idKey value": yKey value
    // }
    // This reduce function will yield an object with x values as keys / data units as values
    // we will use the values of this object
    const fData = data.reduce((keyObject, entry)=>{
        if (!keyObject[entry[xKey]]) keyObject[entry[xKey]] = {
            date: $65c0e759da2167d8$export$6bcf10fa924b8f90({
                timeString: entry[xKey],
                dateFormat: dateFormat
            }),
            [entry[idKey]]: parseFloat(entry[yKey])
        };
        else keyObject[entry[xKey]] = {
            ...keyObject[entry[xKey]],
            [entry[idKey]]: parseFloat(entry[yKey])
        };
        return keyObject;
    }, {});
    return {
        uniqueKeys: uniqueKeys,
        fData: Object.values(fData)
    };
}
function $65c0e759da2167d8$var$getInterpolateFunction(colorScheme) {
    const fnName = `interpolate${colorScheme[0].toUpperCase() + colorScheme.slice(1)}`;
    return $22uAH$d3scalechromatic[fnName];
}
const $65c0e759da2167d8$export$6cee60e8aa85e528 = function({ steps: steps , colorScheme: colorScheme = "viridis"  }) {
    const colorFn = $65c0e759da2167d8$var$getInterpolateFunction(colorScheme);
    return new Array(steps).fill(0).map((e, idx)=>colorFn(idx / steps));
};
function $65c0e759da2167d8$export$104b63ca24cf6df9(x) {
    if (x === undefined || isNaN(x)) return "n/a";
    if (x === 0) return "0"; // Between 0.001 and 1000 just round.
    if (Math.abs(x) < 1000 && Math.abs(x) >= 0.001) return (0, $2RWby.round)(x, 3).toString();
    return (0, $2RWby.formatAsScientificNotation)(x);
}

});
parcelRequire.register("2RWby", function(module, exports) {

$parcel$export(module.exports, "round", function () { return $b9730d7aea8526d0$export$2077e0241d6afd3c; });
$parcel$export(module.exports, "formatThousands", function () { return $b9730d7aea8526d0$export$aa9294712332dc16; });
$parcel$export(module.exports, "formatAsScientificNotation", function () { return $b9730d7aea8526d0$export$a5c7fd3700da7bdd; });
function $b9730d7aea8526d0$export$2077e0241d6afd3c(value, decimals = 2) {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
function $b9730d7aea8526d0$export$7ecd32ca6b3ae583(value, decimals = 2) {
    if (value / 1e9 >= 1) return {
        num: $b9730d7aea8526d0$export$2077e0241d6afd3c(value / 1e9, decimals),
        unit: "B"
    };
    else if (value / 1e6 >= 1) return {
        num: $b9730d7aea8526d0$export$2077e0241d6afd3c(value / 1e6, decimals),
        unit: "M"
    };
    else if (value / 1e3 >= 1) return {
        num: $b9730d7aea8526d0$export$2077e0241d6afd3c(value / 1e3, decimals),
        unit: "K"
    };
    return {
        num: value,
        unit: ""
    };
}
function $b9730d7aea8526d0$export$aa9294712332dc16(num, options) {
    const opts = {
        decimals: 2,
        separator: ",",
        forceDecimals: false,
        shorten: false,
        ...options
    }; // isNaN(null) === true
    if (isNaN(num) || !num && num !== 0) return "--";
    const repeat = (char, length)=>{
        let str = "";
        for(let i = 0; i < length; i++)str += char + "";
        return str;
    };
    const sign = num < 0 ? "-" : "";
    const absNum = Math.abs(num);
    let [int, dec] = Number($b9730d7aea8526d0$export$2077e0241d6afd3c(absNum, opts.decimals)).toString().split(".");
    let largeNumUnit = "";
    if (opts.shorten) {
        const { num: num1 , unit: unit  } = $b9730d7aea8526d0$export$7ecd32ca6b3ae583(Number(int), 0);
        int = num1.toString();
        largeNumUnit = unit;
    } // Space the integer part of the number.
    int = int.replace(/\B(?=(\d{3})+(?!\d))/g, opts.separator); // Round the decimals.
    dec = (dec || "").substring(0, opts.decimals); // Add decimals if forced.
    dec = opts.forceDecimals ? `${dec}${repeat(0, opts.decimals - dec.length)}` : dec;
    return dec !== "" ? `${sign}${int}.${dec} ${largeNumUnit}` : `${sign}${int} ${largeNumUnit}`;
}
function $b9730d7aea8526d0$export$3cdc770bf8b2ed3d(num, length = 2) {
    const prefix = num < 0 ? "-" : "";
    const abdsNum = Math.abs(num);
    const wholeNum = Math.floor(abdsNum);
    const padLength = Math.max(length - String(wholeNum).length, 0);
    const pads = new Array(padLength + 1).join("0");
    return prefix + pads + abdsNum;
}
function $b9730d7aea8526d0$export$a5c7fd3700da7bdd(num, decimals = 2) {
    if (!isFinite(num)) return `${Math.sign(num) === -1 ? "-" : ""}∞`;
    const [coefficient, exponent] = num.toExponential().split("e").map((item)=>Number(item));
    const sups = "⁰\xb9\xb2\xb3⁴⁵⁶⁷⁸⁹";
    const exponentSup = Math.abs(exponent).toString().split("").map((v)=>sups[v]).join("");
    const sign = exponent < 0 ? "⁻" : "";
    return `${$b9730d7aea8526d0$export$2077e0241d6afd3c(coefficient, decimals)}x10${sign}${exponentSup}`;
}

});


parcelRequire.register("4OKRl", function(module, exports) {

$parcel$export(module.exports, "chartMinHeight", function () { return $38202e3c04052000$export$e975f927c24cf4a8; });
$parcel$export(module.exports, "chartMaxHeight", function () { return $38202e3c04052000$export$40697364cff166fb; });
$parcel$export(module.exports, "chartAspectRatio", function () { return $38202e3c04052000$export$a9c4ee88674b7001; });
$parcel$export(module.exports, "defaultMargin", function () { return $38202e3c04052000$export$6728fea658cfb92e; });
$parcel$export(module.exports, "highlightColorThemeValue", function () { return $38202e3c04052000$export$563283a51474d23c; });
$parcel$export(module.exports, "highlightColor", function () { return $38202e3c04052000$export$7b93c9150739f7ee; });
$parcel$export(module.exports, "fileExtensionRegex", function () { return $38202e3c04052000$export$56d5855bc94e5e87; });
$parcel$export(module.exports, "legendWidth", function () { return $38202e3c04052000$export$9521120b43092a8d; });
$parcel$export(module.exports, "brushHeight", function () { return $38202e3c04052000$export$b4f2afed5884b447; });
$parcel$export(module.exports, "brushRelatedConfigs", function () { return $38202e3c04052000$export$c38fa016fa5e23fe; });
$parcel$export(module.exports, "chartYAxisWidth", function () { return $38202e3c04052000$export$b0ebadfc5b545f67; });
$parcel$export(module.exports, "chartLabelOffset", function () { return $38202e3c04052000$export$b4bdae6c14f12486; });
const $38202e3c04052000$export$e975f927c24cf4a8 = 200;
const $38202e3c04052000$export$40697364cff166fb = 500;
const $38202e3c04052000$export$a9c4ee88674b7001 = 1.77; // 16:9
const $38202e3c04052000$export$6728fea658cfb92e = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 20
};
const $38202e3c04052000$export$563283a51474d23c = "color.info-300a";
const $38202e3c04052000$export$7b93c9150739f7ee = "rgba(46, 134, 171, 0.32)";
const $38202e3c04052000$export$56d5855bc94e5e87 = /(?:\.([^.]+))?$/;
const $38202e3c04052000$export$9521120b43092a8d = 700;
const $38202e3c04052000$export$b4f2afed5884b447 = 50;
const $38202e3c04052000$export$c38fa016fa5e23fe = {
    with: {
        xAxisHeight: 50,
        labelOffset: -16
    },
    without: {
        xAxisHeight: 30,
        labelOffset: -5
    }
};
const $38202e3c04052000$export$b0ebadfc5b545f67 = 80;
const $38202e3c04052000$export$b4bdae6c14f12486 = 8;

});

parcelRequire.register("d7NJe", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $39e2722b04eebf06$export$2e2bcd8739ae039; });





var $5caLB = parcelRequire("5caLB");

var $g6Esq = parcelRequire("g6Esq");

var $cL0sT = parcelRequire("cL0sT");

var $3ih4j = parcelRequire("3ih4j");

var $4OKRl = parcelRequire("4OKRl");

var $E7gdO = parcelRequire("E7gdO");

var $dfApQ = parcelRequire("dfApQ");
const $39e2722b04eebf06$var$LineChartWithFont = (0, $22uAH$styledcomponents)((0, $22uAH$LineChart)).withConfig({
    displayName: "chart__LineChartWithFont",
    componentId: "sc-1p48v48-0"
})([
    "font-size:0.8rem;"
]);
const $39e2722b04eebf06$var$ChartWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "chart__ChartWrapper",
    componentId: "sc-1p48v48-1"
})([
    "width:100%;grid-column:1/-1;.label-y{text-anchor:middle;}"
]);
const $39e2722b04eebf06$var$BrushContainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "chart__BrushContainer",
    componentId: "sc-1p48v48-2"
})([
    "width:100%;position:relative;border:1px solid #efefef;border-radius:0.25rem;"
]);
function $39e2722b04eebf06$var$CustomCursor(props) {
    // work around to disable cursor line when there is no matching index found
    // eslint-disable-next-line react/prop-types
    if (props.payloadIndex < 0) return null;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Curve), {
        ...props
    });
}
var $39e2722b04eebf06$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $22uAH$forwardRef)(function RLineChart(props, ref) {
    const { chartData: chartData , uniqueKeys: uniqueKeys , colors: colors , colorScheme: colorScheme = "viridis" , dateFormat: dateFormat , altTitle: altTitle , altDesc: altDesc , renderLegend: renderLegend = false , renderBrush: renderBrush = false , syncId: syncId , highlightStart: highlightStart , highlightEnd: highlightEnd , highlightLabel: highlightLabel , xAxisLabel: xAxisLabel , yAxisLabel: yAxisLabel , availableDomain: availableDomain , brushRange: brushRange , onBrushRangeChange: onBrushRangeChange  } = props;
    const [chartMargin, setChartMargin] = (0, $22uAH$useState)((0, $4OKRl.defaultMargin));
    const { isMediumUp: isMediumUp  } = (0, $dfApQ.useMediaQuery)();
    (0, $22uAH$useEffect)(()=>{
        if (!isMediumUp) setChartMargin({
            ...(0, $4OKRl.defaultMargin),
            left: 0
        });
    }, [
        isMediumUp
    ]);
    const lineColors = (0, $22uAH$useMemo)(()=>{
        return colors ? colors : (0, $3ih4j.getColors)({
            steps: uniqueKeys.length,
            colorScheme: colorScheme
        });
    }, [
        uniqueKeys,
        colorScheme,
        colors
    ]);
    const uniqueKeysWithColors = (0, $22uAH$useMemo)(()=>{
        return uniqueKeys.map((e, idx)=>({
                ...e,
                color: lineColors[idx]
            }));
    }, [
        uniqueKeys,
        lineColors
    ]);
    const renderHighlight = !!(highlightStart ?? highlightEnd);
    const xAxisDomain = (0, $22uAH$useMemo)(()=>{
        if (!renderBrush || !brushRange) return null;
        return [
            +brushRange[0],
            +brushRange[1]
        ];
    }, [
        renderBrush,
        brushRange
    ]);
    const brushXAxisDomain = (0, $22uAH$useMemo)(()=>{
        if (!renderBrush || !availableDomain) return null;
        return [
            +availableDomain[0],
            +availableDomain[1]
        ];
    }, [
        renderBrush,
        availableDomain
    ]); // Generate fake values before and after data range in order for recharts to show ticks - see  - needed because https://github.com/recharts/recharts/issues/2126
    const chartDataWithFakeValues = (0, $22uAH$useMemo)(()=>{
        if (!renderBrush || !availableDomain || chartData.length <= 1) return chartData;
        const firstDate = chartData[0].date;
        const lastDate = chartData[chartData.length - 1].date;
        const interval = chartData[1].date - firstDate;
        let currentFakeDate = firstDate;
        let prependValues = [];
        while(currentFakeDate > +availableDomain[0]){
            currentFakeDate -= interval;
            prependValues = [
                {
                    date: currentFakeDate
                },
                ...prependValues
            ];
        }
        currentFakeDate = lastDate;
        let appendValues = [];
        while(currentFakeDate < +availableDomain[1]){
            currentFakeDate += interval;
            appendValues = [
                ...appendValues,
                {
                    date: currentFakeDate
                }
            ];
        }
        return [
            ...prependValues,
            ...chartData,
            ...appendValues
        ];
    }, [
        renderBrush,
        chartData,
        availableDomain
    ]); // This is a hack to manually compute xAxis interval - needed because https://github.com/recharts/recharts/issues/2126
    const xAxisInterval = (0, $22uAH$useMemo)(()=>{
        if (!renderBrush || !brushRange) return null;
        const numValuesInBrushRange = chartDataWithFakeValues.filter((d)=>d.date > +brushRange[0] && d.date < +brushRange[1]).length;
        return Math.round(numValuesInBrushRange / 5);
    }, [
        renderBrush,
        chartDataWithFakeValues,
        brushRange
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsxs)($39e2722b04eebf06$var$ChartWrapper, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ResponsiveContainer), {
                aspect: (0, $4OKRl.chartAspectRatio),
                debounce: 500,
                height: "auto",
                minHeight: (0, $4OKRl.chartMinHeight),
                maxHeight: (0, $4OKRl.chartMaxHeight),
                children: /*#__PURE__*/ (0, $22uAH$jsxs)($39e2722b04eebf06$var$LineChartWithFont, {
                    ref: ref,
                    data: chartDataWithFakeValues,
                    margin: chartMargin,
                    syncId: syncId,
                    syncMethod: "value",
                    children: [
                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $g6Esq.default), {
                            title: altTitle,
                            desc: altDesc
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CartesianGrid), {
                            stroke: "#efefef",
                            vertical: false
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$XAxis), {
                            type: "number",
                            scale: "time",
                            domain: xAxisDomain ?? [
                                "dataMin",
                                "dataMax"
                            ],
                            dataKey: "date",
                            axisLine: false,
                            tickFormatter: (t)=>(0, $3ih4j.timeFormatter)(t, dateFormat),
                            allowDataOverflow: true,
                            interval: xAxisInterval ?? "preserveEnd",
                            height: renderBrush ? (0, $4OKRl.brushRelatedConfigs).with.xAxisHeight : (0, $4OKRl.brushRelatedConfigs).without.xAxisHeight,
                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Label), {
                                value: xAxisLabel,
                                offset: renderBrush ? (0, $4OKRl.brushRelatedConfigs).with.labelOffset : (0, $4OKRl.brushRelatedConfigs).without.labelOffset,
                                position: "bottom"
                            })
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$YAxis), {
                            axisLine: false,
                            width: (0, $4OKRl.chartYAxisWidth),
                            domain: [
                                "auto",
                                "auto"
                            ],
                            tickFormatter: (t)=>(0, $3ih4j.getNumForChart)(t),
                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Label), {
                                className: "label-y",
                                value: yAxisLabel,
                                angle: -90,
                                position: "insideLeft",
                                offset: (0, $4OKRl.chartLabelOffset)
                            })
                        }),
                        renderHighlight && /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
                            children: [
                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ReferenceArea), {
                                    x1: (0, $3ih4j.convertToTime)({
                                        timeString: highlightStart,
                                        dateFormat: dateFormat
                                    }),
                                    x2: (0, $3ih4j.convertToTime)({
                                        timeString: highlightEnd,
                                        dateFormat: dateFormat
                                    }),
                                    fill: (0, $4OKRl.highlightColor),
                                    isFront: true
                                }),
                                !!highlightLabel && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Customized), {
                                    component: /*#__PURE__*/ (0, $22uAH$jsx)((0, $cL0sT.ReferenceLegendComponent), {
                                        highlightLabel: highlightLabel
                                    })
                                })
                            ]
                        }),
                        uniqueKeysWithColors.map((k)=>{
                            return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Line), {
                                type: "linear",
                                isAnimationActive: false,
                                dot: false,
                                activeDot: {
                                    r: 3
                                },
                                dataKey: k.label,
                                strokeWidth: 2,
                                stroke: k.active ? k.color : "transparent"
                            }, `${k.value}-line`);
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Tooltip), {
                            cursor: /*#__PURE__*/ (0, $22uAH$jsx)($39e2722b04eebf06$var$CustomCursor, {}),
                            content: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5caLB.default), {
                                dateFormat: dateFormat,
                                uniqueKeys: uniqueKeysWithColors
                            })
                        }),
                        renderLegend && uniqueKeysWithColors.length > 1 && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Legend), {
                            verticalAlign: "bottom",
                            width: (0, $4OKRl.legendWidth),
                            wrapperStyle: {
                                width: "100%"
                            },
                            content: /*#__PURE__*/ (0, $22uAH$jsx)((0, $cL0sT.LegendComponent), {})
                        })
                    ]
                })
            }),
            renderBrush && brushXAxisDomain && availableDomain && brushRange && onBrushRangeChange && /*#__PURE__*/ (0, $22uAH$jsxs)($39e2722b04eebf06$var$BrushContainer, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ResponsiveContainer), {
                        aspect: (0, $4OKRl.chartAspectRatio),
                        maxHeight: (0, $4OKRl.brushHeight),
                        width: "100%",
                        children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$LineChart), {
                            data: chartDataWithFakeValues,
                            margin: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$XAxis), {
                                    type: "number",
                                    scale: "time",
                                    domain: brushXAxisDomain,
                                    dataKey: "date",
                                    hide: true
                                }),
                                uniqueKeysWithColors.map((k)=>{
                                    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Line), {
                                        type: "linear",
                                        isAnimationActive: false,
                                        dot: false,
                                        activeDot: false,
                                        dataKey: k.label,
                                        strokeWidth: 0.5,
                                        stroke: k.active ? k.color : "transparent"
                                    }, `${k.value}-line-brush_`);
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $E7gdO.default), {
                        availableDomain: availableDomain,
                        brushRange: brushRange,
                        onBrushRangeChange: onBrushRangeChange
                    })
                ]
            })
        ]
    });
});

});
parcelRequire.register("5caLB", function(module, exports) {

$parcel$export(module.exports, "ListItem", function () { return $a3f6bf1da96838a5$export$a7b06bfba60a8a78; });
$parcel$export(module.exports, "default", function () { return $a3f6bf1da96838a5$export$2e2bcd8739ae039; });





var $3ih4j = parcelRequire("3ih4j");
const $a3f6bf1da96838a5$var$TooltipWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "tooltip__TooltipWrapper",
    componentId: "sc-1hgcpa6-0"
})([
    "background-color:",
    ";border:1px solid ",
    ";padding:",
    ";border-radius:",
    ";font-size:0.75rem;> div:not(:last-child){padding-bottom:",
    ";}"
], (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.base-300a"), (0, $22uAH$glsp)(0.5), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$glsp)(0.25));
const $a3f6bf1da96838a5$export$a7b06bfba60a8a78 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "tooltip__ListItem",
    componentId: "sc-1hgcpa6-1"
})([
    "width:12px;height:12px;background-color:",
    ";display:inline-block;margin-right:",
    ";"
], (props)=>props.color, (0, $22uAH$glsp)(0.2));
const $a3f6bf1da96838a5$var$TooltipItem = (0, $22uAH$styledcomponents)($a3f6bf1da96838a5$export$a7b06bfba60a8a78).withConfig({
    displayName: "tooltip__TooltipItem",
    componentId: "sc-1hgcpa6-2"
})([
    "margin-right:",
    ";"
], (0, $22uAH$glsp)(0.5));
function $a3f6bf1da96838a5$export$2e2bcd8739ae039(props) {
    const { dateFormat: dateFormat , uniqueKeys: uniqueKeys , active: active , payload: payload , label: label  } = props;
    const inactiveKeys = uniqueKeys.filter((e)=>!e.active).map((e)=>e.label);
    if (active && payload && payload.length) return /*#__PURE__*/ (0, $22uAH$jsxs)($a3f6bf1da96838a5$var$TooltipWrapper, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                children: /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                    children: (0, $3ih4j.timeFormatter)(label, dateFormat)
                })
            }),
            uniqueKeys.filter((key)=>!inactiveKeys.includes(key.label)).map((key)=>{
                const point = payload[0].payload[key.label];
                return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0, $22uAH$jsx)($a3f6bf1da96838a5$var$TooltipItem, {
                            color: key.color
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                            children: key.label
                        }),
                        " ",
                        !!key.label.length && ":",
                        (0, $3ih4j.getNumForChart)(point)
                    ]
                }, `${key.label}-key`);
            })
        ]
    });
    return null;
}

});

parcelRequire.register("g6Esq", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $79d71866a8d6dfd7$export$2e2bcd8739ae039; });


function $79d71866a8d6dfd7$export$2e2bcd8739ae039(props) {
    const { title: title , desc: desc  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: title
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("desc", {
                children: desc
            })
        ]
    });
}

});

parcelRequire.register("cL0sT", function(module, exports) {

$parcel$export(module.exports, "ReferenceLegendComponent", function () { return $e896cdf518dcee00$export$47c6a27fae70e16c; });
$parcel$export(module.exports, "LegendComponent", function () { return $e896cdf518dcee00$export$78003ba218df33f3; });





var $5caLB = parcelRequire("5caLB");

var $4OKRl = parcelRequire("4OKRl");
const $e896cdf518dcee00$export$d2e34c56e9db10e3 = (0, $22uAH$styledcomponents).ul.withConfig({
    displayName: "legend__LegendWrapper",
    componentId: "sc-15lappf-0"
})([
    "margin:0 auto;margin-top:",
    ";text-align:center;",
    ";"
], (0, $22uAH$glsp)(0.75), ({ width: width  })=>width && (0, $22uAH$css)([
        "max-width:",
        "px;"
    ], width));
const $e896cdf518dcee00$export$590bd3a1b15e3e13 = (0, $22uAH$styledcomponents).li.withConfig({
    displayName: "legend__LegendItem",
    componentId: "sc-15lappf-1"
})([
    "display:inline-flex;list-style:none;margin-right:",
    ";font-size:0.75rem;color:",
    ";*{align-self:center;}"
], (0, $22uAH$glsp)(0.25), (0, $22uAH$themeVal)("color.base-400"));
const $e896cdf518dcee00$var$HighlightLabel = (0, $22uAH$styledcomponents).text.withConfig({
    displayName: "legend__HighlightLabel",
    componentId: "sc-15lappf-2"
})([
    "font-size:0.75rem;dominant-baseline:hanging;"
]);
const $e896cdf518dcee00$var$HighlightLabelMarker = (0, $22uAH$styledcomponents).rect.withConfig({
    displayName: "legend__HighlightLabelMarker",
    componentId: "sc-15lappf-3"
})([
    "width:12px;height:12px;fill:",
    ";"
], (0, $22uAH$themeVal)((0, $4OKRl.highlightColorThemeValue)));
function $e896cdf518dcee00$export$47c6a27fae70e16c(props) {
    const { width: width , highlightLabel: highlightLabel  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)("g", {
        transform: `translate(${width ? width - 100 : 0}, 0) rotate(0)`,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($e896cdf518dcee00$var$HighlightLabelMarker, {}),
            /*#__PURE__*/ (0, $22uAH$jsx)($e896cdf518dcee00$var$HighlightLabel, {
                transform: "translate(15, 0)",
                children: highlightLabel
            })
        ]
    });
}
function $e896cdf518dcee00$export$78003ba218df33f3(props) {
    const { payload: payload , width: width  } = props;
    if (payload) return /*#__PURE__*/ (0, $22uAH$jsx)($e896cdf518dcee00$export$d2e34c56e9db10e3, {
        width: width,
        children: payload.map((entry)=>/*#__PURE__*/ (0, $22uAH$jsxs)($e896cdf518dcee00$export$590bd3a1b15e3e13, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $5caLB.ListItem), {
                        color: entry.color
                    }),
                    entry.value
                ]
            }, `item-${entry.value}`))
    });
    return null;
}

});

parcelRequire.register("E7gdO", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $50e31a5c98c60626$export$2e2bcd8739ae039; });




var $4OKRl = parcelRequire("4OKRl");

var $bHhq9 = parcelRequire("bHhq9");
const $50e31a5c98c60626$var$BrushWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "brush__BrushWrapper",
    componentId: "sc-1xseqai-0"
})([
    "position:absolute;left:0;top:0;width:100%;"
]);
const $50e31a5c98c60626$var$BrushContainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "brush__BrushContainer",
    componentId: "sc-1xseqai-1"
})([
    "position:absolute;top:0;height:",
    "px;"
], ({ height: height  })=>height);
const $50e31a5c98c60626$var$BrushComponent = (0, $22uAH$styledcomponents).button.withConfig({
    displayName: "brush__BrushComponent",
    componentId: "sc-1xseqai-2"
})([
    "position:absolute;height:100%;padding:0;border:1px solid rgb(110,110,110);"
]);
const $50e31a5c98c60626$var$BrushTraveller = (0, $22uAH$styledcomponents)($50e31a5c98c60626$var$BrushComponent).withConfig({
    displayName: "brush__BrushTraveller",
    componentId: "sc-1xseqai-3"
})([
    "width:7px;cursor:col-resize;z-index:1;padding:0;background:rgb(110,110,110);display:flex;justify-content:center;align-items:center;&:after{content:' ';border:1px solid white;opacity:0.7;width:3px;height:10px;display:block;border-top-width:0;border-bottom-width:0;}"
]);
const $50e31a5c98c60626$var$BrushTravellerStart = (0, $22uAH$styledcomponents)($50e31a5c98c60626$var$BrushTraveller).withConfig({
    displayName: "brush__BrushTravellerStart",
    componentId: "sc-1xseqai-4"
})([
    "left:-3px;"
]);
const $50e31a5c98c60626$var$BrushTravellerEnd = (0, $22uAH$styledcomponents)($50e31a5c98c60626$var$BrushTraveller).withConfig({
    displayName: "brush__BrushTravellerEnd",
    componentId: "sc-1xseqai-5"
})([
    "right:-3px;"
]);
const $50e31a5c98c60626$var$BrushDrag = (0, $22uAH$styledcomponents)($50e31a5c98c60626$var$BrushComponent).withConfig({
    displayName: "brush__BrushDrag",
    componentId: "sc-1xseqai-6"
})([
    "width:100%;cursor:move;background:rgba(110,110,110,0.3);"
]);
function $50e31a5c98c60626$var$Brush(props) {
    const { availableDomain: availableDomain , brushRange: brushRange , onBrushRangeChange: onBrushRangeChange  } = props;
    const changeCallback = (0, $22uAH$useCallback)((newSelection)=>{
        onBrushRangeChange(newSelection);
    }, [
        onBrushRangeChange
    ]);
    const { onBrushMouseDown: onBrushMouseDown , wrapperRef: wrapperRef , containerStyles: containerStyles  } = (0, $bHhq9.default)(availableDomain, brushRange, changeCallback);
    return /*#__PURE__*/ (0, $22uAH$jsx)($50e31a5c98c60626$var$BrushWrapper, {
        ref: wrapperRef,
        children: /*#__PURE__*/ (0, $22uAH$jsxs)($50e31a5c98c60626$var$BrushContainer, {
            height: (0, $4OKRl.brushHeight),
            onMouseDown: onBrushMouseDown,
            style: containerStyles,
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)($50e31a5c98c60626$var$BrushTravellerStart, {
                    "data-role": "start"
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)($50e31a5c98c60626$var$BrushDrag, {
                    "data-role": "drag"
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)($50e31a5c98c60626$var$BrushTravellerEnd, {
                    "data-role": "end"
                })
            ]
        })
    });
}
var $50e31a5c98c60626$export$2e2bcd8739ae039 = $50e31a5c98c60626$var$Brush;

});
parcelRequire.register("bHhq9", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $4aef59d10f663468$export$2e2bcd8739ae039; });



var $bTnNp = parcelRequire("bTnNp");
/**
 * 
 * @param  {[Date, Date]} domain Overall domain for the brush
 * @param {[Date, Date]} currentValues Current start and end for the brush selection. This state needs to be managed from outside the hook.
 * @param {function} changeCallback Callback to call when user updated brush. Receives a [Date, Date] argument
 * @param {number} minBrushWidthPx Minimum Width of the brush allowed, defaults to 10
 * @returns {{ wrapperRef, onBrushMouseDown, containerStyles}} 
 */ function $4aef59d10f663468$var$useBrush(domain, currentValues, changeCallback, minBrushWidthPx = 10) {
    const wrapperRef = (0, $22uAH$useRef)(null);
    const [dragging, setDragging] = (0, $22uAH$useState)(null);
    const initialOffsetX = (0, $22uAH$useRef)(0);
    const wrapperWidth = (0, $bTnNp.useResizeObserver)(wrapperRef, {
        initialWidth: 300
    });
    const scale = (0, $22uAH$useMemo)(()=>{
        return (0, $22uAH$scaleTime)().domain(domain).range([
            0,
            wrapperWidth
        ]);
    }, [
        domain,
        wrapperWidth
    ]);
    const brushX = (0, $22uAH$useMemo)(()=>{
        return scale(currentValues[0]);
    }, [
        scale,
        currentValues
    ]);
    const brushWidth = (0, $22uAH$useMemo)(()=>{
        return scale(currentValues[1]) - scale(currentValues[0]);
    }, [
        scale,
        currentValues
    ]);
    const onBrushMouseDown = (0, $22uAH$useCallback)((e)=>{
        setDragging(e.target.dataset.role);
    }, []);
    const onBrushMouseUp = (0, $22uAH$useCallback)(()=>{
        setDragging(null);
        initialOffsetX.current = 0;
    }, []);
    const onBrushMouseMove = (0, $22uAH$useCallback)((e)=>{
        if (!dragging) return;
        const baseX = wrapperRef.current ? wrapperRef.current.getBoundingClientRect().x : 0;
        const wrapperOffsetedX = e.clientX - baseX;
        if (initialOffsetX.current === 0) initialOffsetX.current = e.offsetX;
        let newStart = currentValues[0];
        let newEnd = currentValues[1];
        if (dragging === "drag") {
            const dragOffsetedX = wrapperOffsetedX - initialOffsetX.current; // Check that drag is not going below or above range
            if (dragOffsetedX <= 0) {
                newStart = scale.invert(0);
                newEnd = scale.invert(brushWidth);
            } else if (dragOffsetedX + brushWidth > wrapperWidth) {
                newEnd = scale.invert(wrapperWidth);
                newStart = scale.invert(wrapperWidth - brushWidth);
            } else {
                newStart = scale.invert(dragOffsetedX);
                newEnd = scale.invert(dragOffsetedX + brushWidth);
            }
        } else {
            if (dragging === "start") {
                const currentEndX = scale(currentValues[1]);
                newStart = currentEndX - wrapperOffsetedX < minBrushWidthPx ? currentValues[0] : scale.invert(wrapperOffsetedX);
            } else {
                const currentStartX = scale(currentValues[0]);
                newEnd = wrapperOffsetedX - currentStartX < minBrushWidthPx ? currentValues[1] : scale.invert(wrapperOffsetedX);
            } // Check that drag start/end is not going below or above range
            newStart = newStart < domain[0] ? domain[0] : newStart;
            newEnd = newEnd > domain[1] ? domain[1] : newEnd;
        }
        changeCallback([
            newStart,
            newEnd
        ]);
    }, [
        dragging,
        changeCallback,
        scale,
        brushWidth,
        currentValues,
        domain,
        minBrushWidthPx,
        wrapperWidth
    ]);
    (0, $22uAH$useEffect)(()=>{
        document.addEventListener("mouseup", onBrushMouseUp);
        document.addEventListener("mousemove", onBrushMouseMove);
        return ()=>{
            document.removeEventListener("mouseup", onBrushMouseUp);
            document.removeEventListener("mousemove", onBrushMouseMove);
        };
    }, [
        onBrushMouseUp,
        onBrushMouseMove
    ]);
    const containerStyles = (0, $22uAH$useMemo)(()=>{
        return {
            left: `${brushX}px`,
            width: `${brushWidth}px`
        };
    }, [
        brushX,
        brushWidth
    ]);
    return {
        wrapperRef: wrapperRef,
        onBrushMouseDown: onBrushMouseDown,
        containerStyles: containerStyles
    };
}
var $4aef59d10f663468$export$2e2bcd8739ae039 = $4aef59d10f663468$var$useBrush;

});
parcelRequire.register("bTnNp", function(module, exports) {

$parcel$export(module.exports, "useResizeObserver", function () { return $0de591a335b1382e$export$683480f191c0e3ea; });

const $0de591a335b1382e$export$683480f191c0e3ea = (ref, { initialWidth: initialWidth  } = {})=>{
    const [width, setWidth] = (0, $22uAH$useState)(initialWidth ?? 0);
    (0, $22uAH$useEffect)(()=>{
        const observeTarget = ref.current;
        if (!observeTarget) return;
        const resizeObserver = new ResizeObserver((entries)=>{
            entries.forEach((entry)=>{
                setWidth(entry.contentRect.width);
            });
        });
        resizeObserver.observe(observeTarget);
        return ()=>{
            resizeObserver.unobserve(observeTarget);
        };
    }, [
        ref
    ]);
    return width;
};

});



parcelRequire.register("dfApQ", function(module, exports) {

$parcel$export(module.exports, "useMediaQuery", function () { return $b60ede76c12042b8$export$32d5543ab307c01; });




var $lgWtD = parcelRequire("lgWtD");
function $b60ede76c12042b8$export$32d5543ab307c01() {
    const theme = (0, $22uAH$useTheme)();
    if (!theme.mediaRanges) throw new Error("There are no media ranges defined in the theme");
    const ranges = Object.entries(theme.mediaRanges); // Create breakpoints from media ranges.
    const breakpoints = (0, $22uAH$useMemo)(()=>ranges.reduce((acc, [breakpoint, [lowerBound]])=>({
                ...acc,
                [breakpoint]: lowerBound ?? 0
            }), {}), [
        ranges
    ]);
    const { observe: observe , currentBreakpoint: currentBreakpoint , width: calculatedWidth  } = (0, $22uAH$reactcooldimensions)({
        breakpoints: breakpoints,
        updateOnBreakpointChange: true
    });
    (0, $22uAH$useEffect)(()=>{
        observe(document.body);
    }, [
        observe
    ]); // Account for the scrollbar width because the css media queries will.
    const scrollbarWidth = (0, $lgWtD.getScrollbarWidth)(); // On first mount react-cool-dimension will return a width of 0, which breaks
    // the media queries styles because there's a mismatch between the css media
    // queries and the js.
    const width = calculatedWidth + scrollbarWidth || (typeof window !== "undefined" ? window.innerWidth + scrollbarWidth : 0);
    const rangeBooleans = (0, $22uAH$useMemo)(()=>ranges.reduce((acc, [rangeKey, bounds])=>{
            const upper = `${rangeKey.charAt(0).toUpperCase()}${rangeKey.slice(1)}`;
            const makeKey = (b)=>`is${upper}${b}`;
            let [lBound, uBound] = bounds;
            lBound = lBound ?? -Infinity;
            uBound = uBound ?? Infinity;
            return {
                ...acc,
                [makeKey("Up")]: width >= lBound,
                [makeKey("Only")]: width >= lBound && width <= uBound,
                [makeKey("Down")]: width <= uBound
            };
        }, {}), [
        ranges,
        width
    ]);
    return (0, $22uAH$useMemo)(()=>({
            current: currentBreakpoint,
            ...rangeBooleans
        }), [
        currentBreakpoint,
        rangeBooleans
    ]);
}

});
parcelRequire.register("lgWtD", function(module, exports) {

$parcel$export(module.exports, "getScrollbarWidth", function () { return $60c4065a7e0c07cc$export$ace028f8da1a6300; });

let $60c4065a7e0c07cc$var$scrollbarWidthCache;
function $60c4065a7e0c07cc$export$ace028f8da1a6300() {
    if ($60c4065a7e0c07cc$var$scrollbarWidthCache !== undefined) return $60c4065a7e0c07cc$var$scrollbarWidthCache;
    const el = document.createElement("div");
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    const width = el.offsetWidth - el.clientWidth;
    el.remove();
    $60c4065a7e0c07cc$var$scrollbarWidthCache = width;
    return width;
}
function $60c4065a7e0c07cc$export$b9a207ff02cf03ea(varName = "--scrollbar-width") {
    (0, $22uAH$useEffect)(()=>{
        const width = $60c4065a7e0c07cc$export$ace028f8da1a6300();
        document.documentElement.style.setProperty(varName, width + "px");
        return ()=>{
            document.documentElement.style.removeProperty(varName);
        };
    }, [
        varName
    ]);
}

});



parcelRequire.register("ftTSk", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a3494873bb11d154$export$2e2bcd8739ae039; });

// BlockErrorBoundary doesn't catch async errors. To catch async errors we use
// this workaround - it works if an error is thrown in useState hook. More in
// this thread: https://github.com/facebook/react/issues/14981
const $a3494873bb11d154$var$useAsyncError = ()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setError] = (0, $22uAH$useState)();
    return (0, $22uAH$useCallback)((e)=>{
        setError(()=>{
            throw e;
        });
    }, [
        setError
    ]);
};
var $a3494873bb11d154$export$2e2bcd8739ae039 = $a3494873bb11d154$var$useAsyncError;

});


parcelRequire.register("5CSGp", function(module, exports) {

$parcel$export(module.exports, "tableHeight", function () { return $c69644d142ab8868$export$285effa041e7a745; });
$parcel$export(module.exports, "default", function () { return $c69644d142ab8868$export$2e2bcd8739ae039; });









var $5X3wD = parcelRequire("5X3wD");
const $c69644d142ab8868$export$285effa041e7a745 = "400";
const $c69644d142ab8868$var$PlaceHolderWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "table__PlaceHolderWrapper",
    componentId: "sc-nx3oh3-0"
})([
    "display:flex;height:",
    "px;align-items:center;justify-content:center;font-weight:bold;"
], $c69644d142ab8868$export$285effa041e7a745);
const $c69644d142ab8868$var$TableWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "table__TableWrapper",
    componentId: "sc-nx3oh3-1"
})([
    "display:flex;max-width:100%;max-height:",
    "px;overflow:auto;"
], $c69644d142ab8868$export$285effa041e7a745);
const $c69644d142ab8868$var$StyledTable = (0, $22uAH$styledcomponents)((0, $22uAH$Table)).withConfig({
    displayName: "table__StyledTable",
    componentId: "sc-nx3oh3-2"
})([
    "thead{position:sticky;top:0;z-index:1;border-bottom:2px solid ",
    ";background:",
    ";box-shadow:0 0 0 1px ",
    ";th{vertical-align:middle;}.th-inner{display:flex;min-width:8rem;gap:0.5rem;align-items:center;}button{flex:0 0 auto;}}"
], (0, $22uAH$themeVal)("color.base-200"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.base-200a"));
function $c69644d142ab8868$export$2e2bcd8739ae039({ dataPath: dataPath , excelOption: excelOption , columnToSort: columnToSort  }) {
    const tableContainerRef = (0, $22uAH$useRef)(null);
    const { data: data , dataLoading: dataLoading , dataError: dataError  } = (0, $5X3wD.default)(dataPath, excelOption);
    const [sorting, setSorting] = (0, $22uAH$react).useState([]);
    const dataLoaded = !dataLoading && !dataError;
    const columns = data.length ? Object.keys(data[0]).map((key)=>{
        return {
            accessorKey: key,
            enableSorting: columnToSort?.includes(key) ? true : false
        };
    }) : [];
    const table = (0, $22uAH$useReactTable)({
        data: data,
        columns: columns,
        state: {
            sorting: sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: (0, $22uAH$getCoreRowModel)(),
        getSortedRowModel: (0, $22uAH$getSortedRowModel)()
    });
    const { rows: rows  } = table.getRowModel();
    const rowVirtualizer = (0, $22uAH$useVirtual)({
        parentRef: tableContainerRef,
        size: rows.length,
        overscan: 50
    });
    const { virtualItems: virtualRows , totalSize: totalSize  } = rowVirtualizer;
    const paddingTop = virtualRows.length > 0 ? virtualRows[0]?.start || 0 : 0;
    const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows[virtualRows.length - 1]?.end || 0) : 0;
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            dataLoading && /*#__PURE__*/ (0, $22uAH$jsx)($c69644d142ab8868$var$PlaceHolderWrapper, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                    children: "Loading Data..."
                })
            }),
            dataError && /*#__PURE__*/ (0, $22uAH$jsx)($c69644d142ab8868$var$PlaceHolderWrapper, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                    children: "Something went wrong while loading the data. Please try later. "
                })
            }),
            dataLoaded && /*#__PURE__*/ (0, $22uAH$jsx)($c69644d142ab8868$var$TableWrapper, {
                ref: tableContainerRef,
                children: /*#__PURE__*/ (0, $22uAH$jsxs)($c69644d142ab8868$var$StyledTable, {
                    children: [
                        /*#__PURE__*/ (0, $22uAH$jsx)("thead", {
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, $22uAH$jsx)("tr", {
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ (0, $22uAH$jsx)("th", {
                                            colSpan: header.colSpan,
                                            children: /*#__PURE__*/ (0, $22uAH$jsx)($c69644d142ab8868$var$SortableTh, {
                                                isSortable: header.column.getCanSort(),
                                                sortDirection: header.column.getIsSorted(),
                                                onSortClick: header.column.getToggleSortingHandler(),
                                                children: (0, $22uAH$flexRender)(header.column.columnDef.header, header.getContext())
                                            })
                                        }, header.id))
                                }, headerGroup.id))
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsxs)("tbody", {
                            children: [
                                paddingTop > 0 && /*#__PURE__*/ (0, $22uAH$jsx)("tr", {
                                    children: /*#__PURE__*/ (0, $22uAH$jsx)("td", {
                                        style: {
                                            height: `${paddingTop}px`
                                        }
                                    })
                                }),
                                virtualRows.map((virtualRow)=>{
                                    const row = rows[virtualRow.index];
                                    return /*#__PURE__*/ (0, $22uAH$jsx)("tr", {
                                        children: row.getVisibleCells().map((cell)=>{
                                            return /*#__PURE__*/ (0, $22uAH$jsx)("td", {
                                                children: (0, $22uAH$flexRender)(cell.column.columnDef.cell, cell.getContext())
                                            }, cell.id);
                                        })
                                    }, row.id);
                                }),
                                paddingBottom > 0 && /*#__PURE__*/ (0, $22uAH$jsx)("tr", {
                                    children: /*#__PURE__*/ (0, $22uAH$jsx)("td", {
                                        style: {
                                            height: `${paddingBottom}px`
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const $c69644d142ab8868$var$SortableLink = (0, $22uAH$styledcomponents).a.withConfig({
    displayName: "table__SortableLink",
    componentId: "sc-nx3oh3-3"
})([
    "display:inline-flex;gap:0.25rem;align-items:center;transition:opacity 0.16s ease-in-out;&,&:visited{color:inherit;text-decoration:none;}&:hover{opacity:0.8;}svg{flex-shrink:0;}"
]);
function $c69644d142ab8868$var$SortableTh(props) {
    const { children: children , isSortable: isSortable , sortDirection: sortDirection , onSortClick: onSortClick  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)("div", {
        className: "th-inner",
        children: isSortable ? /*#__PURE__*/ (0, $22uAH$jsxs)($c69644d142ab8868$var$SortableLink, {
            href: "#",
            onClick: (e)=>{
                e.preventDefault();
                onSortClick?.(e);
            },
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                    children: children
                }),
                sortDirection === "asc" && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonSortAsc), {
                    meaningful: true,
                    title: "Sorted in ascending order"
                }),
                sortDirection === "desc" && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonSortDesc), {
                    meaningful: true,
                    title: "Sorted in descending order"
                }),
                !sortDirection && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonSortNone), {
                    meaningful: true,
                    title: `Sort the rows with this column's value`
                })
            ]
        }) : children
    });
}

});
parcelRequire.register("5X3wD", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0a67331abc53018f$export$2e2bcd8739ae039; });




const $0a67331abc53018f$var$useFileLoader = (fileName, excelOption)=>{
    const [data, setData] = (0, $22uAH$useState)([]);
    const [dataLoading, setLoading] = (0, $22uAH$useState)(false);
    const [dataError, setError] = (0, $22uAH$useState)(false);
    (0, $22uAH$useEffect)(()=>{
        const controller = new AbortController();
        const { signal: signal  } = controller;
        const loadData = async ()=>{
            setLoading(true);
            try {
                // eslint-disable-next-line fp/no-mutating-methods
                const extension = fileName.split(".").pop()?.toLowerCase();
                switch(extension){
                    case "xlsx":
                    case "xls":
                        {
                            const { read: read , utils: utils  } = await $0a67331abc53018f$importAsync$6764d1d18369f841;
                            const f = await (await (0, $22uAH$axios).get(fileName, {
                                responseType: "blob",
                                signal: signal
                            }).then((response)=>response.data)).arrayBuffer();
                            const wb = read(f); // parse the array buffer
                            const sheetNumber = excelOption?.sheetNumber ?? 0;
                            const ws = wb.Sheets[wb.SheetNames[sheetNumber]]; // get the first sheet by default
                            const data = utils.sheet_to_json(ws, excelOption?.parseOption); // generate objects
                            setData(data);
                            setLoading(false);
                            break;
                        }
                    case "json":
                        {
                            const { data: data1  } = await (0, $22uAH$axios).get(fileName, {
                                signal: signal
                            });
                            setData(data1);
                            setLoading(false);
                            break;
                        }
                    case "csv":
                        {
                            const { csvParse: csvParse  } = await $0a67331abc53018f$importAsync$90052cc799db765;
                            const { data: data2  } = await (0, $22uAH$axios).get(fileName, {
                                responseType: "blob",
                                signal: signal
                            });
                            const csvData = await data2.text().then((csvStr)=>csvParse(csvStr));
                            setData(csvData);
                            setLoading(false);
                            break;
                        }
                    default:
                        throw new Error("Unsupported file extension.");
                }
            } catch (error) {
                setData([]);
                setLoading(false);
                setError(true);
            }
        };
        loadData();
        return ()=>{
            controller.abort();
        };
    }, [
        fileName,
        excelOption
    ]);
    return {
        data: data,
        dataLoading: dataLoading,
        dataError: dataError
    };
};
var $0a67331abc53018f$export$2e2bcd8739ae039 = $0a67331abc53018f$var$useFileLoader;

});


parcelRequire.register("1L02j", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $147a3570d179c944$export$2e2bcd8739ae039; });






const $147a3570d179c944$export$bca462e8cab764a5 = (0, $22uAH$styledcomponents).figure.withConfig({
    displayName: "compare__MediaCompare",
    componentId: "sc-91q9ks-0"
})([
    "> div{> div:nth-child(3) > div:nth-child(2){background-color:",
    ";width:3rem;height:3rem;}> div:nth-child(4) > div:nth-child(1),> div:nth-child(5) > div:nth-child(1){border-radius:",
    ";}}> *:not(:last-child){margin-bottom:",
    ";}"
], (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$glsp)());
function $147a3570d179c944$var$CompareImage({ leftImageSrc: leftImageSrc , leftImageAlt: leftImageAlt , leftImageLabel: leftImageLabel , rightImageSrc: rightImageSrc , rightImageAlt: rightImageAlt , rightImageLabel: rightImageLabel  }) {
    return /*#__PURE__*/ (0, $22uAH$jsx)($147a3570d179c944$export$bca462e8cab764a5, {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$reactcompareimage), {
            leftImage: leftImageSrc,
            leftImageAlt: leftImageAlt,
            leftImageLabel: leftImageLabel,
            rightImage: rightImageSrc,
            rightImageAlt: rightImageAlt,
            rightImageLabel: rightImageLabel
        })
    });
}
$147a3570d179c944$var$CompareImage.propTypes = {
    leftImageSrc: (0, $22uAH$proptypes).string.isRequired,
    leftImageAlt: (0, $22uAH$proptypes).string.isRequired,
    leftImageLabel: (0, $22uAH$proptypes).string,
    rightImageSrc: (0, $22uAH$proptypes).string.isRequired,
    rightImageAlt: (0, $22uAH$proptypes).string.isRequired,
    rightImageLabel: (0, $22uAH$proptypes).string
};
var $147a3570d179c944$export$2e2bcd8739ae039 = $147a3570d179c944$var$CompareImage;

});

parcelRequire.register("7PPHS", function(module, exports) {

$parcel$export(module.exports, "mapHeight", function () { return $b66d5fef9b28474e$export$8720b89de91594a7; });
$parcel$export(module.exports, "default", function () { return $b66d5fef9b28474e$export$2e2bcd8739ae039; });




var $jfO2i = parcelRequire("jfO2i");

var $8mxqI = parcelRequire("8mxqI");

var $39A0N = parcelRequire("39A0N");

var $EAuO5 = parcelRequire("EAuO5");

var $9gKLh = parcelRequire("9gKLh");
const $b66d5fef9b28474e$export$8720b89de91594a7 = "32rem";
const $b66d5fef9b28474e$var$Carto = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "block-map__Carto",
    componentId: "sc-15bhonk-0"
})([
    "position:relative;flex-grow:1;height:",
    ";",
    "{position:absolute;inset:0;}"
], $b66d5fef9b28474e$export$8720b89de91594a7, (0, $39A0N.default)); // This global variable is used to give unique ID to mapbox container
let $b66d5fef9b28474e$var$mapInstanceId = 0;
const $b66d5fef9b28474e$var$lngValidator = (0, $EAuO5.validateRangeNum)(-180, 180);
const $b66d5fef9b28474e$var$latValidator = (0, $EAuO5.validateRangeNum)(-90, 90);
function $b66d5fef9b28474e$var$validateBlockProps(props) {
    const { dateTime: dateTime , compareDateTime: compareDateTime , center: center , zoom: zoom , projectionId: projectionId , projectionCenter: projectionCenter , projectionParallels: projectionParallels  } = props;
    const requiredProperties = [
        "datasetId",
        "layerId",
        "dateTime"
    ];
    const missingMapProps = requiredProperties.filter((p)=>props[p] === undefined);
    const missingError = !!missingMapProps.length && `- Missing some properties: ${missingMapProps.map((p)=>`[${p}]`).join(", ")}`;
    const dateError = dateTime && isNaN((0, $8mxqI.utcString2userTzDate)(dateTime).getTime()) && "- Invalid dateTime. Use YYYY-MM-DD format"; // center is not required, but if provided must be in the correct range.
    const centerError = center && (!$b66d5fef9b28474e$var$lngValidator(center[0]) || !$b66d5fef9b28474e$var$latValidator(center[1])) && "- Invalid center. Use [longitude, latitude]."; // zoom is not required, but if provided must be in the correct range.
    const zoomError = zoom && (isNaN(zoom) || zoom < 0);
    "- Invalid zoom. Use number greater than 0";
    const compareDateError = compareDateTime && isNaN((0, $8mxqI.utcString2userTzDate)(compareDateTime).getTime()) && "- Invalid compareDateTime. Use YYYY-MM-DD format";
    const projectionErrors = (0, $jfO2i.validateProjectionBlockProps)({
        id: projectionId,
        center: projectionCenter,
        parallels: projectionParallels
    });
    return [
        missingError,
        dateError,
        zoomError,
        centerError,
        compareDateError,
        ...projectionErrors
    ].filter(Boolean);
}
function $b66d5fef9b28474e$var$MapBlock(props) {
    const generatedId = (0, $22uAH$useMemo)(()=>`map-${++$b66d5fef9b28474e$var$mapInstanceId}`, []);
    const { datasetId: datasetId , layerId: layerId , dateTime: dateTime , compareDateTime: compareDateTime , compareLabel: compareLabel , center: center , zoom: zoom , projectionId: projectionId , projectionCenter: projectionCenter , projectionParallels: projectionParallels , allowProjectionChange: allowProjectionChange , basemapId: basemapId  } = props;
    const errors = $b66d5fef9b28474e$var$validateBlockProps(props);
    if (errors.length) throw new (0, $9gKLh.HintedError)("Malformed Map Block", errors);
    const selectedDatetime = dateTime ? (0, $8mxqI.utcString2userTzDate)(dateTime) : undefined;
    const selectedCompareDatetime = compareDateTime ? (0, $8mxqI.utcString2userTzDate)(compareDateTime) : undefined;
    const projectionStart = (0, $22uAH$useMemo)(()=>{
        if (projectionId) {
            // Ensure that the default center and parallels are used if none are
            // provided.
            const projection = (0, $jfO2i.convertProjectionToMapbox)({
                id: projectionId,
                center: projectionCenter,
                parallels: projectionParallels
            });
            return {
                ...projection,
                id: projectionId
            };
        } else return 0, $jfO2i.projectionDefault;
    }, [
        projectionId,
        projectionCenter,
        projectionParallels
    ]);
    const [projection, setProjection] = (0, $22uAH$useState)(projectionStart);
    (0, $22uAH$useEffect)(()=>{
        setProjection(projectionStart);
    }, [
        projectionStart
    ]);
    const [mapBasemapId, setMapBasemapId] = (0, $22uAH$useState)(basemapId);
    (0, $22uAH$useEffect)(()=>{
        if (!basemapId) return;
        setMapBasemapId(basemapId);
    }, [
        basemapId
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsx)($b66d5fef9b28474e$var$Carto, {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $39A0N.default), {
            id: generatedId,
            datasetId: datasetId,
            layerId: layerId,
            date: selectedDatetime,
            isComparing: !!selectedCompareDatetime,
            compareDate: selectedCompareDatetime,
            compareLabel: compareLabel,
            initialPosition: center ? {
                lng: center[0],
                lat: center[1],
                zoom: zoom
            } : undefined,
            cooperativeGestures: true,
            projection: projection,
            onProjectionChange: allowProjectionChange ? setProjection : undefined,
            basemapStyleId: mapBasemapId,
            onBasemapStyleIdChange: setMapBasemapId,
            withScale: true
        })
    });
}
var $b66d5fef9b28474e$export$2e2bcd8739ae039 = $b66d5fef9b28474e$var$MapBlock;

});
parcelRequire.register("39A0N", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $06163582b698b2b3$export$2e2bcd8739ae039; });










var $fxYOA = parcelRequire("fxYOA");

var $l6jqT = parcelRequire("l6jqT");

var $bluRW = parcelRequire("bluRW");

var $8r9VA = parcelRequire("8r9VA");

var $ahS4d = parcelRequire("ahS4d");

var $2INTM = parcelRequire("2INTM");

var $4AHLW = parcelRequire("4AHLW");

var $hCtDW = parcelRequire("hCtDW");

var $aP7Oo = parcelRequire("aP7Oo");

var $4FnrG = parcelRequire("4FnrG");

var $j7cxl = parcelRequire("j7cxl");

var $978L3 = parcelRequire("978L3");

var $4dbig = parcelRequire("4dbig");
const $06163582b698b2b3$var$chevronRightURI = ()=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonChevronRightSmall), {
        color: "white"
    });
const $06163582b698b2b3$var$chevronLeftURI = ()=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonChevronLeftSmall), {
        color: "white"
    });
const $06163582b698b2b3$var$MapsContainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "mapbox__MapsContainer",
    componentId: "sc-1ig75qf-0"
})([
    "position:relative;.mapboxgl-compare .compare-swiper-vertical{background:",
    ";display:flex;align-items:center;justify-content:center;&::before,&::after{display:inline-block;content:'';background-repeat:no-repeat;background-size:1rem 1rem;width:1rem;height:1rem;}&::before{background-image:url('",
    "');}&::after{background-image:url('",
    "');}}"
], (0, $22uAH$themeVal)("color.primary"), $06163582b698b2b3$var$chevronLeftURI(), $06163582b698b2b3$var$chevronRightURI());
const $06163582b698b2b3$var$mapOptions = {
    style: (0, $2INTM.DEFAULT_MAP_STYLE_URL),
    logoPosition: "bottom-left",
    trackResize: true,
    pitchWithRotate: false,
    dragRotate: false,
    zoom: 1
};
const $06163582b698b2b3$var$getMapPositionOptions = (position)=>{
    const opts = {};
    if (position?.lng !== undefined && position?.lat !== undefined) opts.center = [
        position.lng,
        position.lat
    ];
    if (position?.zoom) opts.zoom = position.zoom;
    return opts;
};
function $06163582b698b2b3$var$MapboxMapComponent(props, ref) {
    /* eslint-disable react/prop-types */ const { className: className , id: id , as: as , datasetId: datasetId , layerId: layerId , date: date , compareDate: compareDate , compareLabel: compareLabel , isComparing: isComparing , cooperativeGestures: cooperativeGestures , onPositionChange: onPositionChange , initialPosition: initialPosition , withGeocoder: withGeocoder , withScale: withScale , aoi: aoi , onAoiChange: onAoiChange , projection: projection , onProjectionChange: onProjectionChange , basemapStyleId: basemapStyleId , onBasemapStyleIdChange: onBasemapStyleIdChange , isDatasetLayerHidden: isDatasetLayerHidden , onStyleChange: onStyleChange  } = props;
    /* eslint-enable react/prop-types */ const mapContainer = (0, $22uAH$useRef)(null);
    const mapRef = (0, $22uAH$useRef)(null);
    const mapCompareContainer = (0, $22uAH$useRef)(null);
    const mapCompareRef = (0, $22uAH$useRef)(null);
    const [isMapLoaded, setMapLoaded] = (0, $22uAH$useState)(false);
    const [isMapCompareLoaded, setMapCompareLoaded] = (0, $22uAH$useState)(false);
    const { labelsOption: labelsOption , boundariesOption: boundariesOption , onOptionChange: onOptionChange  } = (0, $ahS4d.useBasemap)(); // This baseLayerStatus is for BaseLayerComponent
    // ex. RasterTimeSeries uses this variable to track the status of
    // registering mosaic.
    const [baseLayerStatus, setBaseLayerStatus] = (0, $22uAH$useState)((0, $978L3.S_IDLE));
    const onBaseLayerStatusChange = (0, $22uAH$useCallback)(({ status: status  })=>setBaseLayerStatus(status), []);
    const [compareLayerStatus, setCompareLayerStatus] = (0, $22uAH$useState)((0, $978L3.S_IDLE));
    const onCompareLayerStatusChange = (0, $22uAH$useCallback)((status)=>setCompareLayerStatus(status), []); // Add ref control operations to allow map to be controlled by the parent.
    (0, $22uAH$useImperativeHandle)(ref, ()=>({
            resize: ()=>{
                mapRef.current?.resize();
                mapCompareRef.current?.resize();
            },
            instance: mapRef.current,
            compareInstance: mapCompareRef.current
        }));
    const { baseLayer: baseLayer , compareLayer: compareLayer  } = (0, $j7cxl.useDatasetAsyncLayer)(datasetId, layerId);
    const shouldRenderCompare = isMapLoaded && isComparing; // Compare control
    (0, $22uAH$useEffect)(()=>{
        if (!isMapLoaded || !isComparing || !isMapCompareLoaded) return;
        const compareControl = new (0, $22uAH$mapboxglcompare)(mapRef.current, mapCompareRef.current, `#${id ?? "mapbox-container"}`, {
            mousemove: false,
            orientation: "vertical"
        });
        return ()=>{
            compareControl.remove();
        };
    }, [
        id,
        isComparing,
        isMapCompareLoaded,
        isMapLoaded
    ]); // Some properties defined in the dataset layer config may be functions that
    // need to be resolved before rendering them. These functions accept data to
    // return the correct value.
    const resolverBag = (0, $22uAH$useMemo)(()=>({
            datetime: date,
            compareDatetime: compareDate,
            dateFns: $22uAH$datefns
        }), [
        date,
        compareDate
    ]); // Resolve data needed for the base layer once the layer is loaded
    const [baseLayerResolvedData, BaseLayerComponent] = (0, $22uAH$useMemo)(()=>{
        if (baseLayer?.status !== (0, $978L3.S_SUCCEEDED) || !baseLayer.data) return [
            null,
            null
        ]; // Include access to raw data.
        const bag = {
            ...resolverBag,
            raw: baseLayer.data
        };
        const data = (0, $fxYOA.resolveConfigFunctions)(baseLayer.data, bag);
        return [
            data,
            (0, $fxYOA.getLayerComponent)(!!data.timeseries, data.type)
        ];
    }, [
        baseLayer,
        resolverBag
    ]); // Resolve data needed for the compare layer once it is loaded.
    const [compareLayerResolvedData, CompareLayerComponent] = (0, $22uAH$useMemo)(()=>{
        if (compareLayer?.status !== (0, $978L3.S_SUCCEEDED) || !compareLayer.data) return [
            null,
            null
        ]; // Include access to raw data.
        const bag = {
            ...resolverBag,
            raw: compareLayer.data
        };
        const data = (0, $fxYOA.resolveConfigFunctions)(compareLayer.data, bag);
        return [
            data,
            (0, $fxYOA.getLayerComponent)(!!data.timeseries, data.type)
        ];
    }, [
        compareLayer,
        resolverBag
    ]); // Get the compare to date.
    // The compare date is specified by the user.
    // If no date is specified anywhere we just use the same.
    const compareToDate = (0, $22uAH$useMemo)(()=>{
        const theDate = compareDate ?? date;
        return theDate instanceof Date && !isNaN(theDate.getTime()) ? theDate : null;
    }, [
        compareDate,
        date
    ]);
    const baseTimeDensity = baseLayerResolvedData?.timeseries.timeDensity;
    const compareTimeDensity = compareLayerResolvedData?.timeseries.timeDensity;
    const computedCompareLabel = (0, $22uAH$useMemo)(()=>{
        // Use a provided label if it exist.
        const providedLabel = compareLabel ?? compareLayerResolvedData?.mapLabel;
        if (providedLabel) return providedLabel; // Default to date comparison.
        return date && compareToDate ? (0, $aP7Oo.formatCompareDate)(date, compareToDate, baseTimeDensity, compareTimeDensity) : null;
    }, [
        compareLabel,
        compareLayerResolvedData?.mapLabel,
        date,
        compareToDate,
        baseTimeDensity,
        compareTimeDensity
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            baseLayerStatus === (0, $978L3.S_LOADING) && /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.MapLoading), {
                position: shouldRenderCompare ? "left" : "center"
            }),
            shouldRenderCompare && compareLayerStatus === (0, $978L3.S_LOADING) && /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.MapLoading), {
                position: "right"
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bluRW.default), {
                id: "mosaic-base-fail-message",
                active: baseLayerStatus === (0, $978L3.S_FAILED),
                position: shouldRenderCompare ? "left" : "center",
                isInvalid: true,
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCircleXmark), {}),
                    " Failed to load layer ",
                    baseLayer?.data?.id
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bluRW.default), {
                id: "mosaic-compare-fail-message",
                active: compareLayerStatus === (0, $978L3.S_FAILED),
                position: "right",
                isInvalid: true,
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCircleXmark), {}),
                    " Failed to load compare layer",
                    " ",
                    compareLayer?.data?.id
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bluRW.default), {
                id: "single-map-message",
                active: !!(!shouldRenderCompare && date && baseLayerResolvedData && baseLayerStatus !== (0, $978L3.S_FAILED)),
                children: date && (0, $aP7Oo.formatSingleDate)(date, baseLayerResolvedData?.timeseries.timeDensity)
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bluRW.default), {
                id: "compare-message",
                active: !!(shouldRenderCompare && compareLayerResolvedData && compareLayerStatus !== (0, $978L3.S_FAILED)),
                children: computedCompareLabel
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bluRW.default), {
                id: "aoi-status",
                active: !!aoi,
                children: /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                    children: aoi?.drawing ? "Drawing area shape" : !aoi?.featureCollection?.features.length ? "No area defined" : /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
                        children: [
                            (0, $4dbig.calcFeatCollArea)(aoi.featureCollection),
                            " km",
                            /*#__PURE__*/ (0, $22uAH$jsx)("sup", {
                                children: "2"
                            }),
                            " area"
                        ]
                    })
                })
            }),
            baseLayerResolvedData?.legend && /*#__PURE__*/ (0, $22uAH$jsxs)((0, $8r9VA.LayerLegendContainer), {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $8r9VA.LayerLegend), {
                        id: `base-${baseLayerResolvedData.id}`,
                        title: baseLayerResolvedData.name,
                        description: baseLayerResolvedData.description,
                        ...baseLayerResolvedData.legend
                    }),
                    compareLayerResolvedData?.legend && isComparing && baseLayerResolvedData.id !== compareLayerResolvedData.id && /*#__PURE__*/ (0, $22uAH$jsx)((0, $8r9VA.LayerLegend), {
                        id: `compare-${compareLayerResolvedData.id}`,
                        title: compareLayerResolvedData.name,
                        description: compareLayerResolvedData.description,
                        ...compareLayerResolvedData.legend
                    })
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)($06163582b698b2b3$var$MapsContainer, {
                as: as,
                className: className,
                id: id ?? "mapbox-container",
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $4AHLW.Styles), {
                        onStyleUpdate: onStyleChange,
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $hCtDW.Basemap), {
                                basemapStyleId: basemapStyleId,
                                labelsOption: labelsOption,
                                boundariesOption: boundariesOption
                            }),
                            mapRef.current && isMapLoaded && baseLayerResolvedData && BaseLayerComponent && /*#__PURE__*/ (0, $22uAH$jsx)(BaseLayerComponent, {
                                id: `base-${baseLayerResolvedData.id}`,
                                stacApiEndpoint: baseLayerResolvedData.stacApiEndpoint,
                                tileApiEndpoint: baseLayerResolvedData.tileApiEndpoint,
                                assetUrlReplacements: baseLayerResolvedData.assetUrlReplacements,
                                stacCol: baseLayerResolvedData.stacCol,
                                mapInstance: mapRef.current,
                                isPositionSet: !!initialPosition,
                                date: date,
                                sourceParams: baseLayerResolvedData.sourceParams,
                                zoomExtent: baseLayerResolvedData.zoomExtent,
                                bounds: baseLayerResolvedData.bounds,
                                onStatusChange: onBaseLayerStatusChange,
                                isHidden: isDatasetLayerHidden
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $l6jqT.SimpleMap), {
                                className: "root",
                                mapRef: mapRef,
                                containerRef: mapContainer,
                                onLoad: ()=>setMapLoaded(true),
                                onMoveEnd: onPositionChange,
                                mapOptions: {
                                    ...$06163582b698b2b3$var$mapOptions,
                                    ...$06163582b698b2b3$var$getMapPositionOptions(initialPosition),
                                    cooperativeGestures: cooperativeGestures
                                },
                                withGeocoder: withGeocoder,
                                withScale: withScale,
                                aoi: aoi,
                                onAoiChange: onAoiChange,
                                projection: projection,
                                onProjectionChange: onProjectionChange,
                                basemapStyleId: basemapStyleId,
                                onBasemapStyleIdChange: onBasemapStyleIdChange,
                                labelsOption: labelsOption,
                                boundariesOption: boundariesOption,
                                onOptionChange: onOptionChange
                            })
                        ]
                    }),
                    shouldRenderCompare && /*#__PURE__*/ (0, $22uAH$jsxs)((0, $4AHLW.Styles), {
                        onStyleUpdate: onStyleChange,
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $hCtDW.Basemap), {
                                basemapStyleId: basemapStyleId,
                                labelsOption: labelsOption,
                                boundariesOption: boundariesOption
                            }),
                            mapCompareRef.current && isMapCompareLoaded && compareLayerResolvedData && CompareLayerComponent && /*#__PURE__*/ (0, $22uAH$jsx)(CompareLayerComponent, {
                                id: `compare-${compareLayerResolvedData.id}`,
                                stacCol: compareLayerResolvedData.stacCol,
                                stacApiEndpoint: compareLayerResolvedData.stacApiEndpoint,
                                tileApiEndpoint: compareLayerResolvedData.tileApiEndpoint,
                                mapInstance: mapCompareRef.current,
                                isPositionSet: !!initialPosition,
                                date: compareToDate ?? undefined,
                                sourceParams: compareLayerResolvedData.sourceParams,
                                zoomExtent: compareLayerResolvedData.zoomExtent,
                                bounds: compareLayerResolvedData.bounds,
                                onStatusChange: onCompareLayerStatusChange,
                                idSuffix: "compare-suffix"
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $l6jqT.SimpleMap), {
                                mapRef: mapCompareRef,
                                containerRef: mapCompareContainer,
                                onLoad: ()=>setMapCompareLoaded(true),
                                onUnmount: ()=>setMapCompareLoaded(false),
                                mapOptions: {
                                    ...$06163582b698b2b3$var$mapOptions,
                                    cooperativeGestures: cooperativeGestures,
                                    center: mapRef.current?.getCenter(),
                                    zoom: mapRef.current?.getZoom()
                                },
                                withGeocoder: withGeocoder,
                                withScale: withScale,
                                aoi: aoi,
                                onAoiChange: onAoiChange,
                                projection: projection,
                                onProjectionChange: onProjectionChange,
                                basemapStyleId: basemapStyleId,
                                onBasemapStyleIdChange: onBasemapStyleIdChange,
                                labelsOption: labelsOption,
                                boundariesOption: boundariesOption,
                                onOptionChange: onOptionChange
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
const $06163582b698b2b3$var$MapboxMapComponentFwd = /*#__PURE__*/ (0, $22uAH$forwardRef)($06163582b698b2b3$var$MapboxMapComponent);
var /**
 * Mapbox map component
 *
 * @param {string} id Id to apply to the map wrapper.
 *    Defaults to mapbox-container
 * @param {string} className Css class for styling
 */ $06163582b698b2b3$export$2e2bcd8739ae039 = (0, $22uAH$styledcomponents)($06163582b698b2b3$var$MapboxMapComponentFwd).withConfig({
    displayName: "mapbox",
    componentId: "sc-1ig75qf-1"
})([
    ""
]);

});
parcelRequire.register("fxYOA", function(module, exports) {

$parcel$export(module.exports, "getLayerComponent", function () { return $36e9b014215bd9b1$export$226b36f2611276c2; });
$parcel$export(module.exports, "getCompareLayerData", function () { return $36e9b014215bd9b1$export$2bb39c4fdee4a74a; });
$parcel$export(module.exports, "resolveConfigFunctions", function () { return $36e9b014215bd9b1$export$6f66c71903a43277; });
$parcel$export(module.exports, "requestQuickCache", function () { return $36e9b014215bd9b1$export$c3dc98f0c2b33757; });
$parcel$export(module.exports, "getFilterPayload", function () { return $36e9b014215bd9b1$export$e4e9d10260c7d150; });
$parcel$export(module.exports, "getMergedBBox", function () { return $36e9b014215bd9b1$export$9ae17ff05029d56a; });
$parcel$export(module.exports, "FIT_BOUNDS_PADDING", function () { return $36e9b014215bd9b1$export$c7c74247e5542f4d; });
$parcel$export(module.exports, "useLayerInteraction", function () { return $36e9b014215bd9b1$export$dc5f3e3e278df99; });
$parcel$export(module.exports, "useFitBbox", function () { return $36e9b014215bd9b1$export$6a5876fe2ac10d52; });






var $etfqO = parcelRequire("etfqO");

var $7Qblt = parcelRequire("7Qblt");

var $Y0LZW = parcelRequire("Y0LZW");

var $60Dcw = parcelRequire("60Dcw");

var $6V32m = parcelRequire("6V32m");

var $8mxqI = parcelRequire("8mxqI");

var $978L3 = parcelRequire("978L3");

var $9gKLh = parcelRequire("9gKLh");
const $36e9b014215bd9b1$export$226b36f2611276c2 = (isTimeseries, layerType)=>{
    if (isTimeseries) {
        if (layerType === "raster") return 0, $7Qblt.MapLayerRasterTimeseries;
        if (layerType === "vector") return 0, $Y0LZW.MapLayerVectorTimeseries;
        if (layerType === "zarr") return 0, $60Dcw.MapLayerZarrTimeseries;
        if (layerType === "cmr") return 0, $6V32m.MapLayerCMRTimeseries;
    }
    return null;
};
const $36e9b014215bd9b1$export$2bb39c4fdee4a74a = (layerData)=>{
    if (!layerData?.compare) return null;
    const { compare: compare  } = layerData;
    /* eslint-disable-next-line prettier/prettier */ const compareInternal = compare;
    const compareSTAC = compare; // If the stacCol property exists it is a layer to be loaded from STAC. In the
    // case of a STAC layer defined inline the missing properties are inherited
    // from the parent layer.
    if (compareSTAC.stacCol) {
        // Extract properties that need special handling, letting the other ones
        // through.
        const { stacCol: stacCol , type: type , zoomExtent: zoomExtent , sourceParams: sourceParams , ...passThroughProps } = compareSTAC;
        return {
            id: stacCol,
            stacCol: stacCol,
            type: type || layerData.type,
            zoomExtent: zoomExtent ?? layerData.zoomExtent,
            sourceParams: (0, $22uAH$defaultsDeep)({}, sourceParams, layerData.sourceParams),
            ...passThroughProps
        };
    } // When we're comparing against a layer from another dataset, that layer's
    // properties are overridden with the ones provided in the compare object.
    if (compareInternal.layerId) {
        // Extract properties that need special handling, letting the other ones
        // through.
        const { datasetId: datasetId , layerId: layerId , zoomExtent: zoomExtent1 , sourceParams: sourceParams1 , ...passThroughProps1 } = compareInternal;
        const errorHints = [];
        const datasetData = (0, $etfqO.datasets)[datasetId]?.data;
        if (!datasetData) // eslint-disable-next-line fp/no-mutating-methods
        errorHints.push(`Dataset [${datasetId}] not found (compare.datasetId)`);
        const otherLayer = datasetData?.layers.find((l)=>l.id === layerId);
        if (!otherLayer) // eslint-disable-next-line fp/no-mutating-methods
        errorHints.push(`Layer [${layerId}] not found in dataset [${datasetId}] (compare.layerId)`);
        if (!datasetData || !otherLayer) throw new (0, $9gKLh.HintedError)(`Malformed compare for layer: ${layerData.id}`, errorHints);
        return {
            id: otherLayer.id,
            type: otherLayer.type,
            name: otherLayer.name,
            description: otherLayer.description,
            legend: otherLayer.legend,
            stacApiEndpoint: otherLayer.stacApiEndpoint,
            tileApiEndpoint: otherLayer.tileApiEndpoint,
            stacCol: otherLayer.stacCol,
            zoomExtent: zoomExtent1 ?? otherLayer.zoomExtent,
            sourceParams: (0, $22uAH$defaultsDeep)({}, sourceParams1, otherLayer.sourceParams),
            ...passThroughProps1
        };
    }
    throw new Error("Layer specified in compare was not found.");
};
function $36e9b014215bd9b1$export$6f66c71903a43277(datum, bag) {
    if (Array.isArray(datum)) return datum.map((v)=>$36e9b014215bd9b1$export$6f66c71903a43277(v, bag));
    if (datum != null && typeof datum === "object") {
        // Use for loop instead of reduce as it faster.
        const ready = {};
        for (const [k, v] of Object.entries(datum))ready[k] = $36e9b014215bd9b1$export$6f66c71903a43277(v, bag);
        return ready;
    }
    if (typeof datum === "function") try {
        return datum(bag);
    } catch (error) {
        /* eslint-disable-next-line no-console */ console.error("Failed to resolve function %s(%o) with error %s", datum.name, bag, error.message);
        return null;
    }
    return datum;
}
function $36e9b014215bd9b1$export$1927e60222bc3339(asyncLayer) {
    const { baseLayer: baseLayer , compareLayer: compareLayer  } = asyncLayer;
    if (baseLayer.status === (0, $978L3.S_SUCCEEDED) && (!compareLayer || compareLayer.status === (0, $978L3.S_SUCCEEDED))) return 0, $978L3.S_SUCCEEDED;
    if (baseLayer.status === (0, $978L3.S_LOADING) || compareLayer && compareLayer.status === (0, $978L3.S_LOADING)) return 0, $978L3.S_LOADING;
    if (baseLayer.status === (0, $978L3.S_FAILED) || compareLayer && compareLayer.status === (0, $978L3.S_FAILED)) return 0, $978L3.S_FAILED;
    return 0, $978L3.S_IDLE;
}
function $36e9b014215bd9b1$export$3192ffac2c9c4f49(layerData) {
    if (!layerData?.timeseries) return null;
    const { domain: domain , isPeriodic: isPeriodic , timeDensity: timeDensity  } = layerData.timeseries;
    if (!isPeriodic) return domain.map((d)=>(0, $8mxqI.utcString2userTzDate)(d));
    if (timeDensity === "year") return (0, $22uAH$eachYearOfInterval)({
        start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
        end: (0, $8mxqI.utcString2userTzDate)(domain.last)
    });
    else if (timeDensity === "month") return (0, $22uAH$eachMonthOfInterval)({
        start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
        end: (0, $8mxqI.utcString2userTzDate)(domain.last)
    });
    else if (timeDensity === "day") return (0, $22uAH$eachDayOfInterval)({
        start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
        end: (0, $8mxqI.utcString2userTzDate)(domain.last)
    });
    throw new Error(`Invalid time density [${timeDensity}] on layer [${layerData.id}]`);
} // There are cases when the data can't be displayed properly on low zoom levels.
// In these cases instead of displaying the raster tiles, we display markers to
// indicate whether or not there is data in a given location. When the user
// crosses the marker threshold, if below the min zoom we have to request the
// marker position, and if above we have to register a mosaic query. Since this
// switching can happen several times, we cache the api response using the
// request params as key.
const $36e9b014215bd9b1$var$quickCache = new Map();
async function $36e9b014215bd9b1$export$c3dc98f0c2b33757({ url: url , payload: payload , controller: controller , method: method = "post"  }) {
    const key = `${method}:${url}${JSON.stringify(payload)}`; // No cache found, make request.
    if (!$36e9b014215bd9b1$var$quickCache.has(key)) {
        const response = await (0, $22uAH$axios)({
            url: url,
            method: method,
            data: payload,
            signal: controller.signal
        });
        $36e9b014215bd9b1$var$quickCache.set(key, response.data);
    }
    return $36e9b014215bd9b1$var$quickCache.get(key);
}
function $36e9b014215bd9b1$export$e4e9d10260c7d150(date, collection) {
    return {
        op: "and",
        args: [
            {
                op: ">=",
                args: [
                    {
                        property: "datetime"
                    },
                    (0, $8mxqI.userTzDate2utcString)((0, $22uAH$startOfDay)(date))
                ]
            },
            {
                op: "<=",
                args: [
                    {
                        property: "datetime"
                    },
                    (0, $8mxqI.userTzDate2utcString)((0, $22uAH$endOfDay)(date))
                ]
            },
            {
                op: "eq",
                args: [
                    {
                        property: "collection"
                    },
                    collection
                ]
            }
        ]
    };
}
function $36e9b014215bd9b1$export$9ae17ff05029d56a(features) {
    const mergedBBox = [
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY
    ];
    return features.reduce((acc, feature)=>[
            feature.bbox[0] < acc[0] ? feature.bbox[0] : acc[0],
            feature.bbox[1] < acc[1] ? feature.bbox[1] : acc[1],
            feature.bbox[2] > acc[2] ? feature.bbox[2] : acc[2],
            feature.bbox[3] > acc[3] ? feature.bbox[3] : acc[3]
        ], mergedBBox);
}
const $36e9b014215bd9b1$export$c7c74247e5542f4d = 32;
function $36e9b014215bd9b1$export$dc5f3e3e278df99({ layerId: layerId , mapInstance: mapInstance , onClick: onClick  }) {
    (0, $22uAH$useEffect)(()=>{
        const onPointsClick = (e)=>{
            if (!e.features.length) return;
            onClick(e.features);
        };
        const onPointsEnter = ()=>{
            mapInstance.getCanvas().style.cursor = "pointer";
        };
        const onPointsLeave = ()=>{
            mapInstance.getCanvas().style.cursor = "";
        };
        mapInstance.on("click", layerId, onPointsClick);
        mapInstance.on("mouseenter", layerId, onPointsEnter);
        mapInstance.on("mouseleave", layerId, onPointsLeave);
        return ()=>{
            mapInstance.off("click", layerId, onPointsClick);
            mapInstance.off("mouseenter", layerId, onPointsEnter);
            mapInstance.off("mouseleave", layerId, onPointsLeave);
        };
    }, [
        layerId,
        mapInstance,
        onClick
    ]);
}
/**
 * MapboxGL requires maxX value to be 180, minX -180, maxY 90, minY -90
 * While some of the datasets having bbox going above it.
 * @param bounds Bounding box to fit layer
 * @returns Boolean
 */ function $36e9b014215bd9b1$var$clampBbox(bounds) {
    const [minX, minY, maxX, maxY] = bounds;
    return [
        (0, $22uAH$clamp)(minX, -180, 180),
        (0, $22uAH$clamp)(minY, -90, 90),
        (0, $22uAH$clamp)(maxX, -180, 180),
        (0, $22uAH$clamp)(maxY, -90, 90)
    ];
}
function $36e9b014215bd9b1$export$6a5876fe2ac10d52(mapInstance, isUserPositionSet, initialBbox, stacBbox) {
    (0, $22uAH$useEffect)(()=>{
        if (isUserPositionSet) return; // Prefer layer defined bounds to STAC collection bounds.
        const bounds = initialBbox ?? stacBbox;
        if (bounds?.length) {
            const clampedBbox = $36e9b014215bd9b1$var$clampBbox(bounds);
            mapInstance.fitBounds(clampedBbox, {
                padding: $36e9b014215bd9b1$export$c7c74247e5542f4d
            });
        }
    }, [
        mapInstance,
        isUserPositionSet,
        initialBbox,
        stacBbox
    ]);
}

});
parcelRequire.register("7Qblt", function(module, exports) {

$parcel$export(module.exports, "MapLayerRasterTimeseries", function () { return $27283ec757ec0e04$export$33de5ec461cd82b0; });





var $4AHLW = parcelRequire("4AHLW");

var $fxYOA = parcelRequire("fxYOA");

var $cYxFp = parcelRequire("cYxFp");

var $978L3 = parcelRequire("978L3");
const $27283ec757ec0e04$var$LOG = false;
let $27283ec757ec0e04$var$STATUS_KEY;
(function(STATUS_KEY) {
    STATUS_KEY[STATUS_KEY["Global"] = 0] = "Global";
    STATUS_KEY[STATUS_KEY["Layer"] = 1] = "Layer";
    STATUS_KEY[STATUS_KEY["StacSearch"] = 2] = "StacSearch";
})($27283ec757ec0e04$var$STATUS_KEY || ($27283ec757ec0e04$var$STATUS_KEY = {}));
function $27283ec757ec0e04$export$33de5ec461cd82b0(props) {
    const { id: id , stacApiEndpoint: stacApiEndpoint , tileApiEndpoint: tileApiEndpoint , stacCol: stacCol , date: date , mapInstance: mapInstance , sourceParams: sourceParams , zoomExtent: zoomExtent , bounds: bounds , onStatusChange: onStatusChange , isHidden: isHidden , idSuffix: idSuffix = "" , isPositionSet: isPositionSet  } = props;
    const theme = (0, $22uAH$useTheme)();
    const { updateStyle: updateStyle  } = (0, $4AHLW.useMapStyle)();
    const minZoom = zoomExtent?.[0] ?? 0;
    const generatorId = "raster-timeseries" + idSuffix;
    const stacApiEndpointToUse = stacApiEndpoint ?? "https://staging-stac.delta-backend.com";
    const tileApiEndpointToUse = tileApiEndpoint ?? "https://staging-raster.delta-backend.com"; // Status tracking.
    // A raster timeseries layer has a base layer and may have markers.
    // The status is succeeded only if all requests succeed.
    const statuses = (0, $22uAH$useRef)({
        [$27283ec757ec0e04$var$STATUS_KEY.Global]: (0, $978L3.S_IDLE),
        [$27283ec757ec0e04$var$STATUS_KEY.Layer]: (0, $978L3.S_IDLE),
        [$27283ec757ec0e04$var$STATUS_KEY.StacSearch]: (0, $978L3.S_IDLE)
    });
    const changeStatus = (0, $22uAH$useCallback)(({ status: status , context: context  })=>{
        // Set the new status
        statuses.current[context] = status;
        const layersToCheck = [
            statuses.current[$27283ec757ec0e04$var$STATUS_KEY.StacSearch],
            statuses.current[$27283ec757ec0e04$var$STATUS_KEY.Layer]
        ];
        let newStatus = statuses.current[$27283ec757ec0e04$var$STATUS_KEY.Global]; // All must succeed to be considered successful.
        if (layersToCheck.every((s)=>s === (0, $978L3.S_SUCCEEDED))) newStatus = (0, $978L3.S_SUCCEEDED); // One failed status is enough for all.
        else if (layersToCheck.some((s)=>s === (0, $978L3.S_FAILED))) newStatus = (0, $978L3.S_FAILED); // One loading status is enough for all.
        else if (layersToCheck.some((s)=>s === (0, $978L3.S_LOADING))) newStatus = (0, $978L3.S_LOADING);
        else if (layersToCheck.some((s)=>s === (0, $978L3.S_IDLE))) newStatus = (0, $978L3.S_IDLE);
         // Only emit on status change.
        if (newStatus !== statuses.current[$27283ec757ec0e04$var$STATUS_KEY.Global]) {
            statuses.current[$27283ec757ec0e04$var$STATUS_KEY.Global] = newStatus;
            onStatusChange?.({
                status: newStatus,
                id: id
            });
        }
    }, [
        id,
        onStatusChange
    ]); //
    // Load stac collection features
    //
    const [stacCollection, setStacCollection] = (0, $22uAH$useState)([]);
    (0, $22uAH$useEffect)(()=>{
        if (!id || !stacCol || !date) return;
        const controller = new AbortController();
        const load = async ()=>{
            try {
                changeStatus({
                    status: (0, $978L3.S_LOADING),
                    context: $27283ec757ec0e04$var$STATUS_KEY.StacSearch
                });
                const payload = {
                    "filter-lang": "cql2-json",
                    filter: (0, $fxYOA.getFilterPayload)(date, stacCol),
                    limit: 500,
                    fields: {
                        include: [
                            "bbox"
                        ],
                        exclude: [
                            "collection",
                            "links"
                        ]
                    }
                };
                /* eslint-disable no-console */ $27283ec757ec0e04$var$LOG && console.groupCollapsed("MapLayerRasterTimeseries %cLoading STAC features", "color: orange;", id);
                $27283ec757ec0e04$var$LOG && console.log("Payload", payload);
                $27283ec757ec0e04$var$LOG && console.groupEnd();
                /* eslint-enable no-console */ const responseData = await (0, $fxYOA.requestQuickCache)({
                    url: `${stacApiEndpointToUse}/search`,
                    payload: payload,
                    controller: controller
                });
                /* eslint-disable no-console */ $27283ec757ec0e04$var$LOG && console.groupCollapsed("MapLayerRasterTimeseries %cAdding STAC features", "color: green;", id);
                $27283ec757ec0e04$var$LOG && console.log("STAC response", responseData);
                $27283ec757ec0e04$var$LOG && console.groupEnd();
                /* eslint-enable no-console */ setStacCollection(responseData.features);
                changeStatus({
                    status: (0, $978L3.S_SUCCEEDED),
                    context: $27283ec757ec0e04$var$STATUS_KEY.StacSearch
                });
            } catch (error) {
                if (!controller.signal.aborted) {
                    setStacCollection([]);
                    changeStatus({
                        status: (0, $978L3.S_FAILED),
                        context: $27283ec757ec0e04$var$STATUS_KEY.StacSearch
                    });
                }
                $27283ec757ec0e04$var$LOG && /* eslint-disable-next-line no-console */ console.log("MapLayerRasterTimeseries %cAborted STAC features", "color: red;", id);
                return;
            }
        };
        load();
        return ()=>{
            controller.abort();
            changeStatus({
                status: "idle",
                context: $27283ec757ec0e04$var$STATUS_KEY.StacSearch
            });
        };
    }, [
        id,
        changeStatus,
        stacApiEndpointToUse,
        stacCol,
        date
    ]); //
    // Markers
    //
    const points = (0, $22uAH$useMemo)(()=>{
        if (!stacCollection.length) return null;
        const points = stacCollection.map((f)=>{
            const [w, s, e, n] = f.bbox;
            return {
                bounds: [
                    [
                        w,
                        s
                    ],
                    [
                        e,
                        n
                    ]
                ],
                center: [
                    (w + e) / 2,
                    (s + n) / 2
                ]
            };
        });
        return points;
    }, [
        stacCollection
    ]); //
    // Tiles
    //
    const [mosaicUrl, setMosaicUrl] = (0, $22uAH$useState)(null);
    (0, $22uAH$useEffect)(()=>{
        if (!id || !stacCol || !date) return; // If the search returned no data, remove anything previously there so we
        // don't run the risk that the selected date and data don't match, even
        // though if a search returns no data, that date should not be available for
        // the dataset - may be a case of bad configuration.
        if (!stacCollection.length) {
            setMosaicUrl(null);
            return;
        }
        const controller = new AbortController();
        const load = async ()=>{
            changeStatus({
                status: (0, $978L3.S_LOADING),
                context: $27283ec757ec0e04$var$STATUS_KEY.Layer
            });
            try {
                const payload = {
                    "filter-lang": "cql2-json",
                    filter: (0, $fxYOA.getFilterPayload)(date, stacCol)
                };
                /* eslint-disable no-console */ $27283ec757ec0e04$var$LOG && console.groupCollapsed("MapLayerRasterTimeseries %cLoading Mosaic", "color: orange;", id);
                $27283ec757ec0e04$var$LOG && console.log("Payload", payload);
                $27283ec757ec0e04$var$LOG && console.groupEnd();
                /* eslint-enable no-console */ const responseData = await (0, $fxYOA.requestQuickCache)({
                    url: `${tileApiEndpointToUse}/mosaic/register`,
                    payload: payload,
                    controller: controller
                });
                setMosaicUrl(responseData.links[1].href);
                /* eslint-disable no-console */ $27283ec757ec0e04$var$LOG && console.groupCollapsed("MapLayerRasterTimeseries %cAdding Mosaic", "color: green;", id); // links[0] : metadata , links[1]: tile
                $27283ec757ec0e04$var$LOG && console.log("Url", responseData.links[1].href);
                $27283ec757ec0e04$var$LOG && console.log("STAC response", responseData);
                $27283ec757ec0e04$var$LOG && console.groupEnd();
                /* eslint-enable no-console */ changeStatus({
                    status: (0, $978L3.S_SUCCEEDED),
                    context: $27283ec757ec0e04$var$STATUS_KEY.Layer
                });
            } catch (error) {
                if (!controller.signal.aborted) changeStatus({
                    status: (0, $978L3.S_FAILED),
                    context: $27283ec757ec0e04$var$STATUS_KEY.Layer
                });
                $27283ec757ec0e04$var$LOG && /* eslint-disable-next-line no-console */ console.log("MapLayerRasterTimeseries %cAborted Mosaic", "color: red;", id);
                return;
            }
        };
        load();
        return ()=>{
            controller.abort();
            changeStatus({
                status: "idle",
                context: $27283ec757ec0e04$var$STATUS_KEY.Layer
            });
        };
    }, [
        // is controlled below, but we need the value to initialize the layer
        // visibility.
        stacCollection // This hook depends on a series of properties, but whenever they change the
    ]);
    const markerLayout = (0, $cYxFp.useCustomMarker)(mapInstance); //
    // Generate Mapbox GL layers and sources for raster timeseries
    //
    const haveSourceParamsChanged = (0, $22uAH$useMemo)(()=>JSON.stringify(sourceParams), [
        sourceParams
    ]);
    (0, $22uAH$useEffect)(()=>{
        const controller = new AbortController();
        async function run() {
            let layers = [];
            let sources = {};
            if (mosaicUrl) {
                const tileParams = (0, $22uAH$qs).stringify({
                    assets: "cog_default",
                    ...sourceParams
                }, {
                    arrayFormat: id.toLowerCase().includes("hls") ? "repeat" : "comma"
                });
                const tilejsonUrl = `${mosaicUrl}?${tileParams}`;
                let tileServerUrl = undefined;
                try {
                    const tilejsonData = await (0, $fxYOA.requestQuickCache)({
                        url: tilejsonUrl,
                        method: "GET",
                        payload: null,
                        controller: controller
                    });
                    tileServerUrl = tilejsonData.tiles[0];
                } catch (error) {}
                const wmtsBaseUrl = mosaicUrl.replace("tilejson.json", "WMTSCapabilities.xml");
                const mosaicSource = {
                    type: "raster",
                    url: tilejsonUrl
                };
                const mosaicLayer = {
                    id: id,
                    type: "raster",
                    source: id,
                    layout: {
                        visibility: isHidden ? "none" : "visible"
                    },
                    paint: {
                        "raster-opacity": Number(!isHidden),
                        "raster-opacity-transition": {
                            duration: 320
                        }
                    },
                    minzoom: minZoom,
                    metadata: {
                        id: id,
                        layerOrderPosition: "raster",
                        xyzTileUrl: tileServerUrl,
                        wmtsTileUrl: `${wmtsBaseUrl}?${tileParams}`
                    }
                };
                sources = {
                    ...sources,
                    [id]: mosaicSource
                };
                layers = [
                    ...layers,
                    mosaicLayer
                ];
            }
            if (points && minZoom > 0) {
                const pointsSourceId = `${id}-points`;
                const pointsSource = {
                    type: "geojson",
                    data: (0, $22uAH$featureCollection)(points.map((p)=>(0, $22uAH$point)(p.center, {
                            bounds: p.bounds
                        })))
                };
                const pointsLayer = {
                    type: "symbol",
                    id: pointsSourceId,
                    source: pointsSourceId,
                    layout: {
                        ...markerLayout,
                        visibility: isHidden ? "none" : "visible",
                        "icon-allow-overlap": true
                    },
                    paint: {
                        "icon-color": theme.color?.primary,
                        "icon-halo-color": theme.color?.base,
                        "icon-halo-width": 1
                    },
                    maxzoom: minZoom,
                    metadata: {
                        layerOrderPosition: "markers"
                    }
                };
                sources = {
                    ...sources,
                    [pointsSourceId]: pointsSource
                };
                layers = [
                    ...layers,
                    pointsLayer
                ];
            }
            updateStyle({
                generatorId: generatorId,
                sources: sources,
                layers: layers
            });
        }
        run();
        return ()=>{
            controller.abort();
        };
    }, [
        updateStyle,
        id,
        mosaicUrl,
        minZoom,
        points,
        haveSourceParamsChanged,
        isHidden,
        generatorId
    ]); //
    // Cleanup layers on unmount.
    //
    (0, $22uAH$useEffect)(()=>{
        return ()=>{
            updateStyle({
                generatorId: generatorId,
                sources: {},
                layers: []
            });
        };
    }, [
        updateStyle,
        generatorId
    ]); //
    // Listen to mouse events on the markers layer
    //
    const onPointsClick = (0, $22uAH$useCallback)((features)=>{
        const bounds = JSON.parse(features[0].properties.bounds);
        mapInstance.fitBounds(bounds, {
            padding: (0, $fxYOA.FIT_BOUNDS_PADDING)
        });
    }, [
        mapInstance
    ]);
    (0, $fxYOA.useLayerInteraction)({
        layerId: `${id}-points`,
        mapInstance: mapInstance,
        onClick: onPointsClick
    }); //
    // FitBounds when needed
    //
    const layerBounds = (0, $22uAH$useMemo)(()=>stacCollection.length ? (0, $fxYOA.getMergedBBox)(stacCollection) : undefined, [
        stacCollection
    ]);
    (0, $fxYOA.useFitBbox)(mapInstance, !!isPositionSet, bounds, layerBounds);
    return null;
}

});
parcelRequire.register("4AHLW", function(module, exports) {

$parcel$export(module.exports, "Styles", function () { return $eced8f50d64c10fa$export$e155666bf54a9f18; });
$parcel$export(module.exports, "useMapStyle", function () { return $eced8f50d64c10fa$export$8f50c4fe15b757f9; });


const $eced8f50d64c10fa$export$f4de434b269fe487 = /*#__PURE__*/ (0, $22uAH$createContext)({
    updateStyle: (params)=>{
        return params;
    }
});
const $eced8f50d64c10fa$var$LAYER_ORDER = [
    "basemap-background",
    "raster",
    "vector",
    "basemap-foreground",
    "markers"
];
//  Mapbox layers and sources to be added to the final style. Outputs
//  a style object directly usable by the map instance.
const $eced8f50d64c10fa$var$generateStyle = (stylesData)=>{
    let sources = {};
    let layers = [];
    Object.entries(stylesData).forEach(([generatorId, generatorParams])=>{
        // TODO check duplicate source ids?
        sources = {
            ...sources,
            ...generatorParams.sources
        };
        const layersWithMeta = [
            ...generatorParams.layers.map((layer)=>{
                const metadata = layer.metadata ?? {};
                metadata.generatorId = generatorId;
                return {
                    ...layer,
                    metadata: metadata
                };
            })
        ];
        layers = [
            ...layers,
            ...layersWithMeta
        ];
    }); // Allow sort as it uses a copy of the array so mutating is ok
    /* eslint-disable-next-line fp/no-mutating-methods */ layers = [
        ...layers
    ].sort((layerA, layerB)=>{
        const layerAOrder = layerA.metadata?.layerOrderPosition;
        const layerBOrder = layerB.metadata?.layerOrderPosition;
        const layerAIndex = $eced8f50d64c10fa$var$LAYER_ORDER.indexOf(layerAOrder);
        const layerBIndex = $eced8f50d64c10fa$var$LAYER_ORDER.indexOf(layerBOrder);
        const sortDeltaOrder = layerAIndex - layerBIndex;
        const sortDeltaGeneratorId = layerA.metadata?.generatorId.localeCompare(layerB.metadata?.generatorId); // If compared layers have different layer orders, sort by layer order, otherwise
        // fallback on generatorId to ensure layer stacks from the same generator stay contiguous
        return sortDeltaOrder !== 0 ? sortDeltaOrder : sortDeltaGeneratorId;
    });
    return {
        version: 8,
        glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        // This is the spritesheet used in the default satellite basemap (cldu1cb8f00ds01p6gi583w1m)
        sprite: "mapbox://sprites/covid-nasa/cldu1cb8f00ds01p6gi583w1m/e3w0e56evrnnyy9tj4v36mbo4",
        layers: layers,
        sources: sources
    };
};
function $eced8f50d64c10fa$export$e155666bf54a9f18({ onStyleUpdate: onStyleUpdate , children: children  }) {
    const [stylesData, setStylesData] = (0, $22uAH$useState)({});
    const [style, setStyle] = (0, $22uAH$useState)();
    const updateStyle = (0, $22uAH$useCallback)((params)=>{
        setStylesData((prevStyle)=>({
                ...prevStyle,
                [params.generatorId]: params
            }));
    }, [
        setStylesData
    ]);
    (0, $22uAH$useEffect)(()=>{
        const style = $eced8f50d64c10fa$var$generateStyle(stylesData);
        onStyleUpdate?.(style);
        setStyle(style);
    }, [
        stylesData,
        onStyleUpdate
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsx)($eced8f50d64c10fa$export$f4de434b269fe487.Provider, {
        value: {
            updateStyle: updateStyle,
            style: style
        },
        children: children
    });
}
const $eced8f50d64c10fa$export$8f50c4fe15b757f9 = ()=>{
    const { updateStyle: updateStyle , style: style  } = (0, $22uAH$useContext)($eced8f50d64c10fa$export$f4de434b269fe487);
    return {
        updateStyle: updateStyle,
        style: style
    };
};

});

parcelRequire.register("cYxFp", function(module, exports) {

$parcel$export(module.exports, "useCustomMarker", function () { return $faa33ccbb6c88ee6$export$44ab2e5ce2af45d8; });


var $588MH = parcelRequire("588MH");
const $faa33ccbb6c88ee6$var$CUSTOM_MARKER_ID = "marker-sdf";
const $faa33ccbb6c88ee6$var$markerLayout = {
    "icon-image": $faa33ccbb6c88ee6$var$CUSTOM_MARKER_ID,
    "icon-size": 0.25,
    "icon-anchor": "bottom"
};
function $faa33ccbb6c88ee6$export$44ab2e5ce2af45d8(mapInstance) {
    (0, $22uAH$useEffect)(()=>{
        mapInstance.loadImage((0, (/*@__PURE__*/$parcel$interopDefault($588MH))), (error, image)=>{
            if (error) throw error;
            if (!image) return;
            if (mapInstance.hasImage($faa33ccbb6c88ee6$var$CUSTOM_MARKER_ID)) mapInstance.removeImage($faa33ccbb6c88ee6$var$CUSTOM_MARKER_ID);
             // add image to the active style and make it SDF-enabled
            mapInstance.addImage($faa33ccbb6c88ee6$var$CUSTOM_MARKER_ID, image, {
                sdf: true
            });
        });
    }, [
        mapInstance
    ]);
    return $faa33ccbb6c88ee6$var$markerLayout;
}

});
parcelRequire.register("588MH", function(module, exports) {
module.exports = new URL("marker-sdf.87fed311.png", import.meta.url).toString();

});



parcelRequire.register("Y0LZW", function(module, exports) {

$parcel$export(module.exports, "MapLayerVectorTimeseries", function () { return $be79bd54011157c9$export$8816d5ec4a21810d; });






var $fxYOA = parcelRequire("fxYOA");

var $4AHLW = parcelRequire("4AHLW");

var $cYxFp = parcelRequire("cYxFp");

var $978L3 = parcelRequire("978L3");

var $8mxqI = parcelRequire("8mxqI");
function $be79bd54011157c9$export$8816d5ec4a21810d(props) {
    const { id: id , stacCol: stacCol , stacApiEndpoint: stacApiEndpoint , date: date , mapInstance: mapInstance , sourceParams: sourceParams , zoomExtent: zoomExtent , bounds: bounds , onStatusChange: onStatusChange , isHidden: isHidden , idSuffix: idSuffix = "" , isPositionSet: isPositionSet  } = props;
    const theme = (0, $22uAH$useTheme)();
    const { updateStyle: updateStyle  } = (0, $4AHLW.useMapStyle)();
    const [featuresApiEndpoint, setFeaturesApiEndpoint] = (0, $22uAH$useState)("");
    const [featuresBbox, setFeaturesBbox] = (0, $22uAH$useState)();
    const [minZoom, maxZoom] = zoomExtent ?? [
        0,
        20
    ];
    const stacApiEndpointToUse = stacApiEndpoint ?? "https://staging-stac.delta-backend.com";
    const generatorId = "vector-timeseries" + idSuffix; //
    // Get the tiles url
    //
    (0, $22uAH$useEffect)(()=>{
        const controller = new AbortController();
        async function load() {
            try {
                onStatusChange?.({
                    status: (0, $978L3.S_LOADING),
                    id: id
                });
                const data = await (0, $fxYOA.requestQuickCache)({
                    url: `${stacApiEndpointToUse}/collections/${stacCol}`,
                    method: "GET",
                    controller: controller
                });
                const endpoint = data.links.find((l)=>l.rel === "external").href;
                setFeaturesApiEndpoint(endpoint);
                const featuresData = await (0, $fxYOA.requestQuickCache)({
                    url: endpoint,
                    method: "GET",
                    controller: controller
                });
                if (featuresData.extent.spatial.bbox) setFeaturesBbox(featuresData.extent.spatial.bbox[0]);
                onStatusChange?.({
                    status: (0, $978L3.S_SUCCEEDED),
                    id: id
                });
            } catch (error) {
                if (!controller.signal.aborted) {
                    setFeaturesApiEndpoint("");
                    onStatusChange?.({
                        status: (0, $978L3.S_FAILED),
                        id: id
                    });
                }
                return;
            }
        }
        load();
        return ()=>{
            controller.abort();
        };
    }, [
        mapInstance,
        id,
        stacCol,
        stacApiEndpointToUse,
        date,
        onStatusChange
    ]);
    const markerLayout = (0, $cYxFp.useCustomMarker)(mapInstance); //
    // Generate Mapbox GL layers and sources for raster timeseries
    //
    const haveSourceParamsChanged = (0, $22uAH$useMemo)(()=>JSON.stringify(sourceParams), [
        sourceParams
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!date || !featuresApiEndpoint) return;
        const start = (0, $8mxqI.userTzDate2utcString)((0, $22uAH$startOfDay)(date));
        const end = (0, $8mxqI.userTzDate2utcString)((0, $22uAH$endOfDay)(date));
        const tileParams = (0, $22uAH$qs).stringify({
            ...sourceParams,
            datetime: `${start}/${end}`
        });
        const sources = {
            [id]: {
                type: "vector",
                tiles: [
                    `${featuresApiEndpoint}/tiles/{z}/{x}/{y}?${tileParams}`
                ]
            }
        };
        const layers = [
            {
                id: `${id}-line-bg`,
                type: "line",
                source: id,
                "source-layer": "default",
                layout: {
                    visibility: isHidden ? "none" : "visible"
                },
                paint: {
                    "line-color": theme.color?.["danger-300"],
                    "line-width": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "zoom"
                        ],
                        minZoom,
                        4,
                        maxZoom,
                        10
                    ]
                },
                // filter: ['==', '$type', 'LineString'],
                minzoom: minZoom,
                metadata: {
                    id: id,
                    layerOrderPosition: "raster",
                    xyzTileUrl: `${featuresApiEndpoint}/tiles/{z}/{x}/{y}?${tileParams}`
                }
            },
            {
                id: `${id}-line-fg`,
                type: "line",
                source: id,
                "source-layer": "default",
                layout: {
                    visibility: isHidden ? "none" : "visible"
                },
                paint: {
                    "line-color": theme.color?.infographicB,
                    "line-width": [
                        "interpolate",
                        [
                            "linear"
                        ],
                        [
                            "zoom"
                        ],
                        minZoom,
                        2,
                        maxZoom,
                        5
                    ]
                },
                filter: [
                    "==",
                    "$type",
                    "LineString"
                ],
                minzoom: minZoom,
                metadata: {
                    layerOrderPosition: "raster"
                }
            },
            {
                id: `${id}-fill-fg`,
                type: "fill",
                source: id,
                "source-layer": "default",
                layout: {
                    visibility: isHidden ? "none" : "visible"
                },
                paint: {
                    "fill-color": theme.color?.infographicB,
                    "fill-opacity": 0.8
                },
                filter: [
                    "==",
                    "$type",
                    "Polygon"
                ],
                minzoom: minZoom,
                metadata: {
                    layerOrderPosition: "raster"
                }
            },
            minZoom > 0 ? {
                type: "symbol",
                id: `${id}-points`,
                source: id,
                "source-layer": "default",
                layout: {
                    ...markerLayout,
                    visibility: isHidden ? "none" : "visible"
                },
                paint: {
                    "icon-color": theme.color?.infographicB,
                    "icon-halo-color": theme.color?.base,
                    "icon-halo-width": 1
                },
                maxzoom: minZoom,
                metadata: {
                    layerOrderPosition: "markers"
                }
            } : undefined
        ].filter(Boolean);
        updateStyle({
            generatorId: generatorId,
            sources: sources,
            layers: layers
        }); // sourceParams not included, but using a stringified version of it to
    // detect changes (haveSourceParamsChanged)
    // `theme` will not change throughout the app use
    }, [
        id,
        updateStyle,
        date,
        featuresApiEndpoint,
        minZoom,
        maxZoom,
        isHidden,
        haveSourceParamsChanged,
        generatorId
    ]); //
    // Cleanup layers on unmount.
    //
    (0, $22uAH$useEffect)(()=>{
        return ()=>{
            updateStyle({
                generatorId: generatorId,
                sources: {},
                layers: []
            });
        };
    }, [
        updateStyle,
        generatorId
    ]); //
    // Listen to mouse events on the markers layer
    //
    const onPointsClick = (0, $22uAH$useCallback)((features)=>{
        const extractedFeat = {
            type: "Feature",
            geometry: features[0].geometry
        };
        const center = (0, $22uAH$turfcentroid)(extractedFeat).geometry.coordinates; // Zoom past the min zoom centering on the clicked feature.
        mapInstance.flyTo({
            zoom: minZoom,
            center: center
        });
    }, [
        mapInstance,
        minZoom
    ]);
    (0, $fxYOA.useLayerInteraction)({
        layerId: `${id}-points`,
        mapInstance: mapInstance,
        onClick: onPointsClick
    }); //
    // FitBounds when needed
    //
    (0, $fxYOA.useFitBbox)(mapInstance, !!isPositionSet, bounds, featuresBbox);
    return null;
}

});

parcelRequire.register("60Dcw", function(module, exports) {

$parcel$export(module.exports, "ZarrPaintLayer", function () { return $43fa7071e06fb1ec$export$18a60e7dde8b7e86; });
$parcel$export(module.exports, "MapLayerZarrTimeseries", function () { return $43fa7071e06fb1ec$export$784e9dae52f47ee8; });




var $4AHLW = parcelRequire("4AHLW");

var $33cCQ = parcelRequire("33cCQ");
function $43fa7071e06fb1ec$export$18a60e7dde8b7e86(props) {
    const { id: id , tileApiEndpoint: tileApiEndpoint , date: date , sourceParams: sourceParams , zoomExtent: zoomExtent , isHidden: isHidden , assetUrl: assetUrl , idSuffix: idSuffix = ""  } = props;
    const { updateStyle: updateStyle  } = (0, $4AHLW.useMapStyle)();
    const [minZoom] = zoomExtent ?? [
        0,
        20
    ];
    const generatorId = "zarr-timeseries" + idSuffix; // Generate Mapbox GL layers and sources for raster timeseries
    //
    const haveSourceParamsChanged = (0, $22uAH$useMemo)(()=>JSON.stringify(sourceParams), [
        sourceParams
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!assetUrl) return;
        const tileParams = (0, $22uAH$qs).stringify({
            url: assetUrl,
            time_slice: date,
            ...sourceParams
        });
        const zarrSource = {
            type: "raster",
            url: `${tileApiEndpoint}?${tileParams}`
        };
        const zarrLayer = {
            id: id,
            type: "raster",
            source: id,
            layout: {
                visibility: isHidden ? "none" : "visible"
            },
            paint: {
                "raster-opacity": Number(!isHidden),
                "raster-opacity-transition": {
                    duration: 320
                }
            },
            minzoom: minZoom,
            metadata: {
                layerOrderPosition: "raster"
            }
        };
        const sources = {
            [id]: zarrSource
        };
        const layers = [
            zarrLayer
        ];
        updateStyle({
            generatorId: generatorId,
            sources: sources,
            layers: layers
        });
    }, [
        updateStyle,
        id,
        date,
        assetUrl,
        minZoom,
        haveSourceParamsChanged,
        isHidden,
        generatorId,
        tileApiEndpoint
    ]); //
    // Cleanup layers on unmount.
    //
    (0, $22uAH$useEffect)(()=>{
        return ()=>{
            updateStyle({
                generatorId: generatorId,
                sources: {},
                layers: []
            });
        };
    }, [
        updateStyle,
        generatorId
    ]);
    return null;
}
function $43fa7071e06fb1ec$export$784e9dae52f47ee8(props) {
    const { id: id , stacCol: stacCol , stacApiEndpoint: stacApiEndpoint , date: date , onStatusChange: onStatusChange  } = props;
    const stacApiEndpointToUse = stacApiEndpoint ?? "https://staging-stac.delta-backend.com";
    const assetUrl = (0, $33cCQ.useZarr)({
        id: id,
        stacCol: stacCol,
        stacApiEndpointToUse: stacApiEndpointToUse,
        date: date,
        onStatusChange: onStatusChange
    });
    return /*#__PURE__*/ (0, $22uAH$jsx)($43fa7071e06fb1ec$export$18a60e7dde8b7e86, {
        ...props,
        assetUrl: assetUrl
    });
}

});
parcelRequire.register("33cCQ", function(module, exports) {

$parcel$export(module.exports, "useZarr", function () { return $d4e1cfbe99b682d5$export$3a82e77edd77adc4; });
$parcel$export(module.exports, "useCMR", function () { return $d4e1cfbe99b682d5$export$68247353467a676d; });


var $8zaoZ = parcelRequire("8zaoZ");

var $978L3 = parcelRequire("978L3");
function $d4e1cfbe99b682d5$export$3a82e77edd77adc4({ id: id , stacCol: stacCol , stacApiEndpointToUse: stacApiEndpointToUse , date: date , onStatusChange: onStatusChange  }) {
    const [assetUrl, setAssetUrl] = (0, $22uAH$useState)("");
    (0, $22uAH$useEffect)(()=>{
        const controller = new AbortController();
        async function load() {
            try {
                onStatusChange?.({
                    status: (0, $978L3.S_LOADING),
                    id: id
                });
                const data = await (0, $8zaoZ.requestQuickCache)({
                    url: `${stacApiEndpointToUse}/collections/${stacCol}`,
                    method: "GET",
                    controller: controller
                });
                setAssetUrl(data.assets.zarr.href);
                onStatusChange?.({
                    status: (0, $978L3.S_SUCCEEDED),
                    id: id
                });
            } catch (error) {
                if (!controller.signal.aborted) {
                    setAssetUrl("");
                    onStatusChange?.({
                        status: (0, $978L3.S_FAILED),
                        id: id
                    });
                }
                return;
            }
        }
        load();
        return ()=>{
            controller.abort();
        };
    }, [
        id,
        stacCol,
        stacApiEndpointToUse,
        date,
        onStatusChange
    ]);
    return assetUrl;
}
function $d4e1cfbe99b682d5$export$68247353467a676d({ id: id , stacCol: stacCol , stacApiEndpointToUse: stacApiEndpointToUse , date: date , assetUrlReplacements: assetUrlReplacements , stacApiEndpoint: stacApiEndpoint , onStatusChange: onStatusChange  }) {
    const [assetUrl, setAssetUrl] = (0, $22uAH$useState)("");
    const replaceInAssetUrl = (url, replacement)=>{
        const { from: from , to: to  } = replacement;
        const cmrAssetUrl = url.replace(from, to);
        return cmrAssetUrl;
    };
    (0, $22uAH$useEffect)(()=>{
        const controller = new AbortController();
        async function load() {
            try {
                onStatusChange?.({
                    status: (0, $978L3.S_LOADING),
                    id: id
                });
                if (!assetUrlReplacements) throw new Error("CMR  layer requires asset url remplacement attributes"); // Zarr collections in _VEDA_ should have a single entrypoint (zarr or virtual zarr / reference)
                // CMR endpoints will be using individual items' assets, so we query for the asset url
                const stacApiEndpointToUse = `${stacApiEndpoint}/search?collections=${stacCol}&datetime=${date?.toISOString()}`;
                const data = await (0, $8zaoZ.requestQuickCache)({
                    url: stacApiEndpointToUse,
                    method: "GET",
                    controller: controller
                });
                const assetUrl = replaceInAssetUrl(data.features[0].assets.data.href, assetUrlReplacements);
                setAssetUrl(assetUrl);
                onStatusChange?.({
                    status: (0, $978L3.S_SUCCEEDED),
                    id: id
                });
            } catch (error) {
                if (!controller.signal.aborted) {
                    setAssetUrl("");
                    onStatusChange?.({
                        status: (0, $978L3.S_FAILED),
                        id: id
                    });
                }
                return;
            }
        }
        load();
        return ()=>{
            controller.abort();
        };
    }, [
        id,
        stacCol,
        stacApiEndpointToUse,
        date,
        assetUrlReplacements,
        stacApiEndpoint,
        onStatusChange
    ]);
    return assetUrl;
}

});
parcelRequire.register("8zaoZ", function(module, exports) {

$parcel$export(module.exports, "requestQuickCache", function () { return $01c21d3b0e5de126$export$c3dc98f0c2b33757; });
$parcel$export(module.exports, "getZoomFromBbox", function () { return $01c21d3b0e5de126$export$13537e4993f15a71; });



var $8mxqI = parcelRequire("8mxqI");

var $EAuO5 = parcelRequire("EAuO5");
const $01c21d3b0e5de126$export$c7c74247e5542f4d = 32;
const $01c21d3b0e5de126$export$ebf483883eb81e38 = (0, $EAuO5.validateRangeNum)(-180, 180);
const $01c21d3b0e5de126$export$575713d68770cd1d = (0, $EAuO5.validateRangeNum)(-90, 90);
function $01c21d3b0e5de126$export$9ae17ff05029d56a(features) {
    const mergedBBox = [
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY
    ];
    return features.reduce((acc, feature)=>[
            feature.bbox[0] < acc[0] ? feature.bbox[0] : acc[0],
            feature.bbox[1] < acc[1] ? feature.bbox[1] : acc[1],
            feature.bbox[2] > acc[2] ? feature.bbox[2] : acc[2],
            feature.bbox[3] > acc[3] ? feature.bbox[3] : acc[3]
        ], mergedBBox);
}
function $01c21d3b0e5de126$export$f8a2d12103fa5b0f(layerBounds, mapInstance) {
    if (!layerBounds || !mapInstance) return false;
    const [minXLayer, minYLayer, maxXLayer, maxYLayer] = layerBounds;
    const [[minXMap, minYMap], [maxXMap, maxYMap]] = mapInstance.getBounds().toArray();
    const isOutside = maxXLayer < minXMap || minXLayer > maxXMap || maxYLayer < minYMap || minYLayer > maxYMap;
    const layerExtentSmaller = maxXLayer - minXLayer < maxXMap - minXMap && maxYLayer - minYLayer < maxYMap - minYMap; // only fitBounds if layer extent is smaller than viewport extent (ie zoom to area of interest),
    // or if layer extent does not overlap at all with viewport extent (ie pan to area of interest)
    return layerExtentSmaller || isOutside;
}
function $01c21d3b0e5de126$export$e4e9d10260c7d150(date, collection) {
    return {
        op: "and",
        args: [
            {
                op: ">=",
                args: [
                    {
                        property: "datetime"
                    },
                    (0, $8mxqI.userTzDate2utcString)((0, $22uAH$startOfDay)(date))
                ]
            },
            {
                op: "<=",
                args: [
                    {
                        property: "datetime"
                    },
                    (0, $8mxqI.userTzDate2utcString)((0, $22uAH$endOfDay)(date))
                ]
            },
            {
                op: "eq",
                args: [
                    {
                        property: "collection"
                    },
                    collection
                ]
            }
        ]
    };
} // There are cases when the data can't be displayed properly on low zoom levels.
// In these cases instead of displaying the raster tiles, we display markers to
// indicate whether or not there is data in a given location. When the user
// crosses the marker threshold, if below the min zoom we have to request the
// marker position, and if above we have to register a mosaic query. Since this
// switching can happen several times, we cache the api response using the
// request params as key.
const $01c21d3b0e5de126$var$quickCache = new Map();
function $01c21d3b0e5de126$export$c3dc98f0c2b33757({ url: url , payload: payload , controller: controller , method: method = "post"  }) {
    if (controller.signal.aborted) return Promise.reject(controller.signal.reason);
     // Using a complicated promise structure to be able to abort the request even
    // for a synchronous cache hit.
    return new Promise((resolve, reject)=>{
        const abortHandler = ()=>{
            reject(controller.signal.reason);
        };
        const key = `${method}:${url}${JSON.stringify(payload)}`; // Operation that will return the data.
        const dataPromise = !$01c21d3b0e5de126$var$quickCache.has(key) ? (0, $22uAH$axios)({
            url: url,
            method: method,
            data: payload,
            signal: controller.signal
        }).then((response)=>response.data) : Promise.resolve($01c21d3b0e5de126$var$quickCache.get(key)); // Run the promise.
        dataPromise.then((data)=>{
            $01c21d3b0e5de126$var$quickCache.set(key, data);
            resolve(data);
        }).catch((error)=>reject(error)).finally(()=>{
            controller.signal.removeEventListener("abort", abortHandler);
        });
        controller.signal.addEventListener("abort", abortHandler);
    });
}
function $01c21d3b0e5de126$export$6f66c71903a43277(datum, bag) {
    if (Array.isArray(datum)) return datum.map((v)=>$01c21d3b0e5de126$export$6f66c71903a43277(v, bag));
    if (datum != null && typeof datum === "object") {
        // Use for loop instead of reduce as it faster.
        const ready = {};
        for (const [k, v] of Object.entries(datum))ready[k] = $01c21d3b0e5de126$export$6f66c71903a43277(v, bag);
        return ready;
    }
    if (typeof datum === "function") try {
        return datum(bag);
    } catch (error) {
        /* eslint-disable-next-line no-console */ // console.error(
        //   'Failed to resolve function %s(%o) with error %s',
        //   datum.name,
        //   bag,
        //   error.message
        // );
        return null;
    }
    return datum;
}
function $01c21d3b0e5de126$export$140aee0ae17fe649(drawId) {
    return drawId.slice(-6);
}
function $01c21d3b0e5de126$export$f3e40f023efde6f(feature) {
    const polygons = feature.geometry.coordinates.map((coordinates)=>({
            type: "Feature",
            properties: {
                ...feature.properties
            },
            geometry: {
                type: "Polygon",
                coordinates: coordinates
            }
        }));
    return polygons;
}
function $01c21d3b0e5de126$export$13537e4993f15a71(bbox) {
    const latMax = Math.max(bbox[3], bbox[1]);
    const lngMax = Math.max(bbox[2], bbox[0]);
    const latMin = Math.min(bbox[3], bbox[1]);
    const lngMin = Math.min(bbox[2], bbox[0]);
    const maxDiff = Math.max(latMax - latMin, lngMax - lngMin);
    if (maxDiff < 360 / Math.pow(2, 20)) return 21;
    else {
        const zoomLevel = Math.floor(-1 * (Math.log(maxDiff) / Math.log(2) - Math.log(360) / Math.log(2)));
        if (zoomLevel < 1) return 1;
        else return zoomLevel;
    }
}

});



parcelRequire.register("6V32m", function(module, exports) {

$parcel$export(module.exports, "MapLayerCMRTimeseries", function () { return $d9db06eb8ac49843$export$38b3506620089d65; });



var $60Dcw = parcelRequire("60Dcw");

var $33cCQ = parcelRequire("33cCQ");
function $d9db06eb8ac49843$export$38b3506620089d65(props) {
    const { id: id , stacCol: stacCol , stacApiEndpoint: stacApiEndpoint , date: date , assetUrlReplacements: assetUrlReplacements , onStatusChange: onStatusChange  } = props;
    const stacApiEndpointToUse = stacApiEndpoint ?? "https://staging-stac.delta-backend.com";
    const assetUrl = (0, $33cCQ.useCMR)({
        id: id,
        stacCol: stacCol,
        stacApiEndpointToUse: stacApiEndpointToUse,
        date: date,
        assetUrlReplacements: assetUrlReplacements,
        stacApiEndpoint: stacApiEndpoint,
        onStatusChange: onStatusChange
    });
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $60Dcw.ZarrPaintLayer), {
        ...props,
        assetUrl: assetUrl
    });
}

});


parcelRequire.register("l6jqT", function(module, exports) {

$parcel$export(module.exports, "SimpleMap", function () { return $fcb4bd21893b21e7$export$bdb30e8da58d26f6; });







var $5LpOr = parcelRequire("5LpOr");

var $lqL6j = parcelRequire("lqL6j");

var $l7nnV = parcelRequire("l7nnV");

var $6BYP8 = parcelRequire("6BYP8");

var $5QYGH = parcelRequire("5QYGH");

var $jfO2i = parcelRequire("jfO2i");

var $5Mz1W = parcelRequire("5Mz1W");

var $4AHLW = parcelRequire("4AHLW");

var $8zaoZ = parcelRequire("8zaoZ");

var $2RWby = parcelRequire("2RWby");
(0, $22uAH$mapboxgl).accessToken = undefined ?? "";
const $fcb4bd21893b21e7$var$SingleMapContainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map__SingleMapContainer",
    componentId: "sc-1659toe-0"
})([
    "&&{position:absolute;inset:0;}",
    " ",
    ""
], (0, $5LpOr.default), (0, $l7nnV.aoiCursorStyles));
function $fcb4bd21893b21e7$export$bdb30e8da58d26f6(props) {
    const { mapRef: mapRef , containerRef: containerRef , onLoad: onLoad , onMoveEnd: onMoveEnd , onUnmount: onUnmount , mapOptions: mapOptions , withGeocoder: withGeocoder , withScale: withScale , aoi: aoi , onAoiChange: onAoiChange , projection: projection , onProjectionChange: onProjectionChange , attributionPosition: attributionPosition = "bottom-left" , basemapStyleId: basemapStyleId , onBasemapStyleIdChange: onBasemapStyleIdChange , labelsOption: labelsOption , boundariesOption: boundariesOption , onOptionChange: onOptionChange , ...rest } = props;
    const theme = (0, $22uAH$useTheme)();
    const mapOptionsControl = (0, $5QYGH.useMapboxControl)(()=>{
        if (!projection || !onProjectionChange) return null;
        return /*#__PURE__*/ (0, $22uAH$jsx)((0, $6BYP8.default), {
            projection: projection,
            onProjectionChange: onProjectionChange,
            basemapStyleId: basemapStyleId,
            onBasemapStyleIdChange: onBasemapStyleIdChange,
            labelsOption: labelsOption,
            boundariesOption: boundariesOption,
            onOptionChange: onOptionChange
        });
    }, [
        projection,
        onProjectionChange,
        basemapStyleId,
        onBasemapStyleIdChange,
        labelsOption,
        boundariesOption,
        onOptionChange
    ]);
    const mapCoordsControl = (0, $5QYGH.useMapboxControl)(()=>{
        if (!mapRef.current) return null;
        return /*#__PURE__*/ (0, $22uAH$jsx)((0, $5Mz1W.default), {
            mapInstance: mapRef.current
        });
    }, []);
    const { style: style  } = (0, $4AHLW.useMapStyle)();
    (0, $22uAH$useEffect)(()=>{
        if (!containerRef.current) return;
        const mbMap = new (0, $22uAH$Map)({
            container: containerRef.current,
            attributionControl: false,
            projection: projection && (0, $jfO2i.convertProjectionToMapbox)(projection),
            ...mapOptions
        });
        mapRef.current = mbMap;
        if (onProjectionChange && projection) mapRef.current.addControl(mapOptionsControl, "top-left");
         // Add Geocoder control
        if (withGeocoder) {
            const geocoderControl = new (0, $22uAH$mapboxmapboxglgeocoder)({
                accessToken: (0, $22uAH$mapboxgl).accessToken,
                marker: false,
                collapsed: true,
                // Because of Mapbox issue: https://github.com/mapbox/mapbox-gl-js/issues/12565
                // We are doing manual centering for now
                flyTo: false
            }); // Close the geocoder when the result is selected.
            geocoderControl.on("result", ({ result: result  })=>{
                geocoderControl.clear();
                geocoderControl._inputEl.blur();
                const zoom = result.bbox ? (0, $8zaoZ.getZoomFromBbox)(result.bbox) : 14;
                mapRef.current?.flyTo({
                    center: result.center,
                    zoom: zoom
                });
            });
            mbMap.addControl(geocoderControl, "top-left");
        } // Add zoom controls without compass.
        if (mapOptions.interactive !== false) {
            mapRef.current.addControl(mapCoordsControl, "bottom-left");
            mbMap.addControl(new (0, $22uAH$NavigationControl)({
                showCompass: false
            }), "top-left");
        }
        if (withScale) {
            const scalecontrol = new (0, $22uAH$ScaleControl)();
            mbMap.addControl(scalecontrol, "bottom-left");
        }
        onLoad && mbMap.once("load", onLoad); // Trigger a resize to handle flex layout quirks.
        setTimeout(()=>mbMap.resize(), 1);
        return ()=>{
            mbMap.remove();
            mapRef.current = null;
            onUnmount?.();
        }; // Only use the props on mount. We don't want to update the map if they
    // change.
    }, []); // Handle style changes
    (0, $22uAH$useEffect)(()=>{
        if (!mapRef.current || !style) return;
        mapRef.current.setStyle(style);
    /* mapRef is a ref */ // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        style
    ]); // Handle Attribution
    (0, $22uAH$useEffect)(()=>{
        if (!mapRef.current || !attributionPosition) return;
        const ctrl = new (0, $22uAH$AttributionControl)();
        mapRef.current.addControl(ctrl, attributionPosition);
        return ()=>{
            mapRef.current?.removeControl(ctrl);
        };
    /* mapRef is a ref */ }, [
        attributionPosition
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!mapRef.current || !projection) return; // @ts-expect-error setProjection is missing on type
        mapRef.current.setProjection({
            ...(0, $jfO2i.convertProjectionToMapbox)(projection)
        });
    }, [
        mapRef,
        projection
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!mapRef.current || typeof onMoveEnd !== "function") return;
        const mbMap = mapRef.current;
        const listener = (e)=>{
            onMoveEnd({
                // The existence of originalEvent indicates that it was not caused by
                // a method call.
                userInitiated: Object.prototype.hasOwnProperty.call(e, "originalEvent"),
                lng: (0, $2RWby.round)(mbMap.getCenter().lng, 4),
                lat: (0, $2RWby.round)(mbMap.getCenter().lat, 4),
                zoom: (0, $2RWby.round)(mbMap.getZoom(), 2)
            });
        };
        mbMap.on("moveend", listener);
        return ()=>{
            mbMap.off("moveend", listener);
        };
    }, [
        onMoveEnd,
        mapRef
    ]);
    (0, $l7nnV.useMbDraw)({
        mapRef: mapRef,
        theme: theme,
        onChange: onAoiChange,
        drawing: aoi?.drawing,
        selectedContext: aoi?.selectedContext,
        featureCollection: aoi?.featureCollection
    });
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($fcb4bd21893b21e7$var$SingleMapContainer, {
                ref: containerRef,
                ...rest
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $lqL6j.default), {
                mapRef: mapRef,
                onChange: onAoiChange,
                selectedContext: aoi?.selectedContext
            })
        ]
    });
}

});
parcelRequire.register("5LpOr", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $43255d5b3dd4041b$export$2e2bcd8739ae039; });





var $de7zf = parcelRequire("de7zf");

const $43255d5b3dd4041b$var$MapboxStyleOverride = (0, $22uAH$css)([
    ".mapboxgl-control-container{position:absolute;z-index:2;inset:",
    ";pointer-events:none;> *{display:flex;flex-flow:column nowrap;gap:",
    ";align-items:flex-start;float:none;}.mapboxgl-ctrl{margin:0;pointer-events:none;> *{pointer-events:auto;}}.mapboxgl-ctrl-attrib{order:100;padding:0;background:none;}.mapboxgl-ctrl-attrib-inner{color:",
    ";border-radius:",
    ";padding:",
    ";font-size:0.75rem;line-height:1rem;background:",
    ";transform:translateY(-0.075rem);a,a:visited{color:inherit;font-size:inherit;line-height:inherit;vertical-align:top;text-decoration:none;}a:hover{opacity:0.64;}}}.mapboxgl-ctrl-logo,.mapboxgl-ctrl-attrib-inner{margin:0;opacity:0.48;transition:all 0.24s ease-in-out 0s;&:hover{opacity:1;}}.mapboxgl-ctrl-bottom-left{flex-flow:row wrap;align-items:flex-end;align-items:center;}.mapboxgl-ctrl-group{",
    " background:none;&,&:not(:empty){box-shadow:",
    ";}> button{span{display:none;}&::before{display:inline-block;content:'';background-repeat:no-repeat;background-size:1rem 1rem;width:1rem;height:1rem;}}> button + button{margin-top:-",
    ";}> button:first-child:not(:last-child){&,&::after{border-bottom-right-radius:0;border-bottom-left-radius:0;}&::after{clip-path:inset(-100% -100% 0 -100%);}}> button:last-child:not(:first-child){&,&::after{border-top-left-radius:0;border-top-right-radius:0;}&::after{clip-path:inset(0 -100% -100% -100%);}}> button:not(:first-child):not(:last-child){&,&::after{border-radius:0;}&::after{clip-path:inset(0 -100%);}}}.mapboxgl-ctrl-zoom-in.mapboxgl-ctrl-zoom-in,.mapboxgl-ctrl-zoom-out.mapboxgl-ctrl-zoom-out{",
    "}.mapboxgl-ctrl-zoom-in.mapboxgl-ctrl-zoom-in::before{background-image:url(",
    ");}.mapboxgl-ctrl-zoom-out.mapboxgl-ctrl-zoom-out::before{background-image:url(",
    ");}.mapboxgl-marker:hover{cursor:pointer;}.mapboxgl-ctrl-scale{color:",
    ";border-color:",
    ";background-color:",
    ";}.mapboxgl-ctrl.mapboxgl-ctrl-geocoder{background-color:",
    ";color:",
    ";font:",
    " ",
    " 0.875rem/1.25rem ",
    ";transition:all 0.24s ease 0s;&::before{position:absolute;top:8px;left:8px;content:'';width:1rem;height:1rem;background-image:url(",
    ");background-repeat:no-repeat;}&.mapboxgl-ctrl-geocoder--collapsed{width:2rem;min-width:2rem;background-color:",
    ";&::before{background-image:url(",
    ");}}.mapboxgl-ctrl-geocoder--icon{display:none;}.mapboxgl-ctrl-geocoder--icon-loading{top:5px;right:8px;}.mapboxgl-ctrl-geocoder--button{width:2rem;height:2rem;top:0;right:0;background:none;border-radius:",
    ";transition:all 0.24s ease 0s;color:inherit;&:hover{opacity:0.64;}&::before{position:absolute;top:8px;left:8px;content:'';width:1rem;height:1rem;background-image:url(",
    ");}}.mapboxgl-ctrl-geocoder--input{height:2rem;width:100%;outline:none;font:",
    " ",
    " 0.875rem / ",
    " ",
    ";padding:0.25rem 2rem;color:inherit;&::placeholder{color:inherit;opacity:0.64;}}.mapboxgl-ctrl-geocoder--powered-by{display:none !important;}.suggestions{margin-bottom:0.5rem;border-radius:",
    ";font:inherit;a{padding:0.375rem 1rem;color:inherit;transition:all 0.24s ease 0s;&:hover{opacity:1;color:",
    ";background:",
    ";}}li{&:first-child a{padding-top:0.5rem;}&:last-child a{padding-bottom:0.75rem;}&.active > a{position:relative;background:",
    ";color:",
    ";&::before{content:'';position:absolute;left:0;top:0;height:100%;width:0.25rem;background:",
    ";}&:hover{background:",
    ";}}}}}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(0.5), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("shape.ellipsoid"), (0, $22uAH$glsp)(0.125, 0.5), (0, $22uAH$themeVal)("color.base-400a"), (0, $22uAH$createButtonGroupStyles)({
    orientation: "vertical"
}), (0, $22uAH$themeVal)("boxShadow.elevationA"), (0, $22uAH$themeVal)("button.shape.border"), (0, $22uAH$createButtonStyles)({
    variation: "primary-fill",
    fitting: "skinny"
}), ({ theme: theme  })=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonPlusSmall), {
        color: theme.color.surface
    }), ({ theme: theme  })=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonMinusSmall), {
        color: theme.color.surface
    }), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.base-400a"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("type.base.color"), (0, $22uAH$themeVal)("type.base.style"), (0, $22uAH$themeVal)("type.base.weight"), (0, $22uAH$themeVal)("type.base.family"), ({ theme: theme  })=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonMagnifierLeft), {
        color: theme.color.primary
    }), (0, $22uAH$themeVal)("color.primary"), ({ theme: theme  })=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonMagnifierLeft), {
        color: theme.color.surface
    }), (0, $22uAH$themeVal)("shape.rounded"), ({ theme: theme  })=>(0, $22uAH$iconDataURI)((0, $22uAH$CollecticonXmarkSmall), {
        color: theme.color["base-300"]
    }), (0, $22uAH$themeVal)("type.base.style"), (0, $22uAH$themeVal)("type.base.weight"), (0, $22uAH$themeVal)("type.base.line"), (0, $22uAH$themeVal)("type.base.family"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.primary-100"), (0, $22uAH$themeVal)("color.primary-50"), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.primary-100"));
var $43255d5b3dd4041b$export$2e2bcd8739ae039 = $43255d5b3dd4041b$var$MapboxStyleOverride;

});

parcelRequire.register("lqL6j", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $553804da63988c63$export$2e2bcd8739ae039; });







var $ap3zK = parcelRequire("ap3zK");

var $4dbig = parcelRequire("4dbig");
const $553804da63988c63$var$ActionPopoverInner = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "mb-draw-popover__ActionPopoverInner",
    componentId: "sc-19vrrgp-0"
})([
    "padding:0.25rem;"
]);
function $553804da63988c63$var$getCenterCoords(selectedContext) {
    if (!selectedContext) return null;
    const items = selectedContext.points.length ? selectedContext.points : selectedContext.features;
    const centerPoint = (0, $22uAH$turfcentroid)((0, $4dbig.makeFeatureCollection)(items));
    return centerPoint.geometry.coordinates;
}
function $553804da63988c63$export$2e2bcd8739ae039(props) {
    const { mapRef: mapRef , onChange: onChange , selectedContext: selectedContext  } = props;
    const lngLat = (0, $22uAH$useMemo)(()=>$553804da63988c63$var$getCenterCoords(selectedContext), [
        selectedContext
    ]);
    if (!mapRef.current || !onChange) return null;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $ap3zK.default), {
        mbMap: mapRef.current,
        lngLat: lngLat,
        closeOnClick: false,
        renderContents: ()=>{
            return /*#__PURE__*/ (0, $22uAH$jsx)($553804da63988c63$var$ActionPopoverInner, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Button), {
                    variation: "base-text",
                    onClick: ()=>onChange("aoi.trash-click"),
                    fitting: "skinny",
                    children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonTrashBin), {})
                })
            });
        }
    });
}

});
parcelRequire.register("ap3zK", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $b9173dad9e741389$export$2e2bcd8739ae039; });




var $asAgP = parcelRequire("asAgP");

var $bcUFt = parcelRequire("bcUFt");
function $b9173dad9e741389$export$2e2bcd8739ae039(props) {
    const { mbMap: mbMap , lngLat: lngLat , onClose: onCloseProp , ...rest } = props;
    const switchingPopovers = (0, $22uAH$useRef)(false); // Store the previous lat long.
    const pLngLat = (0, $22uAH$useRef)();
    const onClose = (0, $22uAH$useCallback)(()=>{
        if (switchingPopovers.current) {
            switchingPopovers.current = false;
            return;
        }
        onCloseProp?.();
    }, [
        onCloseProp
    ]);
    (0, $22uAH$useEffect)(()=>{
        // When we're transitioning the popover to a different location we need to
        // prevent the map click from triggering the close callback or the new
        // popover will not show up because the coordinates will be cleared on the
        // parent component.
        if (pLngLat.current && lngLat) {
            const prev = pLngLat.current.join("-");
            const curr = lngLat.join("-");
            if (prev !== curr) switchingPopovers.current = true;
        }
        pLngLat.current = lngLat;
    }, [
        lngLat
    ]);
    if (lngLat && !mbMap) {
        /* eslint-disable-next-line no-console */ console.error("Mapbox map required for the popover. Use the mbMap prop.");
        return null;
    }
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$TransitionGroup), {
        component: null,
        children: lngLat && // the transitions with styled components.
        // However when the component is mounting there is no reflow between
        // the exited and entering states and therefore there's no time for
        // the initial styles to be applied.
        // The suggestion listed at
        // https://github.com/reactjs/react-transition-group/issues/223 of
        // reading a node property onEnter and causing a reflow is not working
        // in this case. CSSTransition relies on css classes which work
        // perfectly fine.
        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CSSTransition), {
            timeout: (0, $bcUFt.POPOVER_SHOW_HIDE_ANIM_TIME),
            classNames: "popover-gl",
            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $asAgP.default), {
                ...rest,
                mbMap: mbMap,
                lngLat: lngLat,
                onClose: onClose
            })
        }, lngLat.join("-"))
    });
}

});
parcelRequire.register("asAgP", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a3aec747167eac25$export$2e2bcd8739ae039; });






var $bcUFt = parcelRequire("bcUFt");
const $a3aec747167eac25$var$Try = (props)=>{
    const { fn: fn , children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: typeof fn === "function" ? fn(rest) : children ?? null
    });
};
function $a3aec747167eac25$export$2e2bcd8739ae039(props) {
    const { className: className , mbMap: mbMap , closeOnClick: closeOnClick , closeOnMove: closeOnMove , onClose: onClose , lngLat: lngLat , offset: [offsetTop, offsetBottom] = [
        0,
        0
    ] , renderContents: renderContents , renderHeader: renderHeader , renderHeadline: renderHeadline , renderToolbar: renderToolbar , renderBody: renderBody , renderFooter: renderFooter , closeButton: closeButton , title: title , titleHLevel: titleHLevel = "h2" , subtitle: subtitle , suptitle: suptitle , content: content , footerContent: footerContent  } = props;
    const popoverEl = (0, $22uAH$useRef)(null);
    const [anchorPoints, setAnchorPoints] = (0, $22uAH$useState)([]);
    const [position, setPosition] = (0, $22uAH$useState)({
        top: null,
        left: null
    });
    const update = (0, $22uAH$useCallback)(()=>{
        if (!popoverEl.current) return;
        const { pageYOffset: pageYOffset , pageXOffset: pageXOffset  } = window;
        const { width: width , height: height , top: top , left: left  } = mbMap.getContainer().getBoundingClientRect();
        const mapTop = pageYOffset + top;
        const mapLeft = pageXOffset + left;
        const mapRight = pageXOffset + left + width;
        const mapBottom = pageYOffset + top + height;
        const pos = mbMap.project(lngLat);
        const anchorPosition = {
            top: mapTop + pos.y,
            left: mapLeft + pos.x
        };
        if (anchorPosition.top < mapTop || anchorPosition.top > mapBottom || anchorPosition.left < mapLeft || anchorPosition.left > mapRight) {
            setAnchorPoints([]);
            setPosition({
                top: null,
                left: null
            });
            return;
        }
        let anchorPoints = [];
        const popoverDomRect = popoverEl.current.getBoundingClientRect();
        const halfW = popoverDomRect.width / 2;
        if (anchorPosition.top - popoverDomRect.height - offsetTop < pageYOffset) {
            anchorPoints = [
                "top"
            ];
            anchorPosition.top += offsetBottom;
        } else {
            anchorPoints = [
                "bottom"
            ];
            anchorPosition.top -= offsetTop;
        }
        if (anchorPosition.left - halfW < mapLeft) anchorPoints = [
            ...anchorPoints,
            "left"
        ];
        else if (anchorPosition.left + halfW > mapRight) anchorPoints = [
            ...anchorPoints,
            "right"
        ];
        setAnchorPoints(anchorPoints);
        setPosition(anchorPosition);
    }, [
        mbMap,
        lngLat,
        offsetTop,
        offsetBottom
    ]);
    const destroy = (0, $22uAH$useCallback)(()=>{
        mbMap.off("click", destroy);
        mbMap.off("move", update);
        mbMap.off("move", destroy);
        onClose();
    }, [
        mbMap,
        onClose,
        update
    ]); // Setup listeners.
    (0, $22uAH$useEffect)(()=>{
        if (closeOnClick) mbMap.on("click", destroy);
         // For situations where the body size changes.
        let resizeObserver;
        if (closeOnMove) mbMap.on("move", destroy);
        else {
            mbMap.on("move", update);
            resizeObserver = new ResizeObserver(update); // Start observing
            resizeObserver.observe(document.body);
        }
        return ()=>{
            mbMap.off("click", destroy);
            mbMap.off("move", update);
            mbMap.off("move", destroy);
            resizeObserver?.disconnect();
        };
    }, [
        mbMap,
        closeOnClick,
        closeOnMove,
        update,
        destroy
    ]); // Update on mount.
    (0, $22uAH$useEffect)(()=>{
        update(); // Ensure the popover gets repositioned after it has sizes defined.
        setTimeout(update, 1); // Only do this on mount. The update is then called by the listener.
    /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);
    const { top: top , left: left  } = position;
    const hasPlacement = top !== null && left !== null;
    const anchor = anchorPoints.join("-");
    const popoverStyle = {
        transform: hasPlacement ? `${(0, $bcUFt.getAnchorTranslate)(anchor)} translate(${left}px, ${top}px)` : undefined,
        display: !hasPlacement ? "none" : undefined
    };
    return /*#__PURE__*/ (0, $22uAH$reactdom).createPortal(// CSSTransition.
    /*#__PURE__*/ (0, $22uAH$jsx)("div", {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.Popover), {
            className: className,
            style: popoverStyle,
            ref: popoverEl,
            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.PopoverContents), {
                anchor: anchor,
                verticalAttachment: anchorPoints[0],
                children: /*#__PURE__*/ (0, $22uAH$jsxs)($a3aec747167eac25$var$Try, {
                    fn: renderContents,
                    close: destroy,
                    children: [
                        /*#__PURE__*/ (0, $22uAH$jsx)($a3aec747167eac25$var$Try, {
                            fn: renderHeader,
                            close: destroy,
                            children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bcUFt.PopoverHeader), {
                                children: [
                                    /*#__PURE__*/ (0, $22uAH$jsx)($a3aec747167eac25$var$Try, {
                                        fn: renderHeadline,
                                        close: destroy,
                                        children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bcUFt.PopoverHeadline), {
                                            children: [
                                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.PopoverTitle), {
                                                    as: titleHLevel,
                                                    children: title
                                                }),
                                                (subtitle || suptitle) && /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.PopoverSubtitle), {
                                                    isSup: !subtitle,
                                                    children: subtitle ?? suptitle
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $22uAH$jsx)($a3aec747167eac25$var$Try, {
                                        fn: renderToolbar,
                                        close: destroy,
                                        children: closeButton && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Toolbar), {
                                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ToolbarIconButton), {
                                                size: "small",
                                                onClick: destroy,
                                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonXmarkSmall), {
                                                    title: "Close popover",
                                                    meaningful: true
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)($a3aec747167eac25$var$Try, {
                            fn: renderBody,
                            close: destroy,
                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.PopoverBody), {
                                children: content
                            })
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)($a3aec747167eac25$var$Try, {
                            fn: renderFooter,
                            close: destroy,
                            children: footerContent && /*#__PURE__*/ (0, $22uAH$jsx)((0, $bcUFt.PopoverFooter), {
                                children: footerContent
                            })
                        })
                    ]
                })
            })
        })
    }), document.querySelector("body"));
}
$a3aec747167eac25$export$2e2bcd8739ae039.defaultProps = {
    closeOnClick: true,
    closeButton: true,
    offset: [
        0,
        0
    ]
};

});
parcelRequire.register("bcUFt", function(module, exports) {

$parcel$export(module.exports, "POPOVER_SHOW_HIDE_ANIM_TIME", function () { return $d4dab6d094cd41f8$export$d6dc26c4f087167f; });
$parcel$export(module.exports, "getAnchorTranslate", function () { return $d4dab6d094cd41f8$export$82de92186a04fd34; });
$parcel$export(module.exports, "Popover", function () { return $d4dab6d094cd41f8$export$5b6b19405a83ff9d; });
$parcel$export(module.exports, "PopoverContents", function () { return $d4dab6d094cd41f8$export$fda2cbba281a800a; });
$parcel$export(module.exports, "PopoverHeader", function () { return $d4dab6d094cd41f8$export$24cbcada8f546cfe; });
$parcel$export(module.exports, "PopoverHeadline", function () { return $d4dab6d094cd41f8$export$5dfb53b9360ca905; });
$parcel$export(module.exports, "PopoverTitle", function () { return $d4dab6d094cd41f8$export$67a688130f1df71; });
$parcel$export(module.exports, "PopoverSubtitle", function () { return $d4dab6d094cd41f8$export$22cb07e82d8856fb; });
$parcel$export(module.exports, "PopoverBody", function () { return $d4dab6d094cd41f8$export$472ec417bca1d382; });
$parcel$export(module.exports, "PopoverFooter", function () { return $d4dab6d094cd41f8$export$18083345862c6206; });





var $de7zf = parcelRequire("de7zf");
const $d4dab6d094cd41f8$export$d6dc26c4f087167f = 240;
const $d4dab6d094cd41f8$var$applyBorderStyles = ({ anchor: anchor  })=>{
    return ({
        "top-left": (0, $22uAH$css)([
            "border-top-left-radius:0;"
        ]),
        "top-right": (0, $22uAH$css)([
            "border-top-right-radius:0;"
        ]),
        "bottom-left": (0, $22uAH$css)([
            "border-bottom-left-radius:0;"
        ]),
        "bottom-right": (0, $22uAH$css)([
            "border-bottom-right-radius:0;"
        ])
    })[anchor];
};
const $d4dab6d094cd41f8$var$applyAnchorStyles = ({ anchor: anchor  })=>{
    const centerClip = "clip-path: polygon(50% 0, 0% 100%, 100% 100%);";
    const cornerClip = "clip-path: polygon(0 0, 0% 100%, 100% 100%);";
    if (anchor === "top" || anchor === "bottom") {
        const common = (0, $22uAH$css)([
            "",
            " left:50%;width:1rem;aspect-ratio:2/1;"
        ], centerClip);
        if (anchor === "top") return (0, $22uAH$css)([
            "",
            " bottom:100%;transform:translate(-50%,0);"
        ], common);
        else // anchor === 'bottom'
        return (0, $22uAH$css)([
            "",
            " top:100%;transform:scaleY(-1) translate(-50%,0);"
        ], common);
    } else {
        const common1 = (0, $22uAH$css)([
            "",
            " width:0.75rem;height:0.75rem;pointer-events:none;"
        ], cornerClip);
        if (anchor === "top-left") return (0, $22uAH$css)([
            "",
            " bottom:100%;left:0;"
        ], common1);
        if (anchor === "top-right") return (0, $22uAH$css)([
            "",
            " bottom:100%;right:0;transform:scaleX(-1);"
        ], common1);
        if (anchor === "bottom-left") return (0, $22uAH$css)([
            "",
            " top:100%;left:0;transform:scaleY(-1);"
        ], common1);
         // anchor === 'bottom-right'
        return (0, $22uAH$css)([
            "",
            " top:100%;right:0;transform:scaleX(-1) scaleY(-1);"
        ], common1);
    }
};
const $d4dab6d094cd41f8$export$82de92186a04fd34 = (pos)=>({
        center: "translate(-50%,-50%)",
        top: "translate(-50%,0)",
        "top-left": "translate(0,0)",
        "top-right": "translate(-100%,0)",
        bottom: "translate(-50%,-100%)",
        "bottom-left": "translate(0,-100%)",
        "bottom-right": "translate(-100%,-100%)",
        left: "translate(0,-50%)",
        right: "translate(-100%,-50%)"
    })[pos];
const $d4dab6d094cd41f8$var$getTransition = (isShowing)=>{
    const easing = isShowing ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)" // easeOutBack
     : "cubic-bezier(0.6, -0.28, 0.735, 0.045)"; // easeInBack
    return (0, $22uAH$css)([
        "transition:transform ",
        "ms ",
        ",opacity ",
        "ms ease-in-out;"
    ], $d4dab6d094cd41f8$export$d6dc26c4f087167f, easing, $d4dab6d094cd41f8$export$d6dc26c4f087167f);
};
const $d4dab6d094cd41f8$export$5b6b19405a83ff9d = (0, $22uAH$styledcomponents).article.withConfig({
    displayName: "styled__Popover",
    componentId: "sc-1y2hb5r-0"
})([
    "padding:0.75rem 0;position:absolute;top:0;left:0;z-index:1;"
]);
const $d4dab6d094cd41f8$export$fda2cbba281a800a = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styled__PopoverContents",
    componentId: "sc-1y2hb5r-1"
})([
    "border-radius:",
    ";background:",
    ";box-shadow:",
    ";transform:scale(1);transform-origin:center ",
    ";",
    " &::before{content:'';position:absolute;background:#fff;",
    "}> *:last-child{margin-bottom:0;}.popover-gl-enter &{",
    " transform:scale(0);opacity:0;}.popover-gl-enter-active &{transform:scale(1);opacity:1;}.popover-gl-exit &{",
    " transform:scale(1);opacity:1;}.popover-gl-exit-active &{transform:scale(0);opacity:0;}"
], (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("boxShadow.elevationD"), ({ verticalAttachment: va  })=>va === "top" ? "top" : "bottom", $d4dab6d094cd41f8$var$applyBorderStyles, $d4dab6d094cd41f8$var$applyAnchorStyles, $d4dab6d094cd41f8$var$getTransition(true), $d4dab6d094cd41f8$var$getTransition(false));
const $d4dab6d094cd41f8$export$24cbcada8f546cfe = (0, $22uAH$styledcomponents).header.withConfig({
    displayName: "styled__PopoverHeader",
    componentId: "sc-1y2hb5r-2"
})([
    "position:relative;z-index:9999;display:flex;gap:",
    ";padding:0.75rem;&::before{position:absolute;top:100%;left:0;right:0;content:'';pointer-events:none;height:1px;background:",
    ";}",
    "{margin-left:auto;}"
], (0, $de7zf.variableGlsp)(0.5, 1), (0, $22uAH$themeVal)("color.base-200a"), (0, $22uAH$Toolbar));
const $d4dab6d094cd41f8$export$5dfb53b9360ca905 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styled__PopoverHeadline",
    componentId: "sc-1y2hb5r-3"
})([
    "grid-row:1;min-width:0px;display:grid;justify-content:start;align-items:center;grid-gap:0.5rem;> *{grid-row:1;}"
]);
const $d4dab6d094cd41f8$export$67a688130f1df71 = (0, $22uAH$styledcomponents)((0, $22uAH$Heading)).withConfig({
    displayName: "styled__PopoverTitle",
    componentId: "sc-1y2hb5r-4"
})([
    "font-size:1rem;line-height:1.5rem;margin:0;"
]);
const $d4dab6d094cd41f8$export$22cb07e82d8856fb = (0, $22uAH$styledcomponents).p.withConfig({
    displayName: "styled__PopoverSubtitle",
    componentId: "sc-1y2hb5r-5"
})([
    "order:",
    ";",
    ""
], ({ isSup: isSup  })=>isSup ? -1 : 1, (0, $22uAH$createSubtitleStyles)());
const $d4dab6d094cd41f8$export$472ec417bca1d382 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styled__PopoverBody",
    componentId: "sc-1y2hb5r-6"
})([
    "display:grid;grid-template-columns:1fr;grid-gap:",
    ";padding:0.75rem;font-size:0.875rem;line-height:1.25rem;"
], (0, $22uAH$glsp)(0.75));
const $d4dab6d094cd41f8$export$18083345862c6206 = (0, $22uAH$styledcomponents).footer.withConfig({
    displayName: "styled__PopoverFooter",
    componentId: "sc-1y2hb5r-7"
})([
    "padding:0 0.75rem 0.75rem 0.75rem;display:flex;flex-flow:column;gap:",
    ";"
], (0, $22uAH$glsp)());

});



parcelRequire.register("4dbig", function(module, exports) {

$parcel$export(module.exports, "calcFeatCollArea", function () { return $de486799402c4e86$export$7ac02f39f0f6dccc; });
$parcel$export(module.exports, "makeFeatureCollection", function () { return $de486799402c4e86$export$f9291b679a7c557a; });




var $2RWby = parcelRequire("2RWby");
const $de486799402c4e86$export$6b5092ff9db1554d = (feat)=>{
    if (!feat) return {
        ne: [],
        sw: []
    };
    const b = (0, $22uAH$turfbbox)(feat);
    return {
        ne: [
            b[2],
            b[3]
        ],
        sw: [
            b[0],
            b[1]
        ]
    };
};
const $de486799402c4e86$export$95869bc559d5ab6 = (feature, bounds)=>{
    const { ne: [neLng, neLat] , sw: [swLng, swLat]  } = bounds;
    const geometry = {
        type: "Polygon",
        coordinates: [
            [
                [
                    swLng,
                    neLat
                ],
                [
                    neLng,
                    neLat
                ],
                [
                    neLng,
                    swLat
                ],
                [
                    swLng,
                    swLat
                ],
                [
                    swLng,
                    neLat
                ]
            ]
        ]
    };
    return feature ? {
        ...feature,
        geometry: geometry
    } : {
        type: "Feature",
        id: "aoi-feature",
        properties: {},
        geometry: geometry
    };
};
const $de486799402c4e86$export$7ac02f39f0f6dccc = (featureCollection)=>{
    if (!featureCollection?.features.length) return "0"; // Merge the features to calculate the correct area in the case of overlap.
    const mergedFeature = featureCollection.features.slice(1).reduce((acc, feature)=>{
        return (0, $22uAH$turfunion)(acc, feature);
    }, featureCollection.features[0]); // Convert from m2 to km2.
    const km2 = (0, $22uAH$turfarea)(mergedFeature) / 1e6;
    return (0, $2RWby.formatThousands)(km2, {
        decimals: 0,
        shorten: true
    });
};
const $de486799402c4e86$export$e51445d0d4e2683b = (bounds)=>{
    // Check if bounds are valid.
    return bounds.ne[0] !== undefined && bounds.ne[1] !== undefined && bounds.sw[0] !== undefined && bounds.sw[1] !== undefined;
};
const $de486799402c4e86$export$f9291b679a7c557a = (features = [])=>({
        type: "FeatureCollection",
        features: features
    });

});


parcelRequire.register("l7nnV", function(module, exports) {

$parcel$export(module.exports, "aoiCursorStyles", function () { return $f5fc6428701273f5$export$aa56152df820200; });
$parcel$export(module.exports, "useMbDraw", function () { return $f5fc6428701273f5$export$d000fde09addbcd8; });




var $izxkF = parcelRequire("izxkF");
const $f5fc6428701273f5$export$aa56152df820200 = (0, $22uAH$css)([
    "&.mouse-add .mapboxgl-canvas-container{cursor:crosshair;}&.mouse-pointer .mapboxgl-canvas-container{cursor:pointer;}&.mouse-move .mapboxgl-canvas-container{cursor:move;}"
]);
function $f5fc6428701273f5$export$d000fde09addbcd8({ mapRef: mapRef , theme: theme , onChange: onChange , drawing: drawing , featureCollection: featureCollection  }) {
    const mbDrawRef = (0, $22uAH$useRef)();
    (0, $22uAH$useEffect)(()=>{
        const mbMap = mapRef.current;
        if (!mbMap || !onChange || !mbMap._interactive) return;
        const newMbDraw = new (0, $22uAH$mapboxmapboxgldraw)({
            modes: (0, $22uAH$mapboxmapboxgldraw).modes,
            displayControlsDefault: false,
            styles: (0, $izxkF.computeDrawStyles)(theme)
        });
        mbDrawRef.current = newMbDraw;
        mbMap.addControl(newMbDraw, "top-left"); // Store control for later retrieval and imperative method use.
        mbMap._drawControl = newMbDraw;
        const drawCreateListener = (e)=>onChange?.("aoi.draw-finish", {
                feature: e.features[0]
            });
        const drawSelectionListener = (e)=>{
            const mode = newMbDraw.getMode();
            const features = e.features;
            const points = e.points; // A feature is only selected if in simple_select mode. When a feature is
            // selected with direct_select mode we don't count it because it can't be
            // deleted. This is how the plugin works. Go figure.
            const isSelected = points.length || features.length && mode === "simple_select";
            onChange?.("aoi.selection", {
                selected: isSelected,
                context: isSelected ? {
                    features: features,
                    points: points
                } : undefined
            });
        };
        const drawUpdateListener = (e)=>{
            // If the user deletes points from a polygon leaving it with just 2
            // points, it is no longer a polygon and the coordinates array will be
            // empty. In this case don't emit the update event as mbDraw will emit a
            // delete event right after.
            e.features[0].geometry.coordinates.length && onChange?.("aoi.update", {
                feature: e.features[0]
            });
        };
        const drawModeListener = (e)=>e.mode === "simple_select" && onChange?.("aoi.selection", {
                selected: false
            });
        const drawDeleteListener = (e)=>onChange?.("aoi.delete", {
                ids: e.features.map((f)=>f.id)
            });
        mbMap.on("draw.create", drawCreateListener).on("draw.selectionchange", drawSelectionListener).on("draw.modechange", drawModeListener).on("draw.delete", drawDeleteListener).on("draw.update", drawUpdateListener);
        return ()=>{
            if (!mbMap || !newMbDraw) return;
            mbMap.off("draw.create", drawCreateListener).off("draw.selectionchange", drawSelectionListener).off("draw.update", drawUpdateListener);
            mbMap.hasControl(newMbDraw) && mbMap.removeControl(newMbDraw);
        };
    }, [
        mapRef,
        theme,
        onChange
    ]); // Set / delete the feature.
    (0, $22uAH$useEffect)(()=>{
        const mbDraw = mbDrawRef.current;
        if (!mbDraw) return;
        if (featureCollection) mbDraw.set(featureCollection);
        else mbDraw.deleteAll();
    }, [
        featureCollection
    ]); // Start/stop the drawing.
    (0, $22uAH$useEffect)(()=>{
        const mbDraw = mbDrawRef.current;
        if (!mbDraw) return;
        mbDraw.changeMode(drawing ? "draw_polygon" : "simple_select");
    }, [
        drawing
    ]);
}

});
parcelRequire.register("izxkF", function(module, exports) {

$parcel$export(module.exports, "computeDrawStyles", function () { return $57d15a0686aa5cbc$export$1bab65d040a32236; });
const $57d15a0686aa5cbc$export$1bab65d040a32236 = (theme)=>[
        {
            id: "gl-draw-polygon-fill-inactive",
            type: "fill",
            filter: [
                "all",
                [
                    "==",
                    "active",
                    "false"
                ],
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "!=",
                    "mode",
                    "static"
                ]
            ],
            paint: {
                "fill-color": theme.color?.primary,
                "fill-outline-color": theme.color?.primary,
                "fill-opacity": 0.16
            }
        },
        {
            id: "gl-draw-polygon-stroke-inactive",
            type: "line",
            filter: [
                "all",
                [
                    "==",
                    "active",
                    "false"
                ],
                [
                    "==",
                    "$type",
                    "Polygon"
                ],
                [
                    "!=",
                    "mode",
                    "static"
                ]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": theme.color?.primary,
                "line-width": 2
            }
        },
        {
            id: "gl-draw-polygon-fill-active",
            type: "fill",
            filter: [
                "all",
                [
                    "==",
                    "active",
                    "true"
                ],
                [
                    "==",
                    "$type",
                    "Polygon"
                ]
            ],
            paint: {
                "fill-color": theme.color?.primary,
                "fill-outline-color": theme.color?.primary,
                "fill-opacity": 0.16
            }
        },
        {
            id: "gl-draw-polygon-stroke-active",
            type: "line",
            filter: [
                "all",
                [
                    "==",
                    "active",
                    "true"
                ],
                [
                    "==",
                    "$type",
                    "Polygon"
                ]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": theme.color?.primary,
                "line-dasharray": [
                    0.64,
                    2
                ],
                "line-width": 2
            }
        },
        {
            id: "gl-draw-line-active",
            type: "line",
            filter: [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "active",
                    "true"
                ]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": theme.color?.primary,
                "line-dasharray": [
                    0.64,
                    2
                ],
                "line-width": 2
            }
        },
        {
            id: "gl-draw-polygon-and-line-vertex-stroke-inactive",
            type: "circle",
            filter: [
                "all",
                [
                    "==",
                    "meta",
                    "vertex"
                ],
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "!=",
                    "mode",
                    "static"
                ]
            ],
            paint: {
                "circle-radius": 6,
                "circle-color": "#fff"
            }
        },
        {
            id: "gl-draw-polygon-and-line-vertex-inactive",
            type: "circle",
            filter: [
                "all",
                [
                    "==",
                    "meta",
                    "vertex"
                ],
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "!=",
                    "mode",
                    "static"
                ]
            ],
            paint: {
                "circle-radius": 4,
                "circle-color": theme.color?.primary
            }
        },
        {
            id: "gl-draw-point-stroke-active",
            type: "circle",
            filter: [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "active",
                    "true"
                ],
                [
                    "!=",
                    "meta",
                    "midpoint"
                ]
            ],
            paint: {
                "circle-radius": 8,
                "circle-color": "#fff"
            }
        },
        {
            id: "gl-draw-point-active",
            type: "circle",
            filter: [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "!=",
                    "meta",
                    "midpoint"
                ],
                [
                    "==",
                    "active",
                    "true"
                ]
            ],
            paint: {
                "circle-radius": 6,
                "circle-color": theme.color?.primary
            }
        },
        {
            id: "gl-draw-polygon-midpoint",
            type: "circle",
            filter: [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "meta",
                    "midpoint"
                ]
            ],
            paint: {
                "circle-radius": 3,
                "circle-color": "#fff"
            }
        }
    ];

});


parcelRequire.register("6BYP8", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $200167d6d8c47895$export$2e2bcd8739ae039; });










var $78X8I = parcelRequire("78X8I");

var $jfO2i = parcelRequire("jfO2i");

var $2INTM = parcelRequire("2INTM");
const $200167d6d8c47895$var$DropHeader = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-options__DropHeader",
    componentId: "sc-srfk48-0"
})([
    "padding:",
    ";box-shadow:inset 0 -1px 0 0 ",
    ";"
], (0, $22uAH$glsp)(), (0, $22uAH$themeVal)("color.base-100a"));
const $200167d6d8c47895$var$DropBody = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-options__DropBody",
    componentId: "sc-srfk48-1"
})([
    "padding:",
    ";max-height:320px;overflow-y:auto;"
], (0, $22uAH$glsp)(0, 0, 1, 0));
/**
 * Override Dropdown styles to be wider and play well with the shadow scrollbar.
 */ const $200167d6d8c47895$var$MapOptionsDropdown = (0, $22uAH$styledcomponents)((0, $22uAH$Dropdown)).withConfig({
    displayName: "map-options__MapOptionsDropdown",
    componentId: "sc-srfk48-2"
})([
    "padding:0;max-width:16rem;",
    "{margin:0;}",
    "{margin:0;padding-top:0;padding-bottom:0;}"
], (0, $22uAH$DropTitle), (0, $22uAH$DropMenu)); // Why you ask? Very well:
// Mapbox's css has an instruction that sets the hover color for buttons to
// near black. The only way to override it is to increase the specificity and
// we need the button functions to get the correct color.
// The infamous instruction:
// .mapboxgl-ctrl button:not(:disabled):hover {
//   background-color: rgba(0, 0, 0, 0.05);
// }
const $200167d6d8c47895$var$SelectorButton = (0, $22uAH$styledcomponents)((0, $22uAH$Button)).withConfig({
    displayName: "map-options__SelectorButton",
    componentId: "sc-srfk48-3"
})([
    "&&&{",
    "}"
], (0, $22uAH$createButtonStyles)({
    variation: "primary-fill",
    fitting: "skinny"
}));
const $200167d6d8c47895$var$ContentGroup = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-options__ContentGroup",
    componentId: "sc-srfk48-4"
})([
    "display:flex;flex-flow:column nowrap;"
]);
const $200167d6d8c47895$var$ContentGroupHeader = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-options__ContentGroupHeader",
    componentId: "sc-srfk48-5"
})([
    "padding:",
    ";"
], (0, $22uAH$glsp)(1, 1, 0.5, 1));
const $200167d6d8c47895$var$ContentGroupTitle = (0, $22uAH$styledcomponents)((0, $22uAH$Subtitle)).withConfig({
    displayName: "map-options__ContentGroupTitle",
    componentId: "sc-srfk48-6"
})([
    ""
]);
const $200167d6d8c47895$var$ContentGroupBody = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-options__ContentGroupBody",
    componentId: "sc-srfk48-7"
})([
    ""
]);
const $200167d6d8c47895$var$OptionSwitch = (0, $22uAH$styledcomponents)((0, $22uAH$FormSwitch)).withConfig({
    displayName: "map-options__OptionSwitch",
    componentId: "sc-srfk48-8"
})([
    "display:flex;flex-flow:row nowrap;justify-content:space-between;width:100%;font-size:inherit;"
]);
const $200167d6d8c47895$var$OptionMedia = (0, $22uAH$styledcomponents).figure.withConfig({
    displayName: "map-options__OptionMedia",
    componentId: "sc-srfk48-9"
})([
    "position:relative;height:2rem;overflow:hidden;border-radius:",
    ";flex-shrink:0;aspect-ratio:1.5 / 1;background:",
    ";margin-left:auto;&::before{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;content:'';box-shadow:inset 0 0 0 1px ",
    ";border-radius:",
    ";pointer-events:none;}"
], (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.base-50"), (0, $22uAH$themeVal)("color.base-100a"), (0, $22uAH$themeVal)("shape.rounded"));
function $200167d6d8c47895$var$MapOptions(props) {
    const { projection: projection , onProjectionChange: onProjectionChange , basemapStyleId: basemapStyleId , onBasemapStyleIdChange: onBasemapStyleIdChange , labelsOption: labelsOption , boundariesOption: boundariesOption , onOptionChange: onOptionChange  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)($200167d6d8c47895$var$MapOptionsDropdown, {
        triggerElement: (bag)=>/*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$SelectorButton, {
                ...bag,
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonGlobe), {
                    meaningful: true,
                    title: "Configure map options"
                })
            }),
        direction: "down",
        alignment: "left",
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$DropHeader, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropTitle), {
                    children: "Map options"
                })
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)($200167d6d8c47895$var$DropBody, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)($200167d6d8c47895$var$ContentGroup, {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupHeader, {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupTitle, {
                                    children: "Style"
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupBody, {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenu), {
                                    as: "ol",
                                    children: (0, $2INTM.BASEMAP_STYLES).map((basemap)=>/*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                            children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$DropMenuItem), {
                                                href: "#",
                                                active: basemapStyleId === basemap.id,
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    onBasemapStyleIdChange?.(basemap.id);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                                        children: basemap.label
                                                    }),
                                                    /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$OptionMedia, {
                                                        children: /*#__PURE__*/ (0, $22uAH$jsx)("img", {
                                                            src: basemap.thumbnailUrl,
                                                            alt: "Map style thumbnail"
                                                        })
                                                    })
                                                ]
                                            })
                                        }, basemap.id))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)($200167d6d8c47895$var$ContentGroup, {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupHeader, {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupTitle, {
                                    children: "Details"
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupBody, {
                                children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$DropMenu), {
                                    children: [
                                        /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenuItem), {
                                                as: "span",
                                                children: /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$OptionSwitch, {
                                                    name: "labels",
                                                    id: "labels",
                                                    value: "labels",
                                                    checked: labelsOption,
                                                    onChange: (e)=>{
                                                        onOptionChange?.("labels", e.target.checked);
                                                    },
                                                    children: "Labels"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenuItem), {
                                                as: "span",
                                                children: /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$OptionSwitch, {
                                                    name: "boundaries",
                                                    id: "boundaries",
                                                    value: "boundaries",
                                                    checked: boundariesOption,
                                                    onChange: (e)=>{
                                                        onOptionChange?.("boundaries", e.target.checked);
                                                    },
                                                    children: "Boundaries"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)($200167d6d8c47895$var$ContentGroup, {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupHeader, {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupTitle, {
                                    children: "Projection"
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)($200167d6d8c47895$var$ContentGroupBody, {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenu), {
                                    as: "ol",
                                    children: (0, $jfO2i.projectionsList).map((proj)=>{
                                        if (proj.isCustom && proj.conicValues) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $78X8I.ProjectionItemCustom), {
                                            onChange: onProjectionChange,
                                            id: proj.id,
                                            label: proj.label,
                                            defaultConicValues: proj.conicValues,
                                            activeProjection: projection
                                        }, proj.id);
                                        else if (proj.conicValues) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $78X8I.ProjectionItemConic), {
                                            onChange: onProjectionChange,
                                            id: proj.id,
                                            label: proj.label,
                                            defaultConicValues: proj.conicValues,
                                            activeProjection: projection
                                        }, proj.id);
                                        else return /*#__PURE__*/ (0, $22uAH$jsx)((0, $78X8I.ProjectionItemSimple), {
                                            onChange: onProjectionChange,
                                            id: proj.id,
                                            label: proj.label,
                                            activeProjection: projection
                                        }, proj.id);
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $200167d6d8c47895$export$2e2bcd8739ae039 = $200167d6d8c47895$var$MapOptions;

});
parcelRequire.register("78X8I", function(module, exports) {

$parcel$export(module.exports, "ProjectionItemSimple", function () { return $151cbdf8952c5635$export$10f0dc3dd551f91e; });
$parcel$export(module.exports, "ProjectionItemConic", function () { return $151cbdf8952c5635$export$123ba8d71f8c5564; });
$parcel$export(module.exports, "ProjectionItemCustom", function () { return $151cbdf8952c5635$export$1d1f459eeb511220; });







var $1qCbH = parcelRequire("1qCbH");

var $jfO2i = parcelRequire("jfO2i");

var $bVrER = parcelRequire("bVrER");
const $151cbdf8952c5635$var$ProjectionOptionsForm = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "projection-items__ProjectionOptionsForm",
    componentId: "sc-purxuq-0"
})([
    "padding:",
    ";",
    "{padding-top:",
    ";padding-bottom:0;border:none;}",
    "{padding-top:",
    ";padding-bottom:",
    ";}"
], (0, $22uAH$glsp)(0, 1), (0, $22uAH$FormFieldsetHeader), (0, $22uAH$glsp)(0.5), (0, $bVrER.FormFieldsetBodyColumns), (0, $22uAH$glsp)(0.5), (0, $22uAH$glsp)(0.5));
const $151cbdf8952c5635$var$projectionConicCenter = [
    {
        id: "lng",
        label: "Center Longitude",
        validate: (0, $jfO2i.validateLon)
    },
    {
        id: "lat",
        label: "Center Latitude",
        validate: (0, $jfO2i.validateLat)
    }
];
const $151cbdf8952c5635$var$projectionConicParallel = [
    {
        id: "sParLat",
        label: "Southern Parallel Lat",
        validate: (0, $jfO2i.validateLat)
    },
    {
        id: "nParLat",
        label: "Northern Parallel Lat",
        validate: (0, $jfO2i.validateLat)
    }
];
function $151cbdf8952c5635$export$10f0dc3dd551f91e(props) {
    const { onChange: onChange , id: id , label: label , activeProjection: activeProjection  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenuItem), {
            active: id === activeProjection.id,
            href: "#",
            onClick: (e)=>{
                e.preventDefault();
                onChange({
                    id: id
                });
            },
            children: label
        })
    });
}
function $151cbdf8952c5635$export$123ba8d71f8c5564(props) {
    const { onChange: onChange , id: id , label: label , defaultConicValues: defaultConicValues , activeProjection: activeProjection  } = props;
    const isActive = id === activeProjection.id;
    const activeConicValues = isActive && activeProjection.center ? {
        center: activeProjection.center,
        parallels: activeProjection.parallels
    } : null; // Keep the values the user enters to be able to restore them whenever they
    // switch projections.
    const [conicValues, setConicValues] = (0, $22uAH$useState)(activeConicValues ?? defaultConicValues); // Store the conic values for the selected projection and register the change
    // for the parent.
    const onChangeConicValues = (value, field, idx)=>{
        const newConic = {
            ...conicValues,
            [field]: Object.assign([], conicValues[field], {
                [idx]: value
            })
        };
        setConicValues(newConic);
        onChange({
            id: id,
            ...newConic
        });
    };
    return /*#__PURE__*/ (0, $22uAH$jsxs)("li", {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenuItem), {
                active: isActive,
                href: "#" // data-dropdown='click.close'
                ,
                onClick: (e)=>{
                    e.preventDefault();
                    onChange({
                        ...conicValues,
                        id: id
                    });
                },
                children: label
            }),
            isActive && /*#__PURE__*/ (0, $22uAH$jsxs)($151cbdf8952c5635$var$ProjectionOptionsForm, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bVrER.FormFieldsetCompact), {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormFieldsetHeader), {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormLegend), {
                                    children: "Center Lon/Lat"
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bVrER.FormFieldsetBodyColumns), {
                                children: $151cbdf8952c5635$var$projectionConicCenter.map((field, idx)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $1qCbH.default), {
                                        hideHeader: true,
                                        inputType: "text",
                                        inputSize: "small",
                                        id: `center-${field.id}`,
                                        name: `center-${field.id}`,
                                        label: field.label,
                                        value: conicValues.center?.[idx],
                                        validate: field.validate,
                                        onChange: (value)=>{
                                            onChangeConicValues(Number(value), "center", idx);
                                        }
                                    }, field.id))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bVrER.FormFieldsetCompact), {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormFieldsetHeader), {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormLegend), {
                                    children: "S/N Parallels"
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bVrER.FormFieldsetBodyColumns), {
                                children: $151cbdf8952c5635$var$projectionConicParallel.map((field, idx)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $1qCbH.default), {
                                        hideHeader: true,
                                        inputType: "text",
                                        inputSize: "small",
                                        id: `parallels-${field.id}`,
                                        name: `parallels-${field.id}`,
                                        label: field.label,
                                        value: conicValues.parallels?.[idx].toString() ?? "",
                                        validate: field.validate,
                                        onChange: (value)=>{
                                            onChangeConicValues(Number(value), "parallels", idx);
                                        }
                                    }, field.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function $151cbdf8952c5635$export$1d1f459eeb511220(props) {
    const { onChange: onChange , id: id , label: label , defaultConicValues: defaultConicValues , activeProjection: activeProjection  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenuItem), {
            active: id === activeProjection.id,
            href: "#",
            onClick: (e)=>{
                e.preventDefault();
                onChange({
                    id: id,
                    ...defaultConicValues
                });
            },
            children: label
        })
    });
}

});
parcelRequire.register("1qCbH", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $61355651e2ab1fa3$export$2e2bcd8739ae039; });




var $9YTjm = parcelRequire("9YTjm");
function $61355651e2ab1fa3$export$2e2bcd8739ae039(props) {
    const { id: id , name: name , label: label , value: value , validate: validate , inputType: inputType , inputSize: inputSize , placeholder: placeholder , onChange: onChange , helper: helper , hideHeader: hideHeader  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormGroupStructure), {
        id: id,
        label: label,
        hideHeader: hideHeader,
        helper: helper,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $9YTjm.default), {
            value: value.toString(),
            validate: validate,
            onChange: onChange,
            render: ({ ref: ref , errored: errored , value: value , handlers: handlers  })=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormInput), {
                    ref: ref,
                    type: inputType,
                    name: name,
                    id: id,
                    invalid: errored,
                    stressed: errored,
                    size: inputSize,
                    value: value,
                    placeholder: placeholder?.toString(),
                    ...handlers
                })
        })
    });
}

});
parcelRequire.register("9YTjm", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $9fe58b250a08c428$export$2e2bcd8739ae039; });



var $7JTS5 = parcelRequire("7JTS5");
function $9fe58b250a08c428$export$2e2bcd8739ae039(props) {
    const { render: render , value: value , validate: validate , onChange: onChange  } = props;
    const fieldRef = (0, $22uAH$useRef)(null);
    const [errored, setErrored] = (0, $7JTS5.useSafeState)(false);
    const [draftValue, setDraftValue] = (0, $7JTS5.useSafeState)(value); // Update internal state (draft), when incoming value changes.
    (0, $22uAH$useEffect)(()=>{
        // setDraftValue is a hook and wont change.
        setDraftValue(value);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [
        value
    ]);
    const validateField = ()=>{
        if (!validate(draftValue)) {
            setErrored(true); // We have to clear the error state after the animation so it can error
            // again.
            setTimeout(()=>{
                setErrored(false);
                setDraftValue(value);
            }, 550);
        } else {
            // all good.
            setErrored(false);
            onChange(draftValue, setDraftValue);
        }
    }; // setDraftValue is a hook and wont change.
    const onChangeHandler = (0, $22uAH$useCallback)((e)=>setDraftValue(e.currentTarget.value), /* eslint-disable-next-line react-hooks/exhaustive-deps */ []);
    const onKeypressHandler = (e)=>{
        if (e.key === "Enter") {
            if (validate(draftValue)) // If the field is valid blur which will trigger validation a store
            // the value.
            fieldRef.current?.blur();
            else validateField();
        }
    };
    return render({
        ref: fieldRef,
        errored: errored,
        value: draftValue,
        handlers: {
            onKeyPress: onKeypressHandler,
            onBlur: validateField,
            onChange: onChangeHandler
        }
    });
}
$9fe58b250a08c428$export$2e2bcd8739ae039.propTypes = {
    value: (0, $22uAH$proptypes).oneOfType([
        (0, $22uAH$proptypes).string,
        (0, $22uAH$proptypes).number
    ]),
    onChange: (0, $22uAH$proptypes).func,
    validate: (0, $22uAH$proptypes).func,
    render: (0, $22uAH$proptypes).func.isRequired
};

});
parcelRequire.register("7JTS5", function(module, exports) {

$parcel$export(module.exports, "useSafeState", function () { return $2abfc3518e00ad58$export$31ed1f10e45d55c0; });

const $2abfc3518e00ad58$export$31ed1f10e45d55c0 = (initialValue)=>{
    const isMountedRef = (0, $22uAH$useRef)(true);
    const [currentValue, setCurrentValue] = (0, $22uAH$useState)(initialValue);
    (0, $22uAH$useEffect)(()=>{
        return ()=>{
            isMountedRef.current = false;
        };
    }, [
        isMountedRef
    ]);
    const setSafeState = (0, $22uAH$useCallback)((value)=>{
        if (isMountedRef.current) setCurrentValue(value);
    }, []);
    return [
        currentValue,
        setSafeState
    ];
};

});



parcelRequire.register("bVrER", function(module, exports) {

$parcel$export(module.exports, "FormFieldsetCompact", function () { return $8aea78e2cb01531e$export$60a7ef775c6d903e; });
$parcel$export(module.exports, "FormFieldsetBodyColumns", function () { return $8aea78e2cb01531e$export$6ced32633f1c4e66; });



const $8aea78e2cb01531e$export$60a7ef775c6d903e = (0, $22uAH$styledcomponents)((0, $22uAH$FormFieldset)).withConfig({
    displayName: "fieldset__FormFieldsetCompact",
    componentId: "sc-1ic20zf-0"
})([
    "background:none;border:none;margin:",
    ";",
    "{padding-left:",
    ";padding-right:",
    ";}",
    "{padding:",
    ";}"
], (0, $22uAH$glsp)(0, -1), (0, $22uAH$FormFieldsetHeader), (0, $22uAH$glsp)(), (0, $22uAH$glsp)(), (0, $22uAH$FormFieldsetBody), (0, $22uAH$glsp)());
const $8aea78e2cb01531e$export$6ced32633f1c4e66 = (0, $22uAH$styledcomponents)((0, $22uAH$FormFieldsetBody)).withConfig({
    displayName: "fieldset__FormFieldsetBodyColumns",
    componentId: "sc-1ic20zf-1"
})([
    "display:grid;grid-template-columns:1fr 1fr;grid-gap:",
    ";",
    "{min-width:0;}"
], (0, $22uAH$glsp)(), (0, $22uAH$FormInput));

});


parcelRequire.register("2INTM", function(module, exports) {

$parcel$export(module.exports, "getStyleUrl", function () { return $b33a9d7794040375$export$6671c68d89d2abfe; });
$parcel$export(module.exports, "BASEMAP_STYLES", function () { return $b33a9d7794040375$export$2068bf8566a291d8; });
$parcel$export(module.exports, "DEFAULT_MAP_STYLE_URL", function () { return $b33a9d7794040375$export$ce60c4e346c6b899; });
$parcel$export(module.exports, "GROUPS_BY_OPTION", function () { return $b33a9d7794040375$export$5ccc7e03a7dc85dd; });
const $b33a9d7794040375$export$a7aa9f22b12c9700 = "https://api.mapbox.com/styles/v1/covid-nasa";
const $b33a9d7794040375$export$6671c68d89d2abfe = (mapboxId)=>`${$b33a9d7794040375$export$a7aa9f22b12c9700}/${mapboxId}?access_token=${undefined}`;
const $b33a9d7794040375$export$2068bf8566a291d8 = [
    {
        id: "satellite",
        label: "Satellite",
        mapboxId: "cldu1cb8f00ds01p6gi583w1m",
        thumbnailUrl: `https://api.mapbox.com/styles/v1/covid-nasa/cldu1cb8f00ds01p6gi583w1m/static/-9.14,38.7,10.5,0/480x320?access_token=${undefined}`
    },
    {
        id: "dark",
        label: "Default dark",
        mapboxId: "cldu14gii006801mgq3dn1jpd",
        thumbnailUrl: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-9.14,38.7,10.5,0/480x320?access_token=${undefined}`
    },
    {
        id: "light",
        label: "Default light",
        mapboxId: "cldu0tceb000701qnrl7p9woh",
        thumbnailUrl: `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-9.14,38.7,10.5,0/480x320?access_token=${undefined}`
    },
    {
        id: "topo",
        label: "Topo",
        mapboxId: "cldu1yayu00au01qqrbdahb3m",
        thumbnailUrl: `https://api.mapbox.com/styles/v1/covid-nasa/cldu1yayu00au01qqrbdahb3m/static/-9.14,38.7,10.5,0/480x320?access_token=${undefined}`
    }
];
const $b33a9d7794040375$export$d87b8574f22bdf25 = "satellite"; // Default style used in stories and analysis, satellite no labels
const $b33a9d7794040375$export$ce60c4e346c6b899 = "mapbox://styles/covid-nasa/ckb01h6f10bn81iqg98ne0i2y";
const $b33a9d7794040375$export$5ccc7e03a7dc85dd = {
    labels: [
        "Natural features, natural-labels",
        "Place labels, place-labels",
        "Point of interest labels, poi-labels",
        "Road network, road-labels",
        "Transit, transit-labels"
    ],
    boundaries: [
        "Country Borders, country-borders",
        "Administrative boundaries, admin"
    ]
};

});


parcelRequire.register("5QYGH", function(module, exports) {

$parcel$export(module.exports, "useMapboxControl", function () { return $a578df230c711717$export$d029fd9d0e1c24fa; });




function $a578df230c711717$export$d029fd9d0e1c24fa(renderFn, deps = []) {
    const rootRef = (0, $22uAH$useRef)();
    const elementRef = (0, $22uAH$useRef)();
    const renderFnRef = (0, $22uAH$useRef)(()=>({}));
    const theme = (0, $22uAH$useTheme)(); // Use a ref so that we don't need to receive a memoized renderFn
    renderFnRef.current = ()=>{
        if (!rootRef.current) return;
        rootRef.current.render(/*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ThemeProvider), {
            theme: theme,
            children: renderFn(elementRef.current)
        }));
    };
    (0, $22uAH$useEffect)(()=>{
        renderFnRef.current();
    }, deps);
    return (0, $22uAH$useMemo)(()=>({
            onAdd () {
                const el = document.createElement("div");
                el.className = "mapboxgl-ctrl";
                elementRef.current = el;
                rootRef.current = (0, $22uAH$createRoot)(el);
                renderFnRef.current();
                return el;
            },
            onRemove () {
                if (!rootRef.current) return; // Quicker way to access the node, instead of storing the created
                // element in a ref.
                // @ts-expect-error _internalRoot does not exist
                const node = rootRef.current._internalRoot.containerInfo; // Defer unmounting to next tick to avoid error:
                // Attempted to synchronously unmount a root while React was already
                // rendering.
                setTimeout(()=>rootRef.current?.unmount(), 1);
                node.remove();
            }
        }), []);
}

});

parcelRequire.register("5Mz1W", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $3954685fdc4f3676$export$2e2bcd8739ae039; });






var $3DhRT = parcelRequire("3DhRT");

var $2RWby = parcelRequire("2RWby");
const $3954685fdc4f3676$var$MapCoordsWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-coords__MapCoordsWrapper",
    componentId: "sc-z1p4tv-0"
})([
    "width:100vw;pointer-events:none !important;",
    "{pointer-events:auto;background:",
    ";font-weight:",
    ";font-size:0.75rem;}&& ",
    ":hover{background:",
    ";}"
], (0, $22uAH$Button), (0, $22uAH$themeVal)("color.base-400a"), (0, $22uAH$themeVal)("type.base.regular"), (0, $22uAH$Button), (0, $22uAH$themeVal)("color.base-500"));
const $3954685fdc4f3676$var$getCoords = (mapInstance)=>{
    const mapCenter = mapInstance.getCenter();
    return {
        lng: (0, $2RWby.round)(mapCenter.lng, 4),
        lat: (0, $2RWby.round)(mapCenter.lat, 4)
    };
};
function $3954685fdc4f3676$export$2e2bcd8739ae039(props) {
    const { mapInstance: mapInstance  } = props;
    const [position, setPosition] = (0, $22uAH$useState)($3954685fdc4f3676$var$getCoords(mapInstance));
    (0, $22uAH$useEffect)(()=>{
        const posListener = (e)=>{
            setPosition($3954685fdc4f3676$var$getCoords(e.target));
        };
        mapInstance.on("moveend", posListener);
        return ()=>{
            mapInstance.off("moveend", posListener);
        };
    }, [
        mapInstance
    ]);
    const { lng: lng , lat: lat  } = position;
    const value = `W ${lng}, N ${lat}`;
    return /*#__PURE__*/ (0, $22uAH$jsx)($3954685fdc4f3676$var$MapCoordsWrapper, {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $3DhRT.CopyField), {
            value: value,
            children: ({ ref: ref , showCopiedMsg: showCopiedMsg  })=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Button), {
                    ref: ref,
                    // not up to date
                    variation: "achromic-text",
                    size: "small",
                    children: showCopiedMsg ? "Copied!" : value
                })
        })
    });
}

});
parcelRequire.register("3DhRT", function(module, exports) {

$parcel$export(module.exports, "CopyField", function () { return $a5420c874387d0bc$export$61c0f748c7c054a3; });


function $a5420c874387d0bc$export$61c0f748c7c054a3(props) {
    const { value: value , children: children  } = props;
    const [showCopiedMsg, setShowCopiedMsg] = (0, $22uAH$useState)(false);
    const triggerElement = (0, $22uAH$useRef)();
    const copyValue = (0, $22uAH$useRef)(value);
    copyValue.current = value;
    (0, $22uAH$useEffect)(()=>{
        if (!triggerElement.current) throw new Error("ref for trigger element is not set");
        let copiedMsgTimeout;
        const clipboard = new (0, $22uAH$clipboard)(triggerElement.current, {
            text: ()=>copyValue.current
        });
        clipboard.on("success", ()=>{
            setShowCopiedMsg(true);
            copiedMsgTimeout = setTimeout(()=>{
                setShowCopiedMsg(false);
            }, 2000);
        });
        return ()=>{
            clipboard.destroy();
            if (copiedMsgTimeout) clearTimeout(copiedMsgTimeout);
        };
    }, []);
    const val = showCopiedMsg ? "Copied!" : value;
    return children({
        value: val,
        ref: triggerElement,
        originalValue: value,
        showCopiedMsg: showCopiedMsg
    });
}

});



parcelRequire.register("bluRW", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $785026e544a2ad33$export$2e2bcd8739ae039; });






var $de7zf = parcelRequire("de7zf");
const $785026e544a2ad33$var$fadeDuration = 240;
const $785026e544a2ad33$var$Message = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "map-message__Message",
    componentId: "sc-1od9et6-0"
})([
    "position:absolute;z-index:2;transform:translate(-50%,0);padding:",
    ";box-shadow:",
    ";border-radius:",
    ";font-size:0.75rem;line-height:1rem;text-align:center;display:flex;align-items:center;gap:",
    ";",
    " ",
    " transition:all ",
    "ms ease-in-out;",
    ""
], (0, $22uAH$glsp)(0.5, 0.75), (0, $22uAH$themeVal)("boxShadow.elevationA"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$glsp)(0.5), ({ position: position  })=>{
    if (position === "left") return "left: 25%;";
    if (position === "right") return "left: 75%;";
    return "left: 50%;";
}, ({ isInvalid: isInvalid  })=>isInvalid ? (0, $22uAH$css)([
        "background:",
        ";color:",
        ";"
    ], (0, $22uAH$themeVal)("color.danger"), (0, $22uAH$themeVal)("color.surface")) : (0, $22uAH$css)([
        "background:#fff;"
    ]), $785026e544a2ad33$var$fadeDuration, ({ show: show  })=>show ? (0, $22uAH$css)([
        "visibility:visible;top:",
        ";opacity:1;"
    ], (0, $de7zf.variableGlsp)()) : (0, $22uAH$css)([
        "visibility:hidden;top:",
        ";opacity:0;"
    ], (0, $de7zf.variableGlsp)(-1)));
function $785026e544a2ad33$export$2e2bcd8739ae039(props) {
    const { id: id , children: children , active: active , isInvalid: isInvalid , position: position  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$TransitionGroup), {
        component: null,
        children: active && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Transition), {
            timeout: $785026e544a2ad33$var$fadeDuration,
            children: (state)=>{
                return /*#__PURE__*/ (0, $22uAH$jsx)($785026e544a2ad33$var$Message, {
                    show: state === "entered" || state === "entering",
                    isInvalid: isInvalid,
                    position: position,
                    children: children
                });
            }
        }, id)
    });
}

});

parcelRequire.register("8r9VA", function(module, exports) {

$parcel$export(module.exports, "LayerLegend", function () { return $4d8a7a8341818702$export$e5ffa64f7b07ad2f; });
$parcel$export(module.exports, "LayerLegendContainer", function () { return $4d8a7a8341818702$export$94045d92df5da6f0; });










var $fwaez = parcelRequire("fwaez");

var $2RWby = parcelRequire("2RWby");

var $de7zf = parcelRequire("de7zf");

var $2Lh3p = parcelRequire("2Lh3p");
const $4d8a7a8341818702$var$makeGradient = (stops)=>{
    if (stops.length === 1) return stops[0];
    const d = 100 / (stops.length - 1);
    const steps = stops.map((s, i)=>`${s} ${i * d}%`);
    return `linear-gradient(to right, ${steps.join(", ")})`;
};
const $4d8a7a8341818702$var$printLegendVal = (val)=>{
    const number = Number(val);
    if (isNaN(number)) return val;
    if (number === 0) return 0;
    if (Math.abs(number) < 9999 && Math.abs(number) > 0.0009) return (0, $2RWby.formatThousands)(number, {
        decimals: 3
    });
    else return (0, $2RWby.formatAsScientificNotation)(number, 2);
};
const $4d8a7a8341818702$var$formatTooltipValue = (rawVal, unit)=>{
    if (rawVal === 0) return 0;
    let value;
    if (Math.abs(rawVal) < 9999 && Math.abs(rawVal) > 0.0009) value = (0, $2RWby.round)(rawVal, 3);
    else value = (0, $2RWby.formatAsScientificNotation)(rawVal, 2);
    return unit?.label ? `${value} ${unit.label}` : value;
};
const $4d8a7a8341818702$export$52652d7e4b3b7dee = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "layer-legend__LegendContainer",
    componentId: "sc-icl0dq-0"
})([
    "position:absolute;z-index:8;bottom:",
    ";right:",
    ";display:flex;flex-flow:column nowrap;box-shadow:",
    ";border-radius:",
    ";background-color:",
    ";&.reveal-enter{opacity:0;bottom:4rem;}&.reveal-exit{opacity:1;bottom:",
    ";}&.reveal-enter-active{opacity:1;bottom:",
    ";}&.reveal-exit-active{opacity:0;bottom:4rem;}&.reveal-enter-active,&.reveal-exit-active{transition:bottom 240ms ease-in-out,opacity 240ms ease-in-out;}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("boxShadow.elevationB"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.surface"), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
const $4d8a7a8341818702$var$LayerLegendSelf = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "layer-legend__LayerLegendSelf",
    componentId: "sc-icl0dq-1"
})([
    "display:flex;flex-flow:column nowrap;width:16rem;border-bottom:1px solid ",
    ";",
    "{padding:",
    ";}&:only-child{",
    "{padding:",
    ";}border-bottom:0;}"
], (0, $22uAH$themeVal)("color.base-100"), (0, $2Lh3p.WidgetItemHeader), (0, $de7zf.variableGlsp)(0.25, 0.5), (0, $2Lh3p.WidgetItemHeader), (0, $de7zf.variableGlsp)(0.5));
const $4d8a7a8341818702$var$LegendList = (0, $22uAH$styledcomponents).dl.withConfig({
    displayName: "layer-legend__LegendList",
    componentId: "sc-icl0dq-2"
})([
    "display:grid;grid-gap:0 ",
    ";grid-auto-columns:minmax(1rem,1fr);grid-auto-flow:column;dt{grid-row:1;}dd{font-size:0.75rem;line-height:1rem;grid-row:2;display:flex;justify-content:space-between;> *{width:8rem;> *{",
    " display:block;}&:last-child:not(:first-child){text-align:right;}}&:not(:first-of-type):not(:last-of-type){",
    "}}.unit{grid-row:3;width:100%;text-align:center;font-size:0.75rem;line-height:1rem;justify-content:center;}"
], (0, $22uAH$glsp)(0.125), (0, $22uAH$truncated)(), (0, $22uAH$visuallyHidden)());
const $4d8a7a8341818702$var$LegendSwatch = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "layer-legend__LegendSwatch",
    componentId: "sc-icl0dq-3"
})([
    "position:relative;display:block;font-size:0;height:0.5rem;border-radius:",
    ";background:",
    ";margin:0 0 ",
    " 0;box-shadow:inset 0 0 0 1px ",
    ";cursor:",
    ";"
], (0, $22uAH$themeVal)("shape.rounded"), ({ stops: stops  })=>typeof stops === "string" ? stops : $4d8a7a8341818702$var$makeGradient(stops), (0, $22uAH$glsp)(0.125), (0, $22uAH$themeVal)("color.base-100a"), ({ hasHelp: hasHelp  })=>hasHelp ? "help" : "auto");
const $4d8a7a8341818702$var$LayerLegendTitle = (0, $22uAH$styledcomponents).h3.withConfig({
    displayName: "layer-legend__LayerLegendTitle",
    componentId: "sc-icl0dq-4"
})([
    "font-size:",
    ";line-height:",
    ";"
], (0, $de7zf.variableBaseType)("0.75rem"), (0, $de7zf.variableBaseType)("1rem"));
const $4d8a7a8341818702$var$LegendBody = (0, $22uAH$styledcomponents)((0, $2Lh3p.WidgetItemBodyInner)).withConfig({
    displayName: "layer-legend__LegendBody",
    componentId: "sc-icl0dq-5"
})([
    "padding:0;min-height:32px;max-height:120px;overflow-y:auto;overscroll-behavior:none;.scroll-inner{padding:",
    ";}.shadow-bottom{border-radius:",
    ";}"
], (0, $de7zf.variableGlsp)(0.5, 0.75), (0, $22uAH$themeVal)("shape.rounded"));
function $4d8a7a8341818702$export$e5ffa64f7b07ad2f(props) {
    const { id: id , type: type , title: title , description: description  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$AccordionFold), {
        id: id,
        forwardedAs: $4d8a7a8341818702$var$LayerLegendSelf,
        renderHeader: ({ isExpanded: isExpanded , toggleExpanded: toggleExpanded  })=>/*#__PURE__*/ (0, $22uAH$jsxs)((0, $2Lh3p.WidgetItemHeader), {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $2Lh3p.WidgetItemHGroup), {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $2Lh3p.WidgetItemHeadline), {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$var$LayerLegendTitle, {
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Toolbar), {
                                size: "small",
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$ToolbarIconButton), {
                                    variation: "base-text",
                                    active: isExpanded,
                                    onClick: toggleExpanded,
                                    children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCircleInformation), {
                                        title: "Information about layer",
                                        meaningful: true
                                    })
                                })
                            })
                        ]
                    }),
                    type === "categorical" && /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$export$8a163c591505fc2a, {
                        type: "categorical",
                        stops: props.stops
                    }),
                    type === "gradient" && /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$export$bbc7702caff18c73, {
                        type: "gradient",
                        stops: props.stops,
                        unit: props.unit,
                        min: props.min,
                        max: props.max
                    })
                ]
            }),
        renderBody: ()=>/*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$var$LegendBody, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                    className: "scroll-inner",
                    children: description || /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                        children: "No info available for this layer."
                    })
                })
            })
    });
}
function $4d8a7a8341818702$export$94045d92df5da6f0(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$export$52652d7e4b3b7dee, {
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$AccordionManager), {
            children: props.children
        })
    });
}
function $4d8a7a8341818702$export$8a163c591505fc2a(props) {
    const { stops: stops  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$var$LegendList, {
        children: stops.map((stop)=>/*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment), {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)("dt", {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                            content: stop.label,
                            children: /*#__PURE__*/ (0, $22uAH$jsx)($4d8a7a8341818702$var$LegendSwatch, {
                                stops: stop.color,
                                hasHelp: true,
                                children: stop.color
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("dd", {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                            children: /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                children: stop.label
                            })
                        })
                    })
                ]
            }, stop.color))
    });
}
function $4d8a7a8341818702$export$bbc7702caff18c73(props) {
    const { stops: stops , min: min , max: max , unit: unit  } = props;
    const [hoverVal, setHoverVal] = (0, $22uAH$useState)(0);
    const moveListener = (0, $22uAH$useCallback)((e)=>{
        const width = e.nativeEvent.target.clientWidth;
        const scale = (0, $22uAH$scaleLinear)().domain([
            0,
            width
        ]).range([
            Number(min),
            Number(max)
        ]);
        setHoverVal(scale(e.nativeEvent.layerX));
    }, [
        min,
        max
    ]);
    const hasNumericLegend = !isNaN(Number(min) + Number(max));
    const tipText = $4d8a7a8341818702$var$formatTooltipValue(hoverVal, unit);
    return /*#__PURE__*/ (0, $22uAH$jsxs)($4d8a7a8341818702$var$LegendList, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("dt", {
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                    disabled: !hasNumericLegend,
                    content: tipText,
                    followCursor: "horizontal",
                    plugins: [
                        (0, $22uAH$followCursor)
                    ],
                    children: /*#__PURE__*/ (0, $22uAH$jsxs)($4d8a7a8341818702$var$LegendSwatch, {
                        stops: stops,
                        onMouseMove: moveListener,
                        children: [
                            stops[0],
                            " to ",
                            stops[stops.length - 1]
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)("dd", {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                        children: $4d8a7a8341818702$var$printLegendVal(min)
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                        children: $4d8a7a8341818702$var$printLegendVal(max)
                    })
                ]
            }),
            unit?.label && /*#__PURE__*/ (0, $22uAH$jsx)("dd", {
                className: "unit",
                children: unit.label
            })
        ]
    });
}

});
parcelRequire.register("fwaez", function(module, exports) {

$parcel$export(module.exports, "Tip", function () { return $62fb95c0a6801063$export$c92c6401b52a9298; });




const $62fb95c0a6801063$export$c92c6401b52a9298 = (0, $22uAH$tippyjsreact); // Wrap in body to increase specificity.
const $62fb95c0a6801063$export$27afe0e50870a053 = ()=>(0, $22uAH$css)([
        "body{[data-tippy-root]{z-index:",
        " !important;}.tippy-box{background-color:",
        ";border-radius:",
        ";}.tippy-arrow{color:",
        ";}.tippy-content{padding:",
        ";}}"
    ], (0, $22uAH$themeVal)("zIndices.tooltip"), (0, $22uAH$themeVal)("color.base"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.base"), (0, $22uAH$glsp)(0.25, 0.5));

});

parcelRequire.register("2Lh3p", function(module, exports) {

$parcel$export(module.exports, "WidgetItemHeader", function () { return $4dc3467f2a37f5e1$export$3123be1a721df363; });
$parcel$export(module.exports, "WidgetItemHeadline", function () { return $4dc3467f2a37f5e1$export$d1565d8f53bba7e2; });
$parcel$export(module.exports, "WidgetItemHGroup", function () { return $4dc3467f2a37f5e1$export$70f9fb9939eb10bc; });
$parcel$export(module.exports, "WidgetItemBodyInner", function () { return $4dc3467f2a37f5e1$export$bac90c2eeb71223e; });





var $de7zf = parcelRequire("de7zf");

var $5InEa = parcelRequire("5InEa");
const $4dc3467f2a37f5e1$var$panelWidth = {
    xsmall: "20rem",
    small: "22rem",
    medium: "24rem"
};
const $4dc3467f2a37f5e1$export$c96c9c04e0cba007 = 240;
const $4dc3467f2a37f5e1$export$2ddb90ad54e5f587 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__Panel",
    componentId: "sc-164gfnn-0"
})([
    "position:relative;z-index:10;display:flex;flex-direction:column;width:",
    ";margin-left:-",
    ";transition:margin ",
    "ms ease 0s;",
    " ",
    " ",
    " ",
    " &::after{content:'';position:absolute;z-index:-1;background:transparent;width:0;height:100%;transition:background 0.64s ease 0s;",
    "}"
], $4dc3467f2a37f5e1$var$panelWidth.xsmall, $4dc3467f2a37f5e1$var$panelWidth.xsmall, $4dc3467f2a37f5e1$export$c96c9c04e0cba007, (0, $22uAH$media).smallUp`
    width: ${$4dc3467f2a37f5e1$var$panelWidth.small};
    margin-left: -${$4dc3467f2a37f5e1$var$panelWidth.small};
  `, (0, $22uAH$media).mediumUp`
    width: ${$4dc3467f2a37f5e1$var$panelWidth.medium};
    margin-left: -${$4dc3467f2a37f5e1$var$panelWidth.medium};
  `, (0, $22uAH$media).mediumDown`
    position: absolute;
    inset: 0;
  `, ({ revealed: revealed  })=>revealed && (0, $22uAH$css)([
        "&{margin-left:0;}"
    ]), ({ revealed: revealed  })=>revealed && (0, $22uAH$css)([
        "",
        ""
    ], (0, $22uAH$media).mediumDown`
          background: ${(0, $22uAH$themeVal)("color.base-400a")};
          width: 200vw;
        `));
const $4dc3467f2a37f5e1$export$f16f65e3038f339e = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelInner",
    componentId: "sc-164gfnn-1"
})([
    "display:flex;flex-direction:column;flex-grow:1;background:",
    ";box-shadow:",
    ";"
], (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("boxShadow.elevationD"));
const $4dc3467f2a37f5e1$export$968713404ca1c9aa = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelHeader",
    componentId: "sc-164gfnn-2"
})([
    "position:relative;"
]);
const $4dc3467f2a37f5e1$export$8a3578535ed7645a = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelHeadline",
    componentId: "sc-164gfnn-3"
})([
    "",
    ""
], (0, $22uAH$visuallyHidden)());
const $4dc3467f2a37f5e1$export$91face44e1470994 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelActions",
    componentId: "sc-164gfnn-4"
})([
    ""
]);
const $4dc3467f2a37f5e1$export$86de09faaa70680d = (0, $22uAH$styledcomponents).h2.withConfig({
    displayName: "panel__PanelTitle",
    componentId: "sc-164gfnn-5"
})([
    ""
]);
const $4dc3467f2a37f5e1$export$95538adbb0be3fb2 = (0, $22uAH$styledcomponents)((0, $22uAH$Button)).withConfig({
    displayName: "panel__PanelToggle",
    componentId: "sc-164gfnn-6"
})([
    "position:absolute;top:",
    ";left:calc(100% + ",
    ");"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
const $4dc3467f2a37f5e1$export$3ac6fba5a6f84a87 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelBody",
    componentId: "sc-164gfnn-7"
})([
    "display:flex;flex-direction:column;flex-grow:1;position:relative;> div > div:nth-child(2),> div > div:nth-child(3){z-index:1;}"
]);
const $4dc3467f2a37f5e1$export$5cf2a532baac7887 = (0, $22uAH$styledcomponents).article.withConfig({
    displayName: "panel__PanelWidget",
    componentId: "sc-164gfnn-8"
})([
    "display:flex;flex-direction:column;background:",
    ";"
], (0, $22uAH$themeVal)("color.surface"));
const $4dc3467f2a37f5e1$export$1311a6c24ea3337c = (0, $22uAH$styledcomponents).header.withConfig({
    displayName: "panel__PanelWidgetHeader",
    componentId: "sc-164gfnn-9"
})([
    "position:relative;z-index:1;padding:",
    ";background:",
    ";"
], (0, $de7zf.variableGlsp)(0.5, 1, 0.25, 1), (0, $22uAH$themeVal)("color.surface"));
const $4dc3467f2a37f5e1$export$7ecf303beab31b47 = (0, $22uAH$styledcomponents)((0, $22uAH$Overline)).attrs({
    as: "h3"
}).withConfig({
    displayName: "panel__PanelWidgetTitle",
    componentId: "sc-164gfnn-10"
})([
    ""
]);
const $4dc3467f2a37f5e1$export$b2c396ffdcdd6854 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__PanelWidgetBody",
    componentId: "sc-164gfnn-11"
})([
    ""
]);
const $4dc3467f2a37f5e1$export$3123be1a721df363 = (0, $22uAH$styledcomponents).header.withConfig({
    displayName: "panel__WidgetItemHeader",
    componentId: "sc-164gfnn-12"
})([
    "display:flex;flex-flow:column nowrap;padding:",
    ";gap:",
    ";min-width:0;"
], (0, $de7zf.variableGlsp)(0.5, 1), (0, $22uAH$glsp)(0.5));
const $4dc3467f2a37f5e1$export$d1565d8f53bba7e2 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__WidgetItemHeadline",
    componentId: "sc-164gfnn-13"
})([
    "min-width:0px;"
]);
const $4dc3467f2a37f5e1$export$70f9fb9939eb10bc = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "panel__WidgetItemHGroup",
    componentId: "sc-164gfnn-14"
})([
    "display:flex;flex-flow:row nowrap;gap:",
    ";justify-content:space-between;"
], (0, $22uAH$glsp)(0.5));
const $4dc3467f2a37f5e1$export$bac90c2eeb71223e = (0, $22uAH$styledcomponents)((0, $5InEa.VarProse)).withConfig({
    displayName: "panel__WidgetItemBodyInner",
    componentId: "sc-164gfnn-15"
})([
    "position:relative;z-index:8;box-shadow:inset 0 1px 0 0 ",
    ";font-size:0.875rem;line-height:1.25rem;padding:",
    ";background:",
    ";> *{margin-bottom:",
    ";}"
], (0, $22uAH$themeVal)("color.base-100a"), (0, $de7zf.variableGlsp)(0.5, 1), (0, $22uAH$themeVal)("color.base-50a"), (0, $22uAH$glsp)(0.75));

});


parcelRequire.register("ahS4d", function(module, exports) {

$parcel$export(module.exports, "useBasemap", function () { return $73a741bf6460081a$export$9e70652e41ab5a3; });

function $73a741bf6460081a$export$9e70652e41ab5a3() {
    const [labelsOption, setLabelsOption] = (0, $22uAH$useState)(true);
    const [boundariesOption, setBoundariesOption] = (0, $22uAH$useState)(true);
    const onOptionChange = (0, $22uAH$useCallback)((option, value)=>{
        if (option === "labels") setLabelsOption(value);
        else setBoundariesOption(value);
    }, [
        setLabelsOption,
        setBoundariesOption
    ]);
    return {
        labelsOption: labelsOption,
        boundariesOption: boundariesOption,
        onOptionChange: onOptionChange
    };
}

});

parcelRequire.register("hCtDW", function(module, exports) {

$parcel$export(module.exports, "Basemap", function () { return $de337c210713f69a$export$c2008e98e63ba663; });



var $2INTM = parcelRequire("2INTM");

var $4AHLW = parcelRequire("4AHLW");
function $de337c210713f69a$var$mapGroupNameToGroupId(groupNames, mapboxGroups) {
    const groupsAsArray = Object.entries(mapboxGroups);
    return groupNames.map((groupName)=>{
        return groupsAsArray.find(([, group])=>group.name === groupName)?.[0];
    });
}
function $de337c210713f69a$export$c2008e98e63ba663({ basemapStyleId: basemapStyleId = "satellite" , labelsOption: labelsOption = true , boundariesOption: boundariesOption = true  }) {
    const { updateStyle: updateStyle  } = (0, $4AHLW.useMapStyle)();
    const [baseStyle, setBaseStyle] = (0, $22uAH$useState)(undefined);
    const { data: styleJson  } = (0, $22uAH$useQuery)([
        "basemap",
        basemapStyleId
    ], async ({ signal: signal  })=>{
        const mapboxId = basemapStyleId ? (0, $2INTM.BASEMAP_STYLES).find((b)=>b.id === basemapStyleId).mapboxId : (0, $2INTM.BASEMAP_STYLES)[0].mapboxId;
        try {
            const url = (0, $2INTM.getStyleUrl)(mapboxId);
            const styleRaw = await fetch(url, {
                signal: signal
            });
            const styleJson = await styleRaw.json();
            return styleJson;
        } catch (e) {
            /* eslint-disable-next-line no-console */ console.error(e);
        }
    });
    (0, $22uAH$useEffect)(()=>{
        setBaseStyle(styleJson);
    }, [
        styleJson
    ]); // Apply labels and boundaries options, by setting visibility on related layers
    // For simplicity's sake, the Mapbox layer group (as set in Mapbox Studio) is used
    // to determine wehether a layer is a labels layer or boundaries or none of those.
    (0, $22uAH$useEffect)(()=>{
        if (!baseStyle) return; // Mapbox creates a groupId that can't be changed, so we need to get
        // this id from the list of groups in the metadata section of the style.
        const labelsGroupIds = $de337c210713f69a$var$mapGroupNameToGroupId((0, $2INTM.GROUPS_BY_OPTION).labels, baseStyle.metadata["mapbox:groups"]);
        const boundariesGroupIds = $de337c210713f69a$var$mapGroupNameToGroupId((0, $2INTM.GROUPS_BY_OPTION).boundaries, baseStyle.metadata["mapbox:groups"]);
        const layers = baseStyle.layers.map((layer)=>{
            const layerGroup = layer.metadata?.["mapbox:group"];
            if (layerGroup) {
                const isLabelsLayer = labelsGroupIds.includes(layerGroup);
                const isBoundariesLayer = boundariesGroupIds.includes(layerGroup);
                const visibility = isLabelsLayer && labelsOption || isBoundariesLayer && boundariesOption ? "visible" : "none";
                if (isLabelsLayer || isBoundariesLayer) return {
                    ...layer,
                    layout: {
                        ...layer.layout,
                        visibility: visibility
                    },
                    metadata: {
                        layerOrderPosition: "basemap-foreground"
                    }
                };
                return {
                    ...layer
                };
            }
            return {
                ...layer
            };
        });
        updateStyle({
            generatorId: "basemap",
            sources: baseStyle.sources,
            layers: layers
        });
    }, [
        updateStyle,
        labelsOption,
        boundariesOption,
        baseStyle
    ]);
    return null;
}

});

parcelRequire.register("aP7Oo", function(module, exports) {

$parcel$export(module.exports, "formatSingleDate", function () { return $cb04d20a58888b38$export$d9054e1027364e72; });
$parcel$export(module.exports, "formatCompareDate", function () { return $cb04d20a58888b38$export$ae317cac11e3ed8c; });

const $cb04d20a58888b38$var$dateFormats = {
    year: "yyyy",
    month: "LLL yyyy",
    day: "LLL do, yyyy"
};
function $cb04d20a58888b38$export$d9054e1027364e72(date, timeDensity) {
    return (0, $22uAH$format)(date, $cb04d20a58888b38$var$dateFormats[timeDensity || "day"]);
}
function $cb04d20a58888b38$export$ae317cac11e3ed8c(dateA, dateB, timeDensityA, timeDensityB) {
    return `${$cb04d20a58888b38$export$d9054e1027364e72(dateA, timeDensityA)} VS ${$cb04d20a58888b38$export$d9054e1027364e72(dateB, timeDensityB)}`;
}

});

parcelRequire.register("j7cxl", function(module, exports) {

$parcel$export(module.exports, "useDatasetAsyncLayer", function () { return $82d9c2f869dc42b7$export$e1c17fcd47b0af9e; });
$parcel$export(module.exports, "useAsyncLayers", function () { return $82d9c2f869dc42b7$export$ac0cf1c5696d060c; });





var $etfqO = parcelRequire("etfqO");

var $fxYOA = parcelRequire("fxYOA");

var $978L3 = parcelRequire("978L3");
const $82d9c2f869dc42b7$var$fetchLayerById = async (layer)=>{
    const { type: type , stacApiEndpoint: stacApiEndpoint , stacCol: stacCol , time_density: time_density  } = layer;
    const stacApiEndpointToUse = stacApiEndpoint ?? "https://staging-stac.delta-backend.com";
    const { data: data  } = await (0, $22uAH$axios).get(`${stacApiEndpointToUse}/collections/${stacCol}`); // CMR Layer needs to get time_density from MDX file
    const commonTimeseriesParams = {
        isPeriodic: !!time_density || data["dashboard:is_periodic"],
        timeDensity: time_density ?? data["dashboard:time_density"]
    };
    if (type === "vector") {
        const featuresApiEndpoint = data.links.find((l)=>l.rel === "external").href;
        const { data: featuresApiData  } = await (0, $22uAH$axios).get(featuresApiEndpoint);
        return {
            timeseries: {
                ...commonTimeseriesParams,
                domain: featuresApiData.extent.temporal.interval[0]
            }
        };
    } else if (type === "cmr") {
        const domain = data.summaries?.datetime?.[0] ? data.summaries.datetime : data.extent.temporal.interval[0];
        const domainStart = domain[0]; // CMR STAC returns datetimes with `null` as the last value to indicate ongoing data.
        const lastDatetime = domain[domain.length - 1] || new Date().toISOString();
        return {
            timeseries: {
                ...commonTimeseriesParams,
                domain: [
                    domainStart,
                    lastDatetime
                ]
            }
        };
    } else {
        const domain1 = data.summaries?.datetime?.[0] ? data.summaries.datetime : data.extent.temporal.interval[0];
        if (domain1.some((d)=>!d)) throw new Error("Invalid datetime domain");
        return {
            timeseries: {
                ...commonTimeseriesParams,
                domain: domain1
            }
        };
    }
}; // Create a query object for react query.
const $82d9c2f869dc42b7$var$makeQueryObject = (layer)=>({
        queryKey: [
            "layer",
            layer.stacApiEndpoint,
            layer.stacCol
        ],
        queryFn: ()=>$82d9c2f869dc42b7$var$fetchLayerById(layer),
        // This data will not be updated in the context of a browser session, so it is
        // safe to set the staleTime to Infinity. As specified by react-query's
        // "Important Defaults", cached data is considered stale which means that
        // there would be a constant refetching.
        staleTime: Infinity,
        // Errors are always considered stale. If any layer errors, any refocus would
        // cause a refetch. This is normally a good thing but since we have a refetch
        // button, this is not needed.
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
    }); // /////////////////////////////////////////////////////////////////////////////
const $82d9c2f869dc42b7$var$useLayersInit = (layers)=>{
    const queryClient = (0, $22uAH$useQueryClient)();
    const queries = (0, $22uAH$useMemo)(()=>layers.reduce((acc, layer)=>{
            let queries = acc.concat($82d9c2f869dc42b7$var$makeQueryObject(layer));
            const compareLayer = (0, $fxYOA.getCompareLayerData)(layer);
            if (compareLayer && compareLayer.stacCol !== layer.stacCol) queries = queries.concat($82d9c2f869dc42b7$var$makeQueryObject(compareLayer));
            return queries;
        }, []), [
        layers
    ]); // useQueries does not produce a stable result, so `layerQueries` will be
    // changing on every render. This is a problem because we must compute the
    // final layer data which should only be done if the data actually changes.
    const layerQueries = (0, $22uAH$useQueries)({
        queries: queries
    }); // There is an issue for this behavior but seems like it won't be fixed in the
    // near future:
    // https://github.com/tannerlinsley/react-query/issues/3049
    // The proposed solution is to use useDeepCompareMemo which compares the
    // dependency by value instead of by reference.
    return (0, $22uAH$useDeepCompareMemo)(()=>{
        // Merge the data from STAC and the data from the configuration into a
        // single object with meta information about the request status.
        function mergeSTACData(baseData) {
            // At this point the result of queryClient.getQueryState will never be
            // undefined.
            /* eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style */ const dataSTAC = queryClient.getQueryState([
                "layer",
                baseData.stacApiEndpoint,
                baseData.stacCol
            ]);
            if (dataSTAC.status !== (0, $978L3.S_SUCCEEDED)) return dataSTAC;
            return {
                ...dataSTAC,
                data: {
                    ...baseData,
                    ...dataSTAC.data
                }
            };
        }
        return layers.map((layer)=>{
            // Remove compare from layer.
            /* eslint-disable-next-line @typescript-eslint/no-unused-vars */ const { compare: compare , ...layerProps } = layer; // The compare definition needs to be resolved to a real layer before
            // returning. The values for the compare layer will depend on how it is
            // defined:
            // is if from a dataset?
            // is it a layer defined in-line?
            const compareLayer = (0, $fxYOA.getCompareLayerData)(layer);
            return {
                baseLayer: mergeSTACData(layerProps),
                compareLayer: compareLayer && mergeSTACData(compareLayer),
                reFetch: ()=>queryClient.refetchQueries([
                        "layer",
                        layer.stacApiEndpoint,
                        layer.stacCol
                    ], {
                        type: "active",
                        exact: true
                    })
            };
        });
    }, [
        layers,
        queryClient,
        layerQueries
    ]);
}; // Context consumers.
const $82d9c2f869dc42b7$export$e1c17fcd47b0af9e = (datasetId, layerId)=>{
    const hasParams = !!datasetId && !!layerId;
    const dataset = (0, $etfqO.datasets)[datasetId ?? ""]; // Get the layer information from the dataset defined in the configuration.
    const layersList = dataset ? dataset.data.layers : [];
    const layer = layersList.find((l)=>l.id === layerId); // The layers must be defined in the configuration otherwise it is not
    // possible to load them.
    if (hasParams && !layer) throw new Error(`Layer [${layerId}] not found in dataset [${datasetId}]`);
    const layerAsArray = (0, $22uAH$useMemo)(()=>layer ? [
            layer
        ] : [], [
        layer
    ]);
    const asyncLayers = $82d9c2f869dc42b7$var$useLayersInit(layerAsArray);
    return (0, $22uAH$useMemo)(()=>asyncLayers[0] || {
            baseLayer: null,
            compareLayer: null,
            reFetch: null
        }, [
        asyncLayers
    ]);
};
const $82d9c2f869dc42b7$export$d6d94407c283b6fc = (datasetId)=>{
    const dataset = (0, $etfqO.datasets)[datasetId ?? ""]; // Get the layer information from the dataset defined in the configuration.
    return $82d9c2f869dc42b7$var$useLayersInit(dataset?.data.layers ?? []);
};
const $82d9c2f869dc42b7$export$ac0cf1c5696d060c = (referencedLayers)=>{
    // Get the layers from the different datasets.
    const layers = (0, $22uAH$useMemo)(()=>referencedLayers.map(({ datasetId: datasetId , layerId: layerId , skipCompare: skipCompare  })=>{
            const layers = (0, $etfqO.datasets)[datasetId]?.data.layers; // Get the layer information from the dataset defined in the configuration.
            const layer = layers?.find((l)=>l.id === layerId); // The layers must be defined in the configuration otherwise it is not
            // possible to load them.
            if (!layer) throw new Error(`Layer [${layerId}] not found in dataset [${datasetId}]`);
             // Skip the compare to avoid unnecessary network requests.
            if (skipCompare) return {
                ...layer,
                compare: null
            };
            return layer;
        }), [
        referencedLayers
    ]); // Get the layer information from the dataset defined in the configuration.
    return $82d9c2f869dc42b7$var$useLayersInit(layers);
};

});



parcelRequire.register("aZ6ql", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $f7caf2e76b18961f$export$2e2bcd8739ae039; });




var $9gKLh = parcelRequire("9gKLh");

var $jL2G6 = parcelRequire("jL2G6");
const $f7caf2e76b18961f$var$EmbedWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "embed__EmbedWrapper",
    componentId: "sc-1mrc7ga-0"
})([
    "width:100%;> div{width:100%;}"
]);
const $f7caf2e76b18961f$var$IframeWrapper = (0, $22uAH$styledcomponents).iframe.withConfig({
    displayName: "embed__IframeWrapper",
    componentId: "sc-1mrc7ga-1"
})([
    "width:100%;border:0;height:",
    "px;"
], (props)=>props.height);
function $f7caf2e76b18961f$export$2e2bcd8739ae039({ className: className , src: src , height: height = 800 , ...props }) {
    if (!src) throw new (0, $9gKLh.HintedError)("Embed block requires a URL");
    return /*#__PURE__*/ (0, $22uAH$jsx)($f7caf2e76b18961f$var$EmbedWrapper, {
        className: className,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $jL2G6.default), {
            link: src,
            children: /*#__PURE__*/ (0, $22uAH$jsx)($f7caf2e76b18961f$var$IframeWrapper, {
                loading: "lazy",
                src: src,
                height: height,
                ...props
            })
        })
    });
}

});
parcelRequire.register("jL2G6", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $5d93d81c00318edd$export$2e2bcd8739ae039; });





function $5d93d81c00318edd$var$BrowserFrameComponent(props) {
    const { children: children , link: link , ...rest } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
                className: "controls",
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
                        className: "buttons",
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)("span", {}),
                            /*#__PURE__*/ (0, $22uAH$jsx)("span", {}),
                            /*#__PURE__*/ (0, $22uAH$jsx)("span", {})
                        ]
                    }),
                    link && /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                        className: "link",
                        children: /*#__PURE__*/ (0, $22uAH$jsxs)("a", {
                            target: "_blank",
                            rel: "noreferrer",
                            href: link,
                            children: [
                                "Open in a new browser tab ",
                                " ",
                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonExpandTopRight), {
                                    size: "small"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                children: children
            })
        ]
    });
}
const $5d93d81c00318edd$var$BrowserFrame = (0, $22uAH$styledcomponents)($5d93d81c00318edd$var$BrowserFrameComponent).withConfig({
    displayName: "browser-frame__BrowserFrame",
    componentId: "sc-144vi5h-0"
})([
    "position:relative;padding:0 0 1rem 0;background:",
    ";box-shadow:0 0 1px 0 ",
    ";width:fit-content;border-radius:",
    ";.controls{width:100%;display:flex;align-items:center;justify-content:space-between;.buttons{gap:0.5rem;padding:0.625rem 0.5rem;display:flex;span{display:block;width:0.75rem;height:0.75rem;content:'';border-radius:",
    ";background:",
    ";}}.link{padding-right:.625rem;font-size:0.875rem;}}"
], (0, $22uAH$themeVal)("color.base-200"), (0, $22uAH$themeVal)("color.base-400"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("shape.ellipsoid"), (0, $22uAH$themeVal)("color.base-300"));
var $5d93d81c00318edd$export$2e2bcd8739ae039 = $5d93d81c00318edd$var$BrowserFrame;

});


parcelRequire.register("eA4Xl", function(module, exports) {

$parcel$export(module.exports, "scrollyMapHeight", function () { return $89832f2824b4b359$export$83882f98728f03c3; });
$parcel$export(module.exports, "ScrollytellingBlock", function () { return $89832f2824b4b359$export$8629e77f231e057e; });









var $a91Fy = parcelRequire("a91Fy");

var $djhuc = parcelRequire("djhuc");

var $fxYOA = parcelRequire("fxYOA");

var $j7cxl = parcelRequire("j7cxl");

var $8mxqI = parcelRequire("8mxqI");

var $978L3 = parcelRequire("978L3");

var $l6jqT = parcelRequire("l6jqT");

var $4qnuQ = parcelRequire("4qnuQ");

var $8r9VA = parcelRequire("8r9VA");

var $bluRW = parcelRequire("bluRW");

var $4FnrG = parcelRequire("4FnrG");

var $9gKLh = parcelRequire("9gKLh");

var $aP7Oo = parcelRequire("aP7Oo");

var $jfO2i = parcelRequire("jfO2i");

var $7d8fr = parcelRequire("7d8fr");

var $dP18j = parcelRequire("dP18j");

var $4AHLW = parcelRequire("4AHLW");

var $hCtDW = parcelRequire("hCtDW");
const $89832f2824b4b359$export$83882f98728f03c3 = "calc(100vh - 3rem)";
const $89832f2824b4b359$var$ScrollyMapWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "scrollytelling__ScrollyMapWrapper",
    componentId: "sc-p9h14n-0"
})([
    ""
]);
const $89832f2824b4b359$var$TheMap = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "scrollytelling__TheMap",
    componentId: "sc-p9h14n-1"
})([
    "height:",
    ";position:sticky;transition:top ",
    "ms ease-out,height ",
    "ms ease-out;",
    " .mapboxgl-canvas{height:100%;}"
], $89832f2824b4b359$export$83882f98728f03c3, (0, $dP18j.HEADER_TRANSITION_DURATION), (0, $dP18j.HEADER_TRANSITION_DURATION), ({ topOffset: topOffset  })=>(0, $22uAH$css)([
        "top:",
        "px;height:calc(100vh - ",
        "px);"
    ], topOffset, topOffset));
const $89832f2824b4b359$var$TheChapters = (0, $22uAH$styledcomponents)((0, $4qnuQ.default)).withConfig({
    displayName: "scrollytelling__TheChapters",
    componentId: "sc-p9h14n-2"
})([
    "position:relative;z-index:2;pointer-events:none;"
]);
/**
 * Get's the chapter props from the scrollytelling block's children.
 * Converts the props to the correct format. (like the datetime).
 *
 * @throws Error if any children is not a Chapter
 *
 * @param children ScrollytellingBlock children elements
 */ function $89832f2824b4b359$var$useChapterPropsFromChildren(children) {
    return (0, $22uAH$useMemo)(()=>{
        const chapters = (0, $22uAH$Children).toArray(children);
        if (chapters.some((c)=>c.type.displayName !== (0, $djhuc.chapterDisplayName))) throw new (0, $9gKLh.HintedError)("Invalid ScrollytellingBlock children", [
            "You can only use <Chapter> inside <ScrollytellingBlock>"
        ]);
        const chErrors = chapters.reduce((acc, ch, idx)=>acc.concat((0, $djhuc.validateChapter)(ch.props, idx)), []);
        if (chErrors.length) throw new (0, $9gKLh.HintedError)("Malformed ScrollytellingBlock Chapter", chErrors);
         // Extract the props from the chapters.
        return chapters.map((c)=>({
                ...c.props,
                datetime: c.props.datetime ? (0, $8mxqI.utcString2userTzDate)(c.props.datetime) : undefined
            }));
    }, [
        children
    ]);
}
/**
 * Get a key that uniquely identifies the layer.
 *
 * @param ch The chapter
 * @returns string
 */ function $89832f2824b4b359$var$getChapterLayerKey(ch) {
    return `${ch.datasetId}-${ch.layerId}-${(0, $8mxqI.userTzDate2utcString)(ch.datetime)}`;
}
/**
 *
 * @param {array} chList List of chapters
 */ function $89832f2824b4b359$var$useMapLayersFromChapters(chList) {
    // The layers are unique based on the dataset, layer id and datetime.
    // Filter out scrollytelling block that doesn't have layer first.
    const uniqueChapterLayers = (0, $22uAH$useMemo)(()=>{
        const unique = chList.filter(({ showBaseMap: showBaseMap  })=>!showBaseMap).reduce((acc, ch)=>acc.set($89832f2824b4b359$var$getChapterLayerKey(ch), ch), new Map());
        return Array.from(unique.values());
    }, [
        chList
    ]); // Create an array of datasetId & layerId to pass useAsyncLayers so that the
    // layers can be loaded. The skipCompare prevents the compare layer to be
    // loaded, since it will never be used.
    const uniqueLayerRefs = (0, $22uAH$useMemo)(()=>{
        return uniqueChapterLayers.map(({ datasetId: datasetId , layerId: layerId  })=>({
                datasetId: datasetId,
                layerId: layerId,
                skipCompare: true
            }));
    }, [
        uniqueChapterLayers
    ]);
    const asyncLayers = (0, $j7cxl.useAsyncLayers)(uniqueLayerRefs); // Create a ref to cache each of the async layers.
    // After the async layer data is loaded from STAC, the layer functions have
    // to be resolved by the `resolveConfigFunctions`. This function will return a
    // new object every time causing useEffects that depend on this data to fire
    // multiple times, even though the data didn't actually change. An example of
    // this is the `sourceParams` in `MapLayerRasterTimeseries`.
    // Since the these values only have to be computed once, when the layer loads,
    // we can use this cache. On every hook run the asyncLayers.map below will
    // return the cached value if it exists or compute and cache.
    const resolvedLayersCache = (0, $22uAH$useRef)([]); // Each resolved layer will be an object with:
    // layer: The resolved layerData
    // Component: The component to render the layer
    // runtimeData: The runtime data for the layer
    //
    // The difference between runtimeData and layer is that the layer has the
    // layer definition data, the runtimeData belongs to the application and not
    // the layer. For example the datetime, results from a user action (picking
    // on the calendar or in this case setting it in the MDX).
    const resolvedLayers = (0, $22uAH$useMemo)(()=>asyncLayers.map(({ baseLayer: baseLayer  }, index)=>{
            if (baseLayer.status !== (0, $978L3.S_SUCCEEDED) || !baseLayer.data) return null;
            if (resolvedLayersCache.current[index]) return resolvedLayersCache.current[index];
             // Some properties defined in the dataset layer config may be functions
            // that need to be resolved before rendering them. These functions accept
            // data to return the correct value. Include access to raw data.
            const datetime = uniqueChapterLayers[index].datetime;
            const bag = {
                datetime: datetime,
                dateFns: $22uAH$datefns,
                raw: baseLayer.data
            };
            const data = (0, $fxYOA.resolveConfigFunctions)(baseLayer.data, bag);
            const resolved = {
                layer: data,
                Component: (0, $fxYOA.getLayerComponent)(!!data.timeseries, data.type),
                runtimeData: {
                    datetime: datetime,
                    id: $89832f2824b4b359$var$getChapterLayerKey(uniqueChapterLayers[index])
                }
            }; // Need to set it as ResolvedLayer because the "resolveConfigFunctions"
            // is doing something weird to the tuples and converting something like
            // "center: [number, number]" to "center: number[]" which fails
            // validation.
            resolvedLayersCache.current[index] = resolved;
            return resolved;
        }), [
        uniqueChapterLayers,
        asyncLayers
    ]);
    const resolvedStatus = (0, $22uAH$useMemo)(()=>asyncLayers.map(({ baseLayer: baseLayer  })=>baseLayer.status), [
        asyncLayers
    ]);
    return [
        resolvedLayers,
        resolvedStatus
    ];
}
/**
 * Returns a tuple of [areAllLayersAddedToTheMap, onLoadCb]. All layers will be
 * considered added when the onLoadCb is called `count` times with the
 * "succeeded" status.
 *
 * @param count Total count to reach.
 * @returns [areAllLayersAddedToTheMap, onLoadCb]
 */ function $89832f2824b4b359$var$useAllLayersAdded(count) {
    const succeededCount = (0, $22uAH$useRef)(0);
    const [allAdded, setAdded] = (0, $22uAH$useState)(false);
    const onLoadCb = (0, $22uAH$useCallback)(({ status: status  })=>{
        if (status === (0, $978L3.S_SUCCEEDED) && ++succeededCount.current >= count) setAdded(true);
    }, [
        count
    ]);
    return [
        allAdded,
        onLoadCb
    ];
}
const $89832f2824b4b359$var$mapOptions = {
    interactive: false,
    trackResize: true,
    center: [
        0,
        0
    ],
    zoom: 1
}; //
// Scrollytelling Block React Component
//
function $89832f2824b4b359$var$Scrollytelling(props) {
    const { children: children  } = props;
    const { isHeaderHidden: isHeaderHidden , headerHeight: headerHeight , wrapperHeight: wrapperHeight  } = (0, $7d8fr.useSlidingStickyHeaderProps)();
    const mapContainer = (0, $22uAH$useRef)(null);
    const mapRef = (0, $22uAH$useRef)(null);
    const [isMapLoaded, setMapLoaded] = (0, $22uAH$useState)(false); // Extract the props from the chapters.
    const chapterProps = $89832f2824b4b359$var$useChapterPropsFromChildren(children);
    const [resolvedLayers, resolvedStatus] = $89832f2824b4b359$var$useMapLayersFromChapters(chapterProps);
    const [activeChapter, setActiveChapter] = (0, $22uAH$useState)(null); // All layers must be loaded, resolved, and added to the map before we
    // initialize scrollama. This is needed because in a scrollytelling map we
    // need to preload everything so smooth transitions can be applied.
    const [areAllLayersLoaded, onLayerLoadSuccess] = $89832f2824b4b359$var$useAllLayersAdded(resolvedLayers.length);
    (0, $22uAH$useEffect)(()=>{
        if (!areAllLayersLoaded) return; // Setup initial map state which will be the values on the first chapter.
        const initialCh = chapterProps[0];
        mapRef.current?.setZoom(initialCh.zoom);
        mapRef.current?.setCenter(initialCh.center);
        setActiveChapter(initialCh);
        const scroller = (0, $22uAH$scrollama)(); // setup the instance, pass callback functions
        scroller.setup({
            step: "[data-step]",
            offset: 0.8 // ,debug: true
        }).onStepEnter((response)=>{
            const { index: index  } = response;
            const chapter = chapterProps[index];
            setActiveChapter(chapter);
            mapRef.current?.flyTo({
                center: chapter.center,
                zoom: chapter.zoom
            });
            const projection = chapter.projectionId ? {
                id: chapter.projectionId,
                center: chapter.projectionCenter,
                parallels: chapter.projectionParallels
            } : undefined;
            projection && mapRef.current?.setProjection((0, $jfO2i.convertProjectionToMapbox)(projection));
        });
        return ()=>{
            scroller.destroy();
        };
    }, [
        chapterProps,
        areAllLayersLoaded
    ]);
    const activeChapterLayerId = activeChapter && !activeChapter.showBaseMap && $89832f2824b4b359$var$getChapterLayerKey(activeChapter);
    const activeChapterLayer = resolvedLayers.find((resolvedLayer)=>resolvedLayer?.runtimeData.id === activeChapterLayerId);
    const didFailLayerLoading = resolvedStatus.some((s)=>s === (0, $978L3.S_FAILED));
    const areLayersLoading = !didFailLayerLoading && !areAllLayersLoaded; // The top offset for the scrollytelling element will depend on whether the
    // header is visible or not.
    const topOffset = isHeaderHidden ? wrapperHeight - headerHeight : wrapperHeight;
    return /*#__PURE__*/ (0, $22uAH$jsxs)($89832f2824b4b359$var$ScrollyMapWrapper, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsxs)($89832f2824b4b359$var$TheMap, {
                topOffset: topOffset,
                children: [
                    areLayersLoading && /*#__PURE__*/ (0, $22uAH$jsx)((0, $4FnrG.MapLoading), {}),
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $bluRW.default), {
                        id: "scrolly-map-message",
                        active: didFailLayerLoading,
                        isInvalid: true,
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCircleXmark), {}),
                            " There was a problem loading the map data. Refresh the page and try again."
                        ]
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $bluRW.default), {
                        id: "scrolly-map-date-message",
                        active: !!activeChapterLayer?.runtimeData.datetime,
                        children: activeChapterLayer?.runtimeData.datetime ? (0, $aP7Oo.formatSingleDate)(activeChapterLayer.runtimeData.datetime, activeChapterLayer.layer.timeseries.timeDensity) : null
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$SwitchTransition), {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CSSTransition), {
                            timeout: !activeChapterLayer ? 1 : undefined,
                            addEndListener: (node, done)=>{
                                if (!activeChapterLayer) return;
                                node?.addEventListener("transitionend", done, false);
                            },
                            classNames: "reveal",
                            children: activeChapterLayer?.layer.legend ? /*#__PURE__*/ (0, $22uAH$jsx)((0, $8r9VA.LayerLegendContainer), {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $8r9VA.LayerLegend), {
                                    id: `base-${activeChapterLayer.layer.id}`,
                                    description: activeChapterLayer.layer.description,
                                    title: activeChapterLayer.layer.name,
                                    ...activeChapterLayer.layer.legend
                                })
                            }) : /*#__PURE__*/ (0, $22uAH$jsx)("div", {})
                        }, activeChapterLayer?.layer.name)
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $4AHLW.Styles), {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $hCtDW.Basemap), {}),
                            isMapLoaded && resolvedLayers.map((resolvedLayer, lIdx)=>{
                                if (!resolvedLayer || !mapRef.current) return null;
                                const { runtimeData: runtimeData , Component: LayerCmp , layer: layer  } = resolvedLayer;
                                const isHidden = !activeChapterLayerId || activeChapterLayerId !== runtimeData.id || activeChapter.showBaseMap;
                                if (!LayerCmp) return null; // Each layer type is added to the map through a component. This
                                // component has all the logic needed to add/update/remove the
                                // layer. Which component to use will depend on the characteristics
                                // of the layer and dataset.
                                // The function getLayerComponent() should be used to get the
                                // correct component.
                                return /*#__PURE__*/ (0, $22uAH$jsx)(LayerCmp, {
                                    id: runtimeData.id,
                                    mapInstance: mapRef.current,
                                    stacApiEndpoint: layer.stacApiEndpoint,
                                    tileApiEndpoint: layer.tileApiEndpoint,
                                    stacCol: layer.stacCol,
                                    date: runtimeData.datetime,
                                    sourceParams: layer.sourceParams,
                                    zoomExtent: layer.zoomExtent,
                                    onStatusChange: onLayerLoadSuccess,
                                    idSuffix: "scrolly-" + lIdx,
                                    isHidden: isHidden
                                }, runtimeData.id);
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $l6jqT.SimpleMap), {
                                className: "root",
                                mapRef: mapRef,
                                containerRef: mapContainer,
                                onLoad: ()=>{
                                    setMapLoaded(true); // Fit the map to the container once  loaded.
                                    mapRef.current?.resize();
                                },
                                mapOptions: $89832f2824b4b359$var$mapOptions
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)($89832f2824b4b359$var$TheChapters, {
                children: children
            })
        ]
    });
}
$89832f2824b4b359$var$Scrollytelling.propTypes = {
    children: (0, $22uAH$proptypes).node
};
function $89832f2824b4b359$export$8629e77f231e057e(props) {
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $a91Fy.BlockErrorBoundary), {
        ...props,
        childToRender: $89832f2824b4b359$var$Scrollytelling
    });
}

});
parcelRequire.register("7d8fr", function(module, exports) {

$parcel$export(module.exports, "PAGE_BODY_ID", function () { return $9e7c0e4718d91fbd$export$d6ec024df97d592e; });
$parcel$export(module.exports, "useSlidingStickyHeaderProps", function () { return $9e7c0e4718d91fbd$export$49f3e3e2ff0262a4; });
$parcel$export(module.exports, "useFeedbackModal", function () { return $9e7c0e4718d91fbd$export$4fa3f5a70f38c462; });







var $bktom = parcelRequire("bktom");

var $bGpvx = parcelRequire("bGpvx");

var $4deqH = parcelRequire("4deqH");

var $dP18j = parcelRequire("dP18j");

var $8CaPe = parcelRequire("8CaPe");
const $9e7c0e4718d91fbd$var$appTitle = "VEDA UI";
const $9e7c0e4718d91fbd$var$appDescription = "User interface of module VEDA";
const $9e7c0e4718d91fbd$export$d6ec024df97d592e = "pagebody";
const $9e7c0e4718d91fbd$var$Page = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "layout-root__Page",
    componentId: "sc-1fodl4u-0"
})([
    "display:flex;flex-direction:column;min-height:100vh;overflow-anchor:none;"
]);
const $9e7c0e4718d91fbd$var$PageBody = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "layout-root__PageBody",
    componentId: "sc-1fodl4u-1"
})([
    "flex-grow:1;animation:",
    " 0.48s ease 0s 1;display:flex;flex-direction:column;overflow-anchor:auto;"
], (0, $22uAH$reveal));
function $9e7c0e4718d91fbd$var$LayoutRoot(props) {
    const { children: children  } = props;
    (0, $4deqH.useGoogleTagManager)();
    const { title: title , thumbnail: thumbnail , description: description , hideFooter: hideFooter  } = (0, $22uAH$useContext)($9e7c0e4718d91fbd$export$9f21f7ede1976202);
    const truncatedTitle = title?.length > 32 ? `${title.slice(0, 32)}...` : title;
    const fullTitle = truncatedTitle ? `${truncatedTitle} — ` : "";
    return /*#__PURE__*/ (0, $22uAH$jsxs)($9e7c0e4718d91fbd$var$Page, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bktom.default), {
                title: `${fullTitle}${$9e7c0e4718d91fbd$var$appTitle}`,
                description: description || $9e7c0e4718d91fbd$var$appDescription,
                thumbnail: thumbnail
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $8CaPe.default), {}),
            /*#__PURE__*/ (0, $22uAH$jsxs)($9e7c0e4718d91fbd$var$PageBody, {
                id: $9e7c0e4718d91fbd$export$d6ec024df97d592e,
                tabIndex: -1,
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Outlet), {}),
                    children
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $bGpvx.default), {
                isHidden: hideFooter
            })
        ]
    });
}
var $9e7c0e4718d91fbd$export$2e2bcd8739ae039 = $9e7c0e4718d91fbd$var$LayoutRoot;
const $9e7c0e4718d91fbd$export$9f21f7ede1976202 = /*#__PURE__*/ (0, $22uAH$createContext)({});
function $9e7c0e4718d91fbd$export$80b18b0852738b00({ children: children  }) {
    const [layoutProps, setLayoutProps] = (0, $22uAH$useState)({});
    const [feedbackModalRevealed, setFeedbackModalRevealed] = (0, $22uAH$useState)(false); // Put the header size and visibility status in the context so that children
    // elements can access them for positioning purposes.
    const { isHeaderHidden: isHeaderHidden , headerHeight: headerHeight , wrapperHeight: wrapperHeight  } = (0, $dP18j.useSlidingStickyHeader)();
    const ctx = {
        ...layoutProps,
        setLayoutProps: setLayoutProps,
        isHeaderHidden: isHeaderHidden,
        headerHeight: headerHeight,
        wrapperHeight: wrapperHeight,
        feedbackModalRevealed: feedbackModalRevealed,
        setFeedbackModalRevealed: setFeedbackModalRevealed
    };
    return /*#__PURE__*/ (0, $22uAH$jsx)($9e7c0e4718d91fbd$export$9f21f7ede1976202.Provider, {
        value: ctx,
        children: children
    });
}
function $9e7c0e4718d91fbd$export$35b29076f8ca0f7c(props) {
    const { setLayoutProps: setLayoutProps  } = (0, $22uAH$useContext)($9e7c0e4718d91fbd$export$9f21f7ede1976202);
    (0, $22uAH$useDeepCompareEffect)(()=>{
        setLayoutProps(props);
    }, [
        setLayoutProps,
        props
    ]);
    return null;
}
function $9e7c0e4718d91fbd$export$49f3e3e2ff0262a4() {
    const { isHeaderHidden: isHeaderHidden , headerHeight: headerHeight , wrapperHeight: wrapperHeight  } = (0, $22uAH$useContext)($9e7c0e4718d91fbd$export$9f21f7ede1976202);
    return {
        isHeaderHidden: isHeaderHidden,
        headerHeight: headerHeight,
        wrapperHeight: wrapperHeight
    };
}
function $9e7c0e4718d91fbd$export$4fa3f5a70f38c462() {
    const { feedbackModalRevealed: feedbackModalRevealed , setFeedbackModalRevealed: setFeedbackModalRevealed  } = (0, $22uAH$useContext)($9e7c0e4718d91fbd$export$9f21f7ede1976202);
    return {
        isRevealed: feedbackModalRevealed,
        show: (0, $22uAH$useCallback)(()=>setFeedbackModalRevealed(true), [
            setFeedbackModalRevealed
        ]),
        hide: (0, $22uAH$useCallback)(()=>setFeedbackModalRevealed(false), [
            setFeedbackModalRevealed
        ])
    };
}

});
parcelRequire.register("bktom", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $83f85c9887b867f4$export$2e2bcd8739ae039; });






const $83f85c9887b867f4$var$appTitle = "VEDA UI";
const $83f85c9887b867f4$var$baseUrl = window.location.origin;
const $83f85c9887b867f4$var$defaultMetaImage = `${undefined ?? ""}/meta/meta-image.png`;
function $83f85c9887b867f4$var$MetaTags({ title: title , description: description , thumbnail: thumbnail , children: children  }) {
    const theme = (0, $22uAH$useTheme)();
    const location = (0, $22uAH$useLocation)();
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Helmet), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: title
            }),
            description ? /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "description",
                content: description
            }) : null,
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "theme-color",
                content: theme?.color.primary
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "twitter:creator",
                content: "author"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "twitter:title",
                content: title
            }),
            description ? /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "twitter:description",
                content: description
            }) : null,
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                name: "twitter:image",
                content: thumbnail || $83f85c9887b867f4$var$defaultMetaImage
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:url",
                content: `${$83f85c9887b867f4$var$baseUrl}${location.pathname}` || $83f85c9887b867f4$var$baseUrl
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:site_name",
                content: $83f85c9887b867f4$var$appTitle
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:image",
                content: thumbnail || $83f85c9887b867f4$var$defaultMetaImage
            }),
            description ? /*#__PURE__*/ (0, $22uAH$jsx)("meta", {
                property: "og:description",
                content: description
            }) : null,
            children,
            null
        ]
    });
}
$83f85c9887b867f4$var$MetaTags.propTypes = {
    title: (0, $22uAH$proptypes).string,
    description: (0, $22uAH$proptypes).string,
    thumbnail: (0, $22uAH$proptypes).string,
    children: (0, $22uAH$proptypes).node
};
var $83f85c9887b867f4$export$2e2bcd8739ae039 = $83f85c9887b867f4$var$MetaTags;

});

parcelRequire.register("bGpvx", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $881767410f8f1b14$export$2e2bcd8739ae039; });











var $de7zf = parcelRequire("de7zf");

var $fwaez = parcelRequire("fwaez");

var $aBP3d = parcelRequire("aBP3d");

var $hBlPC = parcelRequire("hBlPC");
const $881767410f8f1b14$var$PageFooterSelf = (0, $22uAH$styledcomponents).footer.withConfig({
    displayName: "page-footer__PageFooterSelf",
    componentId: "sc-1omxh0k-0"
})([
    "padding:",
    ";background:",
    ";animation:",
    " 0.32s ease 0s 1;display:flex;flex-flow:column nowrap;",
    " ",
    " a{&,&:visited{color:inherit;}}"
], (0, $de7zf.variableGlsp)(0.75, 1), (0, $22uAH$themeVal)("color.base-50"), (0, $22uAH$reveal), ({ isHidden: isHidden  })=>isHidden && (0, $22uAH$visuallyHidden)(), (0, $22uAH$media).smallUp`
    flex-flow: row nowrap;
  `);
const $881767410f8f1b14$var$FooterCredits = (0, $22uAH$styledcomponents).address.withConfig({
    displayName: "page-footer__FooterCredits",
    componentId: "sc-1omxh0k-1"
})([
    "font-size:0.875rem;line-height:1.5rem;font-style:normal;display:flex;flex-flow:column nowrap;justify-content:flex-end;a span{",
    "}h3{",
    "}small{font-size:inherit;display:block;opacity:0.64;}"
], (0, $22uAH$visuallyHidden)(), (0, $22uAH$visuallyHidden)());
const $881767410f8f1b14$var$InfoList = (0, $22uAH$styledcomponents).dl.withConfig({
    displayName: "page-footer__InfoList",
    componentId: "sc-1omxh0k-2"
})([
    "display:grid;grid-template-columns:repeat(2,1fr);grid-auto-flow:column;gap:",
    ";align-items:start;margin-bottom:",
    ";",
    " ",
    " dt{",
    " text-transform:uppercase;font-size:0.75rem;line-height:1rem;grid-row:1;",
    "}dd{grid-row:2;",
    "}"
], (0, $22uAH$glsp)(0, 1), (0, $de7zf.variableGlsp)(), (0, $22uAH$media).smallUp`
    gap: ${(0, $22uAH$glsp)(0, 2)};
    margin: 0 0 0 auto;
    order: 2;
  `, (0, $22uAH$media).mediumUp`
    grid-template-columns: repeat(4, auto);
    grid-auto-flow: auto;
    grid-gap: ${(0, $de7zf.variableGlsp)(0, 0.5)};
    align-items: center;
  `, (0, $22uAH$createSubtitleStyles)(), (0, $22uAH$media).mediumUp`
      margin-left: ${(0, $de7zf.variableGlsp)()};
    `, (0, $22uAH$media).mediumUp`
      grid-row: 1;
    `);
function $881767410f8f1b14$var$PageFooter(props) {
    const nowDate = new Date();
    return /*#__PURE__*/ (0, $22uAH$jsx)($881767410f8f1b14$var$PageFooterSelf, {
        isHidden: props.isHidden,
        children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $aBP3d.ComponentOverride), {
            with: "pageFooter",
            appVersion: undefined,
            appUiVersion: undefined,
            appBuildTime: undefined,
            children: [
                /*#__PURE__*/ (0, $22uAH$jsxs)($881767410f8f1b14$var$InfoList, {
                    children: [
                        /*#__PURE__*/ (0, $22uAH$jsx)("dt", {
                            children: "NASA official"
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)("dd", {
                            children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Button), {
                                forwardedAs: "a",
                                href: "mailto:manil.maskey@nasa.gov",
                                variation: "base-text",
                                size: "small",
                                fitting: "skinny",
                                children: [
                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonEnvelope), {
                                        title: "Get in touch",
                                        meaningful: true
                                    }),
                                    "Manil Maskey"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)("dt", {
                            children: "Open source code"
                        }),
                        /*#__PURE__*/ (0, $22uAH$jsx)("dd", {
                            children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Button), {
                                forwardedAs: "a",
                                href: "https://github.com/NASA-IMPACT/veda-config",
                                variation: "base-text",
                                size: "small",
                                fitting: "skinny",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonBrandGithub), {
                                        title: "Explore the code",
                                        meaningful: true
                                    }),
                                    "GitHub"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)($881767410f8f1b14$var$FooterCredits, {
                    children: /*#__PURE__*/ (0, $22uAH$jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsxs)((0, $hBlPC.default), {
                                to: "https://earthdata.nasa.gov/",
                                children: [
                                    /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                        children: "By"
                                    }),
                                    " NASA ",
                                    /*#__PURE__*/ (0, $22uAH$jsx)("strong", {
                                        children: "Earthdata"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                        children: "on"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0, $22uAH$jsx)("time", {
                                        dateTime: nowDate.getFullYear(),
                                        children: nowDate.getFullYear()
                                    })
                                ]
                            }),
                            " • ",
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                                content: `Released on ${(0, $22uAH$format)(new Date(NaN), "PPPP")} (veda-ui v${undefined}))`,
                                children: /*#__PURE__*/ (0, $22uAH$jsxs)("span", {
                                    children: [
                                        "v",
                                        undefined
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
var $881767410f8f1b14$export$2e2bcd8739ae039 = $881767410f8f1b14$var$PageFooter;
$881767410f8f1b14$var$PageFooter.propTypes = {
    isHidden: (0, $22uAH$proptypes).bool
};

});
parcelRequire.register("aBP3d", function(module, exports) {

$parcel$export(module.exports, "ComponentOverride", function () { return $982a1dc4c8c1b4f7$export$82a3e89e956de8ba; });




var $etfqO = parcelRequire("etfqO");

var $47Isj = parcelRequire("47Isj");

var $978L3 = parcelRequire("978L3");

const $982a1dc4c8c1b4f7$var$MdxContent = /*#__PURE__*/ (0, $22uAH$lazy)(()=>Promise.resolve((parcelRequire("8b31i"))));
function $982a1dc4c8c1b4f7$export$82a3e89e956de8ba(props) {
    const { with: _with , children: children , ...rest } = props;
    const loader = (0, $etfqO.getOverride)(_with)?.content;
    const pageMdx = (0, $47Isj.useMdxPageLoader)(loader);
    if (!loader) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: children
    });
    if (pageMdx.status === (0, $978L3.S_SUCCEEDED)) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$MDXProvider), {
        children: /*#__PURE__*/ (0, $22uAH$jsx)(pageMdx.MdxContent, {
            ...rest
        })
    });
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: false
    });
}
function $982a1dc4c8c1b4f7$export$72d1ada09c8a89ed(props) {
    const { with: _with , children: children , ...rest } = props;
    const loader = (0, $etfqO.getOverride)(_with)?.content;
    return loader ? /*#__PURE__*/ (0, $22uAH$jsx)($982a1dc4c8c1b4f7$var$MdxContent, {
        loader: loader,
        throughProps: rest
    }) : /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: children
    });
}

});

parcelRequire.register("hBlPC", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $cac898acd839b913$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "CustomLink", function () { return $cac898acd839b913$export$de47df264fea00a4; });




var $50Ucy = parcelRequire("50Ucy");
function $cac898acd839b913$export$2e2bcd8739ae039(props) {
    const { to: to , ...rest } = props;
    const isExternalLink = /^https?:\/\//.test(to);
    const linkProps = (0, $50Ucy.getLinkProps)(to);
    return isExternalLink ? /*#__PURE__*/ (0, $22uAH$jsx)("a", {
        ...linkProps,
        ...rest
    }) : /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Link), {
        ...linkProps,
        ...rest
    });
}
function $cac898acd839b913$export$de47df264fea00a4(props) {
    const { href: href , ...rest } = props;
    const isExternalLink = /^https?:\/\//.test(href);
    const linkProps = (0, $50Ucy.getLinkProps)(href);
    return isExternalLink ? /*#__PURE__*/ (0, $22uAH$jsx)("a", {
        ...linkProps,
        ...rest
    }) : /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Link), {
        ...linkProps,
        ...rest
    });
}

});
parcelRequire.register("50Ucy", function(module, exports) {

$parcel$export(module.exports, "getLinkProps", function () { return $938892e79554921d$export$60113ebe1cf0ecf; });

var $etfqO = parcelRequire("etfqO");
const $938892e79554921d$export$60113ebe1cf0ecf = (linkTo, as, onClick)=>{
    const externalLinksInNewTab = (0, $etfqO.getBoolean)("externalLinksInNewTab");
    const isExternalLink = /^https?:\/\//.test(linkTo);
    return isExternalLink ? {
        href: linkTo,
        to: linkTo,
        ...externalLinksInNewTab ? {
            target: "_blank",
            rel: "noopener noreferrer"
        } : {},
        ...onClick ? {
            onClick: onClick
        } : {}
    } : {
        ...as ? {
            as: as
        } : {},
        to: linkTo,
        ...onClick ? {
            onClick: onClick
        } : {}
    };
};

});



parcelRequire.register("4deqH", function(module, exports) {

$parcel$export(module.exports, "useGoogleTagManager", function () { return $c0579a381f258af8$export$ed058e39f3682d4b; });


const $c0579a381f258af8$var$gtMCode = undefined;
const $c0579a381f258af8$var$gtmAuth = undefined;
const $c0579a381f258af8$var$gtmPreviewEnv = undefined; // This variables should be saved in env.local or CI
const $c0579a381f258af8$var$tagManagerArgs = {
    gtmId: $c0579a381f258af8$var$gtMCode,
    auth: $c0579a381f258af8$var$gtmAuth,
    preview: $c0579a381f258af8$var$gtmPreviewEnv,
    cookies_win: "x"
};
function $c0579a381f258af8$export$ed058e39f3682d4b() {
    (0, $22uAH$useEffect)(()=>{
        if ($c0579a381f258af8$var$gtMCode) (0, $22uAH$reactgtmmodule).initialize($c0579a381f258af8$var$tagManagerArgs);
    }, []);
}

});

parcelRequire.register("dP18j", function(module, exports) {

$parcel$export(module.exports, "HEADER_ID", function () { return $e71ec44054cbb61c$export$b9c335479effb691; });
$parcel$export(module.exports, "HEADER_WRAPPER_ID", function () { return $e71ec44054cbb61c$export$4eb51c692ca09c42; });
$parcel$export(module.exports, "HEADER_TRANSITION_DURATION", function () { return $e71ec44054cbb61c$export$1d27eb55ded4794e; });
$parcel$export(module.exports, "useSlidingStickyHeader", function () { return $e71ec44054cbb61c$export$eced29d7b59956a2; });



var $k30iu = parcelRequire("k30iu");
const $e71ec44054cbb61c$export$b9c335479effb691 = "page-header";
const $e71ec44054cbb61c$export$4eb51c692ca09c42 = "header-wrapper";
const $e71ec44054cbb61c$export$1d27eb55ded4794e = 320;
function $e71ec44054cbb61c$export$eced29d7b59956a2() {
    const [isHidden, setHidden] = (0, $22uAH$useState)(false);
    const [headerHeight, setHeaderHeight] = (0, $22uAH$useState)(0);
    const [wrapperHeight, setWrapperHeight] = (0, $22uAH$useState)(0);
    const { pathname: pathname  } = (0, $22uAH$useLocation1)();
    const navWrapperElement = document.querySelector(`#${$e71ec44054cbb61c$export$4eb51c692ca09c42}`);
    (0, $k30iu.useEffectPrevious)(([pathnamePrev])=>{
        const pageChanged = pathnamePrev !== pathname;
        if (pageChanged) {
            setHidden(false);
            setHeaderHeight(0);
            setWrapperHeight(0);
        }
    }, [
        pathname
    ]);
    (0, $22uAH$useEffect)(()=>{
        let ticking = false;
        let prevY = window.scrollY;
        let scrollUpDelta = 0; // navWrapperElement should be mounted before the hook
        if (!navWrapperElement) return; // When the element mounts the <Suspense> element is still in the DOM and
        // the page has display: none. The result is that any measurement of the
        // header would be 0. By using an IntersectionObserver we are able to get
        // the correct height once the element becomes visible.
        const observer = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) {
                observer.unobserve(navWrapperElement); // Initial height.
                // Get the height of the header and he wrapper. Both are needed because in
                // some pages the wrapper contains the local nav as well.
                const headerHeightQueried = document.querySelector(`#${$e71ec44054cbb61c$export$b9c335479effb691}`)?.offsetHeight || 0;
                setHeaderHeight(headerHeightQueried);
                setWrapperHeight(navWrapperElement.offsetHeight); // The header is hidden if the page is loaded and the user is scrolled
                // mid-way.
                setHidden(window.scrollY > headerHeightQueried);
            }
        });
        observer.observe(navWrapperElement);
        function tick(currY) {
            const wrapperEl = document.querySelector(`#${$e71ec44054cbb61c$export$4eb51c692ca09c42}`);
            if (!wrapperEl) throw new Error(`Header element with ID ${$e71ec44054cbb61c$export$4eb51c692ca09c42} not found.`);
            setWrapperHeight(wrapperEl.offsetHeight);
            const el = document.querySelector(`#${$e71ec44054cbb61c$export$b9c335479effb691}`);
            const headerHeightQueried = el?.offsetHeight ?? 0;
            setHeaderHeight(headerHeightQueried); // When the document is scrolled quickly to the bottom of the page, the
            // shrinking header causes the scroll event to be fired again, and since
            // the page is shrinking, the scrollY is decreasing leading to the page
            // header being shown as it is being considered a scroll up.
            // By checking if we are at the bottom, we can prevent this.
            const atTheBottom = window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight;
            if (currY <= headerHeightQueried) {
                // When the header gets hidden the css transitions the element out of
                // the viewport by applying a negative translate. (See NavWrapper). If
                // the user scrolls to the top of the page quickly and the header
                // still has to animate to be shown it looks like a glitch because a
                // white area will be seen. In this situation we remove the
                // translation so that it looks like the header is already there.
                // Additionally this has to be done by accessing the DOM node directly
                // instead of using a state because the styled component does not
                // update fast enough.
                wrapperEl.style.transition = "none"; // Visible if within its height.
                setHidden(false);
                scrollUpDelta = 0;
            } else if (currY < prevY && !atTheBottom) {
                // Scrolling up.
                scrollUpDelta += prevY - currY; // When scrolling up we want some travel before showing the header
                // again.
                if (scrollUpDelta > 64) {
                    wrapperEl.style.transition = "";
                    setHidden(false);
                }
            } else if (currY > prevY) {
                wrapperEl.style.transition = ""; // Scrolling down.
                setHidden(true);
                scrollUpDelta = 0;
            }
            prevY = currY;
        }
        function onViewportPositionChange() {
            if (!ticking) {
                // instead of setting a specific number of ms to wait (throttling),
                // pass it to the browser to be processed on the next frame, whenever that may be.
                window.requestAnimationFrame(()=>{
                    tick(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener("scroll", onViewportPositionChange);
        window.addEventListener("resize", onViewportPositionChange);
        return ()=>{
            window.removeEventListener("scroll", onViewportPositionChange);
            window.removeEventListener("resize", onViewportPositionChange);
        };
    }, [
        navWrapperElement
    ]);
    return {
        isHeaderHidden: isHidden,
        headerHeight: headerHeight,
        wrapperHeight: wrapperHeight
    };
}

});
parcelRequire.register("k30iu", function(module, exports) {

$parcel$export(module.exports, "useEffectPrevious", function () { return $5fa58f436db5a7cb$export$a1374b051b334514; });
$parcel$export(module.exports, "usePreviousValue", function () { return $5fa58f436db5a7cb$export$54b70074ca60d2e1; });

function $5fa58f436db5a7cb$var$makePreviousHook(effectHook) {
    return (cb, deps)=>{
        const prev = (0, $22uAH$useRef)([]);
        const mounted = (0, $22uAH$useRef)(false);
        const unchangingCb = (0, $22uAH$useRef)(cb);
        unchangingCb.current = cb;
        effectHook(()=>{
            const r = unchangingCb.current(prev.current, mounted.current);
            prev.current = deps;
            if (!mounted.current) mounted.current = true;
            return r;
        /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, deps);
    };
}
const $5fa58f436db5a7cb$export$a1374b051b334514 = $5fa58f436db5a7cb$var$makePreviousHook((0, $22uAH$useEffect));
const $5fa58f436db5a7cb$export$de77312506f02988 = $5fa58f436db5a7cb$var$makePreviousHook((0, $22uAH$useLayoutEffect));
const $5fa58f436db5a7cb$export$54b70074ca60d2e1 = (value, isEqualFunc = (a, b)=>a === b)=>{
    const ref = (0, $22uAH$useRef)(undefined);
    const current = ref.current;
    if (!isEqualFunc(current, value)) ref.current = value;
    return current;
};

});


parcelRequire.register("8CaPe", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $645a45069f9d8850$export$2e2bcd8739ae039; });





var $lFfj6 = parcelRequire("lFfj6");

var $7d8fr = parcelRequire("7d8fr");

var $dP18j = parcelRequire("dP18j");
const $645a45069f9d8850$var$NavWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "nav-wrapper__NavWrapper",
    componentId: "sc-1g2b7lv-0"
})([
    "position:sticky;top:0;width:100%;z-index:",
    ";transition:top ",
    "ms ease-out;",
    ""
], (0, $22uAH$themeVal)("zIndices.sticky"), (0, $dP18j.HEADER_TRANSITION_DURATION), ({ shouldSlideHeader: shouldSlideHeader , headerHeight: headerHeight  })=>// translate is in the NavWrapper and not the header because in this way the
    // localNav (also inside the NavWrapper) will stick to the top.
    shouldSlideHeader && (0, $22uAH$css)([
        "top:-",
        "px;"
    ], headerHeight));
function $645a45069f9d8850$var$PageNavWrapper() {
    const { isHeaderHidden: isHeaderHidden , headerHeight: headerHeight  } = (0, $7d8fr.useSlidingStickyHeaderProps)();
    return /*#__PURE__*/ (0, $22uAH$jsx)($645a45069f9d8850$var$NavWrapper, {
        id: (0, $dP18j.HEADER_WRAPPER_ID),
        shouldSlideHeader: isHeaderHidden,
        headerHeight: headerHeight,
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $lFfj6.default), {})
    });
}
var $645a45069f9d8850$export$2e2bcd8739ae039 = $645a45069f9d8850$var$PageNavWrapper;

});
parcelRequire.register("lFfj6", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1814fb4ffc3d8478$export$2e2bcd8739ae039; });





var $etfqO = parcelRequire("etfqO");







var $ixNDQ = parcelRequire("ixNDQ");

var $aprKq = parcelRequire("aprKq");

var $5IeAT = parcelRequire("5IeAT");

var $fwaez = parcelRequire("fwaez");

var $g45Fr = parcelRequire("g45Fr");

var $EAuO5 = parcelRequire("EAuO5");

var $de7zf = parcelRequire("de7zf");

var $knZgP = parcelRequire("knZgP");

var $7d8fr = parcelRequire("7d8fr");

var $e2FCm = parcelRequire("e2FCm");

var $dfApQ = parcelRequire("dfApQ");

var $dP18j = parcelRequire("dP18j");

var $aBP3d = parcelRequire("aBP3d");
const $1814fb4ffc3d8478$var$rgbaFixed = (0, $22uAH$rgba);
const $1814fb4ffc3d8478$var$appTitle = "VEDA UI";
const $1814fb4ffc3d8478$var$appVersion = undefined;
const $1814fb4ffc3d8478$var$PageHeaderSelf = (0, $22uAH$styledcomponents).header.withConfig({
    displayName: "page-header__PageHeaderSelf",
    componentId: "sc-1vx2i87-0"
})([
    "display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;gap:",
    ";padding:",
    ";background:",
    ";animation:",
    " 0.32s ease 0s 1;&,&:visited{color:",
    ";}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(0.75, 1), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$reveal), (0, $22uAH$themeVal)("color.surface"));
const $1814fb4ffc3d8478$var$Brand = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__Brand",
    componentId: "sc-1vx2i87-1"
})([
    "display:flex;flex-shrink:0;a{display:grid;align-items:center;gap:",
    ";&,&:visited{color:inherit;text-decoration:none;}#nasa-logo-neg-mono{opacity:1;transition:all 0.32s ease 0s;}#nasa-logo-pos{opacity:0;transform:translate(0,-100%);transition:all 0.32s ease 0s;}&:hover{opacity:1;#nasa-logo-neg-mono{opacity:0;}#nasa-logo-pos{opacity:1;}}svg{grid-row:1 / span 2;height:2.5rem;width:auto;",
    "}span:first-of-type{font-size:0.875rem;line-height:1rem;font-weight:",
    ";text-transform:uppercase;}span:last-of-type{grid-row:2;font-size:1.25rem;line-height:1.5rem;font-weight:",
    ";letter-spacing:-0.025em;}}"
], (0, $22uAH$glsp)(0, 0.5), (0, $22uAH$media).largeUp`
        transform: scale(1.125);
      `, (0, $22uAH$themeVal)("type.base.extrabold"), (0, $22uAH$themeVal)("type.base.regular"));
const $1814fb4ffc3d8478$var$PageTitleSecLink = (0, $22uAH$styledcomponents)((0, $22uAH$Link)).withConfig({
    displayName: "page-header__PageTitleSecLink",
    componentId: "sc-1vx2i87-2"
})([
    "align-self:end;font-size:0.75rem;font-weight:",
    ";line-height:1rem;text-transform:uppercase;background:",
    ";padding:",
    ";border-radius:",
    ";margin:",
    ";&&,&&:visited{color:",
    ";}",
    ""
], (0, $22uAH$themeVal)("type.base.bold"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$glsp)(0, 0.25), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$glsp)(0.125, 0.5), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$media).largeUp`
    margin: ${(0, $22uAH$glsp)(0, 0.5)};
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0 ${(0, $22uAH$glsp)(0.5)};
  `);
const $1814fb4ffc3d8478$var$GlobalNav = (0, $22uAH$styledcomponents).nav.withConfig({
    displayName: "page-header__GlobalNav",
    componentId: "sc-1vx2i87-3"
})([
    "position:fixed;inset:0 0 0 auto;z-index:900;display:flex;flex-flow:column nowrap;width:20rem;margin-right:-20rem;transition:margin 0.24s ease 0s;",
    " ",
    " &::after{content:'';position:absolute;inset:0 0 0 auto;z-index:-1;background:transparent;width:0;transition:background 0.64s ease 0s;",
    "}"
], ({ revealed: revealed  })=>revealed && (0, $22uAH$css)([
        "&{margin-right:0;}"
    ]), (0, $22uAH$media).largeUp`
    position: static;
    flex: 1;
    margin: 0;
  }

    &:before {
      content: '';
    }
  `, ({ revealed: revealed  })=>revealed && (0, $22uAH$css)([
        "",
        ""
    ], (0, $22uAH$media).mediumDown`
          background: ${(0, $22uAH$themeVal)("color.base-400a")};
          width: 200vw;
        `));
const $1814fb4ffc3d8478$var$GlobalNavInner = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__GlobalNavInner",
    componentId: "sc-1vx2i87-4"
})([
    "display:flex;flex-direction:column;flex:1;background-color:",
    ";",
    ""
], (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$media).mediumDown`
    box-shadow: ${(0, $22uAH$themeVal)("boxShadow.elevationD")};
  `);
const $1814fb4ffc3d8478$var$GlobalNavHeader = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__GlobalNavHeader",
    componentId: "sc-1vx2i87-5"
})([
    "padding:",
    ";box-shadow:inset 0 -1px 0 0 ",
    ";",
    ""
], (0, $de7zf.variableGlsp)(1), (0, $22uAH$themeVal)("color.surface-200a"), (0, $22uAH$media).largeUp`
    display: none;
  `);
const $1814fb4ffc3d8478$var$GlobalNavTitle = (0, $22uAH$styledcomponents)((0, $22uAH$Heading)).attrs({
    as: "span",
    size: "small"
}).withConfig({
    displayName: "page-header__GlobalNavTitle",
    componentId: "sc-1vx2i87-6"
})([
    ""
]);
const $1814fb4ffc3d8478$export$9dcb6ed886c28a2f = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__GlobalNavActions",
    componentId: "sc-1vx2i87-7"
})([
    "align-self:start;",
    ""
], (0, $22uAH$media).largeUp`
    display: none;
  `);
const $1814fb4ffc3d8478$export$64eb44db16fa7ade = (0, $22uAH$styledcomponents)((0, $22uAH$Button)).withConfig({
    displayName: "page-header__GlobalNavToggle",
    componentId: "sc-1vx2i87-8"
})([
    "z-index:2000;"
]);
const $1814fb4ffc3d8478$var$GlobalNavBody = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__GlobalNavBody",
    componentId: "sc-1vx2i87-9"
})([
    "display:flex;flex:1;.shadow-top{background:linear-gradient( to top,",
    "00 0%,",
    " 100% );}.shadow-bottom{background:linear-gradient( to bottom,",
    "00 0%,",
    " 100% );}"
], (0, $22uAH$themeVal)("color.primary-600"), (0, $22uAH$themeVal)("color.primary-600"), (0, $22uAH$themeVal)("color.primary-600"), (0, $22uAH$themeVal)("color.primary-600"));
const $1814fb4ffc3d8478$var$GlobalNavBodyInner = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__GlobalNavBodyInner",
    componentId: "sc-1vx2i87-10"
})([
    "display:flex;flex-direction:column;flex:1;gap:",
    ";padding:",
    ";",
    ""
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(1, 0), (0, $22uAH$media).largeUp`
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  `);
const $1814fb4ffc3d8478$var$NavBlock = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "page-header__NavBlock",
    componentId: "sc-1vx2i87-11"
})([
    "display:flex;flex-flow:column nowrap;gap:",
    ";",
    ""
], (0, $22uAH$glsp)(0.25), (0, $22uAH$media).largeUp`
    flex-direction: row;
    align-items: center;
    gap: ${(0, $22uAH$glsp)(1.5)};
  `);
const $1814fb4ffc3d8478$var$SROnly = (0, $22uAH$styledcomponents).a.withConfig({
    displayName: "page-header__SROnly",
    componentId: "sc-1vx2i87-12"
})([
    "height:1px;left:-10000px;overflow:hidden;position:absolute;top:auto;width:1px;color:",
    ";&:focus{top:0;left:0;background-color:",
    ";padding:",
    ";height:auto;width:auto;}"
], (0, $22uAH$themeVal)("color.link"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$glsp)(0.25));
const $1814fb4ffc3d8478$var$SectionsNavBlock = (0, $22uAH$styledcomponents)($1814fb4ffc3d8478$var$NavBlock).withConfig({
    displayName: "page-header__SectionsNavBlock",
    componentId: "sc-1vx2i87-13"
})([
    ""
]);
const $1814fb4ffc3d8478$var$GlobalNavBlockTitle = (0, $22uAH$styledcomponents)((0, $22uAH$Overline)).attrs({
    as: "span"
}).withConfig({
    displayName: "page-header__GlobalNavBlockTitle",
    componentId: "sc-1vx2i87-14"
})([
    "",
    " display:block;padding:",
    ";color:currentColor;opacity:0.64;",
    ""
], (0, $22uAH$visuallyHidden), (0, $de7zf.variableGlsp)(1, 1, 0.25, 1), (0, $22uAH$media).largeUp`
    padding: 0;
  `);
const $1814fb4ffc3d8478$var$GlobalMenu = (0, $22uAH$styledcomponents).ul.withConfig({
    displayName: "page-header__GlobalMenu",
    componentId: "sc-1vx2i87-15"
})([
    "",
    " display:flex;flex-flow:column nowrap;gap:",
    ";",
    ""
], (0, $22uAH$listReset)(), (0, $22uAH$glsp)(0.5), (0, $22uAH$media).largeUp`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${(0, $22uAH$glsp)(1.5)};
  `);
const $1814fb4ffc3d8478$var$GlobalMenuLink = (0, $22uAH$styledcomponents)((0, $22uAH$NavLink)).withConfig({
    displayName: "page-header__GlobalMenuLink",
    componentId: "sc-1vx2i87-16"
})([
    "",
    ""
], (0, $e2FCm.default));
const $1814fb4ffc3d8478$var$DropMenuNavItem = (0, $22uAH$styledcomponents)((0, $22uAH$DropMenuItem)).withConfig({
    displayName: "page-header__DropMenuNavItem",
    componentId: "sc-1vx2i87-17"
})([
    "&.active{background-color:",
    ";}"
], $1814fb4ffc3d8478$var$rgbaFixed((0, $22uAH$themeVal)("color.link"), 0.08));
function $1814fb4ffc3d8478$var$PageHeader() {
    const { isMediumDown: isMediumDown  } = (0, $dfApQ.useMediaQuery)();
    const [globalNavRevealed, setGlobalNavRevealed] = (0, $22uAH$useState)(false);
    const globalNavBodyRef = (0, $22uAH$useRef)(null); // Click listener for the whole global nav body so we can close it when clicking
    // the overlay on medium down media query.
    const onGlobalNavClick = (0, $22uAH$useCallback)((e)=>{
        if (!globalNavBodyRef.current?.contains(e.target)) setGlobalNavRevealed(false);
    }, []);
    (0, $22uAH$useEffect)(()=>{
        // Close global nav when media query changes.
        // NOTE: isMediumDown is returning document.body's width, not the whole window width
        // which conflicts with how mediaquery decides the width.
        // JSX element susing isMediumDown is also protected with css logic because of this.
        // ex. Look at GlobalNavActions
        if (!isMediumDown) setGlobalNavRevealed(false);
    }, [
        isMediumDown
    ]);
    const closeNavOnClick = (0, $22uAH$useCallback)(()=>{
        setGlobalNavRevealed(false);
    }, []);
    const userPagesMainNavItem = (0, $etfqO.userPages).map((id)=>{
        const page = (0, $etfqO.getOverride)(id);
        if (!(page?.data.mainNavItem && page.data.mainNavItem.navTitle)) return false;
        return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
            children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                to: id,
                onClick: closeNavOnClick,
                children: page.data.mainNavItem.navTitle
            })
        }, id);
    });
    function skipNav(e) {
        // a tag won't appear for keyboard focus without href
        // so we are preventing the default behaviour of a link here
        e.preventDefault(); // Then find a next focusable element in pagebody,focus it.
        const pageBody = document.getElementById((0, $7d8fr.PAGE_BODY_ID));
        if (pageBody) pageBody.focus();
    }
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$SROnly, {
                href: "#",
                onClick: skipNav,
                children: "Skip to main content"
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$PageHeaderSelf, {
                id: (0, $dP18j.HEADER_ID),
                children: [
                    globalNavRevealed && isMediumDown && /*#__PURE__*/ (0, $22uAH$jsx)((0, $g45Fr.default), {}),
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $aBP3d.ComponentOverride), {
                        with: "headerBrand",
                        children: /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$Brand, {
                            children: [
                                /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Link), {
                                    to: "/",
                                    children: [
                                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $aprKq.default), {}),
                                        /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                            children: "Earthdata"
                                        }),
                                        " ",
                                        /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                                            children: $1814fb4ffc3d8478$var$appTitle
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                                    content: `v${$1814fb4ffc3d8478$var$appVersion}`,
                                    children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$PageTitleSecLink, {
                                        to: "/development",
                                        children: "Beta"
                                    })
                                })
                            ]
                        })
                    }),
                    isMediumDown && /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$export$9dcb6ed886c28a2f, {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$export$64eb44db16fa7ade, {
                            "aria-label": globalNavRevealed ? "Close Global Navigation" : "Open Global Navigation",
                            variation: "achromic-text",
                            fitting: "skinny",
                            onClick: ()=>setGlobalNavRevealed((v)=>!v),
                            active: globalNavRevealed,
                            children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonHamburgerMenu), {})
                        })
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNav, {
                        "aria-label": "Global Navigation",
                        role: "navigation",
                        revealed: globalNavRevealed,
                        onClick: onGlobalNavClick,
                        children: /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$GlobalNavInner, {
                            ref: globalNavBodyRef,
                            children: [
                                isMediumDown && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
                                    children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNavHeader, {
                                        children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNavTitle, {
                                            "aria-hidden": "true",
                                            children: "Browse"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNavBody, {
                                    as: isMediumDown ? undefined : "div",
                                    children: /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$GlobalNavBodyInner, {
                                        children: [
                                            /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$SectionsNavBlock, {
                                                children: [
                                                    /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNavBlockTitle, {
                                                        children: "Global"
                                                    }),
                                                    /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$GlobalMenu, {
                                                        children: [
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                                                children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                                                                    to: (0, $knZgP.DATASETS_PATH),
                                                                    onClick: closeNavOnClick,
                                                                    children: "Data Catalog"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                                                children: (0, $EAuO5.checkEnvFlag)(undefined) ? /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                                                                    to: (0, $knZgP.EXPLORATION_PATH),
                                                                    onClick: closeNavOnClick,
                                                                    children: "Exploration"
                                                                }) : /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                                                                    to: (0, $knZgP.ANALYSIS_PATH),
                                                                    onClick: closeNavOnClick,
                                                                    children: "Data Analysis"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                                                children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                                                                    to: (0, $knZgP.STORIES_PATH),
                                                                    onClick: closeNavOnClick,
                                                                    children: (0, $etfqO.getString)("stories").other
                                                                })
                                                            }),
                                                            false
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$SectionsNavBlock, {
                                                children: [
                                                    /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalNavBlockTitle, {
                                                        children: "Meta"
                                                    }),
                                                    /*#__PURE__*/ (0, $22uAH$jsxs)($1814fb4ffc3d8478$var$GlobalMenu, {
                                                        children: [
                                                            userPagesMainNavItem,
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                                                children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                                                                    to: (0, $knZgP.ABOUT_PATH),
                                                                    onClick: closeNavOnClick,
                                                                    children: "About"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5IeAT.default), {})
                                                            }),
                                                            /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$UserPagesDotMenu, {
                                                                onItemClick: closeNavOnClick,
                                                                isMediumDown: isMediumDown
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
var $1814fb4ffc3d8478$export$2e2bcd8739ae039 = $1814fb4ffc3d8478$var$PageHeader;
function $1814fb4ffc3d8478$var$UserPagesDotMenu(props) {
    const { isMediumDown: isMediumDown , onItemClick: onItemClick  } = props;
    const dotMenuItems = (0, $etfqO.userPages).reduce((menuItems, id)=>{
        const page = (0, $etfqO.getOverride)(id);
        if (page?.data.menu) return menuItems.concat({
            id: id,
            menu: page.data.menu
        });
        return menuItems;
    }, []);
    if (!dotMenuItems.length) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: false
    });
    if (isMediumDown) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: dotMenuItems.map((menuItem)=>{
            const page = (0, $etfqO.getOverride)(menuItem.id);
            if (!page?.data.menu) return false;
            return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$GlobalMenuLink, {
                    to: menuItem.id,
                    onClick: onItemClick,
                    children: menuItem.menu
                })
            }, menuItem.id);
        })
    });
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $ixNDQ.default), {
        alignment: "right",
        triggerElement: (props)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Button), {
                ...props,
                variation: "achromic-text",
                fitting: "skinny",
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonEllipsisVertical), {
                    meaningful: true,
                    title: "View pages menu"
                })
            }),
        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropMenu), {
            children: (0, $etfqO.userPages).map((id)=>{
                const page = (0, $etfqO.getOverride)(id);
                if (!page?.data.menu) return false;
                return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                    children: /*#__PURE__*/ (0, $22uAH$jsx)($1814fb4ffc3d8478$var$DropMenuNavItem, {
                        as: (0, $22uAH$NavLink),
                        to: id,
                        "data-dropdown": "click.close",
                        children: page.data.menu
                    })
                }, id);
            })
        })
    });
}

});
parcelRequire.register("ixNDQ", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1d622526f11bc472$export$2e2bcd8739ae039; });





/**
 * Override Dropdown styles to play well with the shadow scrollbar.
 */ const $1d622526f11bc472$var$DropdownWithScroll = (0, $22uAH$styledcomponents)((0, $22uAH$Dropdown)).withConfig({
    displayName: "dropdown-scrollable__DropdownWithScroll",
    componentId: "sc-1usycrs-0"
})([
    "padding:0;overflow:hidden;max-height:320px;overscroll-behavior:none;overflow-y:scroll;",
    "{margin:0;padding:",
    ";}",
    "{margin:0;}"
], (0, $22uAH$DropTitle), (0, $22uAH$glsp)(1, 1, 0, 1), (0, $22uAH$DropMenu));
var $1d622526f11bc472$export$2e2bcd8739ae039 = /*#__PURE__*/ (0, $22uAH$forwardRef)(function DropdownScrollable(props, ref) {
    const { children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($1d622526f11bc472$var$DropdownWithScroll, {
        ref: ref,
        ...rest,
        children: children
    });
});

});

parcelRequire.register("aprKq", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $7941c34fc7f46f3c$export$2e2bcd8739ae039; });


function $7941c34fc7f46f3c$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        width: 312,
        height: 258,
        viewBox: "0 0 312 258",
        style: {
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2
        },
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: "NASA"
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)("g", {
                id: "nasa-logo-pos",
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M273.427,387C273.427,457.761 215.188,516 144.427,516C73.665,516 15.427,457.761 15.427,387C15.427,316.239 73.665,258 144.427,258C215.188,258 273.427,316.239 273.427,387Z",
                        style: {
                            fill: "rgb(0,102,179)",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M146.205,269.721C146.205,270.297 145.731,270.771 145.154,270.771C144.578,270.771 144.104,270.297 144.104,269.721C144.104,269.145 144.578,268.67 145.154,268.67C145.731,268.67 146.205,269.145 146.205,269.721Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M153.48,285.643C153.48,286.353 152.896,286.936 152.187,286.936C151.477,286.936 150.893,286.353 150.893,285.643C150.893,284.934 151.477,284.35 152.187,284.35C152.896,284.35 153.48,284.934 153.48,285.643Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M172.393,311.67C172.393,312.379 171.81,312.963 171.1,312.963C170.39,312.963 169.807,312.379 169.807,311.67C169.807,310.959 170.39,310.376 171.1,310.376C171.81,310.376 172.393,310.959 172.393,311.67Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M142.002,294.615C142.002,295.191 141.528,295.666 140.951,295.666C140.375,295.666 139.901,295.191 139.901,294.615C139.901,294.039 140.375,293.564 140.951,293.564C141.528,293.564 142.002,294.039 142.002,294.615Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M153.318,300.596C153.318,301.172 152.843,301.647 152.267,301.647C151.691,301.647 151.217,301.172 151.217,300.596C151.217,300.02 151.691,299.545 152.267,299.545C152.843,299.545 153.318,300.02 153.318,300.596Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M138.607,283.865C138.607,284.574 138.023,285.158 137.314,285.158C136.604,285.158 136.021,284.574 136.021,283.865C136.021,283.156 136.604,282.572 137.314,282.572C138.023,282.572 138.607,283.156 138.607,283.865Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M121.472,294.292C121.472,294.869 120.998,295.343 120.422,295.343C119.845,295.343 119.371,294.869 119.371,294.292C119.371,293.716 119.845,293.241 120.422,293.241C120.998,293.241 121.472,293.716 121.472,294.292Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M124.544,296.394C124.544,296.97 124.069,297.444 123.493,297.444C122.917,297.444 122.442,296.97 122.442,296.394C122.442,295.817 122.917,295.343 123.493,295.343C124.069,295.343 124.544,295.817 124.544,296.394Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M127.615,298.495C127.615,299.071 127.14,299.545 126.564,299.545C125.987,299.545 125.513,299.071 125.513,298.495C125.513,297.918 125.987,297.444 126.564,297.444C127.14,297.444 127.615,297.918 127.615,298.495Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M122.927,302.536C122.927,303.112 122.453,303.587 121.877,303.587C121.3,303.587 120.826,303.112 120.826,302.536C120.826,301.959 121.3,301.485 121.877,301.485C122.453,301.485 122.927,301.959 122.927,302.536Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M98.517,319.671C98.517,320.248 98.043,320.722 97.466,320.722C96.89,320.722 96.415,320.248 96.415,319.671C96.415,319.095 96.89,318.621 97.466,318.621C98.043,318.621 98.517,319.095 98.517,319.671Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M103.044,325.168C103.044,325.744 102.569,326.218 101.993,326.218C101.417,326.218 100.942,325.744 100.942,325.168C100.942,324.591 101.417,324.117 101.993,324.117C102.569,324.117 103.044,324.591 103.044,325.168Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M99.487,413.915C99.487,414.491 99.012,414.966 98.436,414.966C97.86,414.966 97.385,414.491 97.385,413.915C97.385,413.339 97.86,412.864 98.436,412.864C99.012,412.864 99.487,413.339 99.487,413.915Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M100.134,438.404C100.134,439.115 99.549,439.699 98.84,439.699C98.131,439.699 97.547,439.115 97.547,438.404C97.547,437.696 98.131,437.113 98.84,437.113C99.549,437.113 100.134,437.696 100.134,438.404Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M86.231,450.935C86.231,451.511 85.756,451.986 85.18,451.986C84.604,451.986 84.13,451.511 84.13,450.935C84.13,450.357 84.604,449.884 85.18,449.884C85.756,449.884 86.231,450.357 86.231,450.935Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M69.58,456.027C69.58,456.736 68.996,457.32 68.287,457.32C67.578,457.32 66.994,456.736 66.994,456.027C66.994,455.316 67.578,454.732 68.287,454.732C68.996,454.732 69.58,455.316 69.58,456.027Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M66.186,444.71C66.186,445.419 65.602,446.003 64.893,446.003C64.183,446.003 63.599,445.419 63.599,444.71C63.599,444.001 64.183,443.417 64.893,443.417C65.602,443.417 66.186,444.001 66.186,444.71Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M64.246,451.904C64.246,452.48 63.772,452.954 63.195,452.954C62.619,452.954 62.145,452.48 62.145,451.904C62.145,451.327 62.619,450.853 63.195,450.853C63.772,450.853 64.246,451.327 64.246,451.904Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M51.798,445.923C51.798,446.499 51.324,446.974 50.747,446.974C50.171,446.974 49.697,446.499 49.697,445.923C49.697,445.347 50.171,444.872 50.747,444.872C51.324,444.872 51.798,445.347 51.798,445.923Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M95.283,466.129C95.283,466.705 94.809,467.18 94.233,467.18C93.656,467.18 93.182,466.705 93.182,466.129C93.182,465.553 93.656,465.078 94.233,465.078C94.809,465.078 95.283,465.553 95.283,466.129Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M108.378,456.511C108.378,457.22 107.794,457.804 107.085,457.804C106.376,457.804 105.792,457.22 105.792,456.511C105.792,455.802 106.376,455.218 107.085,455.218C107.794,455.218 108.378,455.802 108.378,456.511Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M109.833,468.877C109.833,469.453 109.359,469.928 108.782,469.928C108.206,469.928 107.731,469.453 107.731,468.877C107.731,468.301 108.206,467.828 108.782,467.828C109.359,467.828 109.833,468.301 109.833,468.877Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M163.664,457.077C163.664,457.654 163.19,458.128 162.613,458.128C162.037,458.128 161.563,457.654 161.563,457.077C161.563,456.499 162.037,456.027 162.613,456.027C163.19,456.027 163.664,456.499 163.664,457.077Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M138.607,465.967C138.607,466.545 138.132,467.018 137.556,467.018C136.98,467.018 136.506,466.545 136.506,465.967C136.506,465.391 136.98,464.918 137.556,464.918C138.132,464.918 138.607,465.391 138.607,465.967Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M206.017,478.739C206.017,479.315 205.543,479.789 204.966,479.789C204.39,479.789 203.915,479.315 203.915,478.739C203.915,478.162 204.39,477.688 204.966,477.688C205.543,477.688 206.017,478.162 206.017,478.739Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M211.513,429.029C211.513,429.738 210.929,430.322 210.22,430.322C209.511,430.322 208.927,429.738 208.927,429.029C208.927,428.321 209.511,427.737 210.22,427.737C210.929,427.737 211.513,428.321 211.513,429.029Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M201.167,436.061C201.167,436.639 200.693,437.113 200.116,437.113C199.54,437.113 199.066,436.639 199.066,436.061C199.066,435.487 199.54,435.012 200.116,435.012C200.693,435.012 201.167,435.487 201.167,436.061Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M211.352,438.082C211.352,438.791 210.768,439.375 210.059,439.375C209.35,439.375 208.766,438.791 208.766,438.082C208.766,437.373 209.35,436.789 210.059,436.789C210.768,436.789 211.352,437.373 211.352,438.082Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M201.167,450.611C201.167,451.187 200.693,451.661 200.116,451.661C199.54,451.661 199.066,451.187 199.066,450.611C199.066,450.034 199.54,449.56 200.116,449.56C200.693,449.56 201.167,450.034 201.167,450.611Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M227.517,421.998C227.517,422.574 227.043,423.049 226.467,423.049C225.889,423.049 225.414,422.574 225.414,421.998C225.414,421.422 225.889,420.947 226.467,420.947C227.043,420.947 227.517,421.422 227.517,421.998Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M230.104,428.383C230.104,429.094 229.52,429.676 228.811,429.676C228.101,429.676 227.517,429.094 227.517,428.383C227.517,427.674 228.101,427.09 228.811,427.09C229.52,427.09 230.104,427.674 230.104,428.383Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M248.209,435.981C248.209,436.69 247.625,437.274 246.915,437.274C246.205,437.274 245.621,436.69 245.621,435.981C245.621,435.272 246.205,434.688 246.915,434.688C247.625,434.688 248.209,435.272 248.209,435.981Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M229.781,449.48C229.781,450.056 229.306,450.53 228.73,450.53C228.154,450.53 227.679,450.056 227.679,449.48C227.679,448.904 228.154,448.429 228.73,448.429C229.306,448.429 229.781,448.904 229.781,449.48Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M241.419,438.487C241.419,439.063 240.945,439.537 240.368,439.537C239.792,439.537 239.318,439.063 239.318,438.487C239.318,437.91 239.792,437.436 240.368,437.436C240.945,437.436 241.419,437.91 241.419,438.487Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M239.318,455.46C239.318,456.036 238.843,456.511 238.267,456.511C237.691,456.511 237.216,456.036 237.216,455.46C237.216,454.884 237.691,454.409 238.267,454.409C238.843,454.409 239.318,454.884 239.318,455.46Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M168.848,282.647C169.026,281.99 169.558,281.478 170.227,281.329L170.594,278.562L171.137,281.355C171.785,281.54 172.287,282.07 172.434,282.733L175.235,283.13L172.408,283.628C172.23,284.267 171.717,284.765 171.07,284.923L170.594,287.77L170.114,284.902C169.485,284.72 168.993,284.21 168.837,283.569L166.135,283.13L168.848,282.647Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M96.37,480.946C96.548,480.289 97.081,479.776 97.749,479.627L98.117,476.862L98.661,479.655C99.308,479.838 99.811,480.367 99.956,481.031L102.758,481.428L99.931,481.926C99.753,482.565 99.239,483.063 98.592,483.221L98.117,486.07L97.637,483.201C97.007,483.018 96.516,482.508 96.359,481.867L93.657,481.428L96.37,480.946Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M229.659,455.38C229.837,454.722 230.368,454.21 231.037,454.062L231.405,451.294L231.949,454.087C232.596,454.271 233.099,454.802 233.244,455.466L236.045,455.863L233.219,456.361C233.04,456.999 232.528,457.497 231.88,457.655L231.405,460.503L230.925,457.634C230.295,457.452 229.805,456.941 229.648,456.302L226.947,455.863L229.659,455.38Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M240.211,426.869C240.388,426.211 240.92,425.699 241.588,425.551L241.956,422.783L242.5,425.576C243.148,425.762 243.651,426.291 243.796,426.955L246.597,427.352L243.771,427.85C243.592,428.488 243.079,428.987 242.433,429.145L241.956,431.992L241.477,429.123C240.847,428.942 240.357,428.432 240.2,427.791L237.497,427.352L240.211,426.869Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M109.303,321.556C109.481,320.898 110.013,320.387 110.681,320.237L111.049,317.471L111.593,320.264C112.241,320.448 112.743,320.978 112.889,321.642L115.69,322.039L112.863,322.536C112.685,323.175 112.172,323.674 111.525,323.832L111.049,326.679L110.569,323.811C109.94,323.628 109.449,323.118 109.293,322.478L106.59,322.039L109.303,321.556Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M100.756,381.578C110.286,398.228 121.393,410.411 130.341,421.988C138.283,432.264 153.757,437.408 148.307,442.286C142.164,447.782 127.292,423.533 127.292,423.533C117.408,411.614 107.949,398.97 98.299,382.433L100.756,381.578Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M0,425.268C46.046,395.026 126.409,375.502 192.597,349.225C242.884,329.26 287.601,304.198 311.639,269.689C250.721,393.777 81.066,379.089 3.312,426.424L0,425.268Z",
                        style: {
                            fill: "rgb(237,28,36)",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M107.05,363.738L130.11,363.738L146.644,405.374L152.155,410.905L122.134,410.905L127.645,405.374L125.687,400.294L109.117,400.294L107.413,406.103L111.365,410.905L95.701,410.905L101.213,405.374L111.837,368.554L107.05,363.738ZM122.751,393.004L116.078,376.098L111.184,393.004L122.751,393.004Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M214.184,363.738L238.118,363.738L254.653,405.374L260.164,410.905L230.143,410.905L235.654,405.374L233.696,400.294L217.125,400.294L215.421,406.103L219.373,410.905L203.71,410.905L209.222,405.374L219.845,368.554L214.184,363.738ZM230.759,393.004L224.087,376.098L219.192,393.004L230.759,393.004Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M75.758,393.113L75.758,368.554L70.972,363.738L86.925,363.738L82.14,368.554L82.14,405.374L87.651,410.905L66.693,410.905L48.637,380.361L48.637,405.374L53.277,410.905L36.6,410.905L42.111,405.374L42.111,368.554L37.325,363.738L58.21,363.738L75.758,393.113Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M196.553,375.835L196.063,361.15L191.12,364.562C184.156,362.127 176.051,362.219 170.364,364.91C165.071,367.415 159.36,372.704 160.055,380.22C160.752,387.736 166.577,390.645 171.826,393.024C178.582,396.086 185.936,397.121 185.827,401.167C185.757,403.741 181.485,405.587 178.165,405.482C175.135,405.386 165.28,404.646 160.125,398.523L161.101,413.97L166.604,409.935C173.289,412.3 181.392,413.292 188.889,410.847C196.341,408.419 204.174,402.183 199.827,391.285C197.956,386.596 192.804,383.705 189.731,382.447C186.917,381.295 178.333,377.92 175.936,376.671C173.136,375.212 173.448,370.582 180.185,369.642C186.288,368.791 194.742,373.678 196.553,375.835Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M35.658,497.677C128.131,403.298 265.971,359.693 311.639,269.689C284.138,357.193 136.85,405.454 35.408,502.115L35.658,497.677Z",
                        style: {
                            fill: "rgb(237,28,36)",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M98.299,382.433C97.216,380.577 96.131,378.672 95.042,376.714C70.388,332.361 73.944,287.098 118.563,306.82C156.431,323.559 192.6,370.511 207.146,403.857C213.887,419.307 231.96,479.946 173.764,455.374L173.65,455.019C228.613,477.651 219.111,420.301 189.691,376.331C173.042,351.45 151.331,330.725 137.637,320.722C92.05,287.421 64.246,307.79 96.253,373.097C97.702,376.053 99.208,378.875 100.756,381.578L98.299,382.433Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)("g", {
                id: "nasa-logo-neg-mono",
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M273.427,129.05C273.427,199.811 215.188,258.05 144.427,258.05C73.665,258.05 15.427,199.811 15.427,129.05C15.427,58.289 73.665,0.05 144.427,0.05C215.188,0.05 273.427,58.289 273.427,129.05ZM263.427,129.05C263.427,194.326 209.703,248.05 144.427,248.05C79.151,248.05 25.427,194.326 25.427,129.05C25.427,63.774 79.151,10.05 144.427,10.05C209.703,10.05 263.427,63.774 263.427,129.05Z",
                        style: {
                            fill: "white"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M146.205,11.771C146.205,12.347 145.731,12.821 145.154,12.821C144.578,12.821 144.104,12.347 144.104,11.771C144.104,11.195 144.578,10.719 145.154,10.719C145.731,10.719 146.205,11.195 146.205,11.771Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M153.48,27.693C153.48,28.403 152.896,28.986 152.187,28.986C151.477,28.986 150.893,28.403 150.893,27.693C150.893,26.984 151.477,26.4 152.187,26.4C152.896,26.4 153.48,26.984 153.48,27.693Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M172.393,53.719C172.393,54.429 171.81,55.013 171.1,55.013C170.39,55.013 169.807,54.429 169.807,53.719C169.807,53.009 170.39,52.426 171.1,52.426C171.81,52.426 172.393,53.009 172.393,53.719Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M142.002,36.665C142.002,37.241 141.528,37.716 140.951,37.716C140.375,37.716 139.901,37.241 139.901,36.665C139.901,36.089 140.375,35.614 140.951,35.614C141.528,35.614 142.002,36.089 142.002,36.665Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M153.318,42.646C153.318,43.222 152.843,43.697 152.267,43.697C151.691,43.697 151.217,43.222 151.217,42.646C151.217,42.07 151.691,41.595 152.267,41.595C152.843,41.595 153.318,42.07 153.318,42.646Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M138.607,25.915C138.607,26.624 138.023,27.208 137.314,27.208C136.604,27.208 136.021,26.624 136.021,25.915C136.021,25.206 136.604,24.622 137.314,24.622C138.023,24.622 138.607,25.206 138.607,25.915Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M121.472,36.342C121.472,36.919 120.998,37.393 120.422,37.393C119.845,37.393 119.371,36.919 119.371,36.342C119.371,35.766 119.845,35.291 120.422,35.291C120.998,35.291 121.472,35.766 121.472,36.342Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M124.544,38.444C124.544,39.02 124.069,39.494 123.493,39.494C122.917,39.494 122.442,39.02 122.442,38.444C122.442,37.867 122.917,37.393 123.493,37.393C124.069,37.393 124.544,37.867 124.544,38.444Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M127.615,40.545C127.615,41.121 127.14,41.595 126.564,41.595C125.987,41.595 125.513,41.121 125.513,40.545C125.513,39.968 125.987,39.494 126.564,39.494C127.14,39.494 127.615,39.968 127.615,40.545Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M122.927,44.586C122.927,45.162 122.453,45.637 121.877,45.637C121.3,45.637 120.826,45.162 120.826,44.586C120.826,44.009 121.3,43.535 121.877,43.535C122.453,43.535 122.927,44.009 122.927,44.586Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M98.517,61.721C98.517,62.298 98.043,62.772 97.466,62.772C96.89,62.772 96.415,62.298 96.415,61.721C96.415,61.145 96.89,60.671 97.466,60.671C98.043,60.671 98.517,61.145 98.517,61.721Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M103.044,67.218C103.044,67.794 102.569,68.268 101.993,68.268C101.417,68.268 100.942,67.794 100.942,67.218C100.942,66.641 101.417,66.167 101.993,66.167C102.569,66.167 103.044,66.641 103.044,67.218Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M99.487,155.965C99.487,156.541 99.012,157.016 98.436,157.016C97.86,157.016 97.385,156.541 97.385,155.965C97.385,155.389 97.86,154.914 98.436,154.914C99.012,154.914 99.487,155.389 99.487,155.965Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M100.134,180.454C100.134,181.165 99.549,181.749 98.84,181.749C98.131,181.749 97.547,181.165 97.547,180.454C97.547,179.746 98.131,179.163 98.84,179.163C99.549,179.163 100.134,179.746 100.134,180.454Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M86.231,192.985C86.231,193.561 85.756,194.036 85.18,194.036C84.604,194.036 84.13,193.561 84.13,192.985C84.13,192.407 84.604,191.934 85.18,191.934C85.756,191.934 86.231,192.407 86.231,192.985Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M69.58,198.077C69.58,198.786 68.996,199.37 68.287,199.37C67.578,199.37 66.994,198.786 66.994,198.077C66.994,197.366 67.578,196.782 68.287,196.782C68.996,196.782 69.58,197.366 69.58,198.077Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M66.186,186.76C66.186,187.469 65.602,188.053 64.893,188.053C64.183,188.053 63.599,187.469 63.599,186.76C63.599,186.051 64.183,185.467 64.893,185.467C65.602,185.467 66.186,186.051 66.186,186.76Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M64.246,193.954C64.246,194.53 63.772,195.004 63.195,195.004C62.619,195.004 62.145,194.53 62.145,193.954C62.145,193.377 62.619,192.903 63.195,192.903C63.772,192.903 64.246,193.377 64.246,193.954Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M51.798,187.973C51.798,188.549 51.324,189.024 50.747,189.024C50.171,189.024 49.697,188.549 49.697,187.973C49.697,187.397 50.171,186.922 50.747,186.922C51.324,186.922 51.798,187.397 51.798,187.973Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M95.283,208.179C95.283,208.755 94.809,209.23 94.233,209.23C93.656,209.23 93.182,208.755 93.182,208.179C93.182,207.603 93.656,207.128 94.233,207.128C94.809,207.128 95.283,207.603 95.283,208.179Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M108.378,198.561C108.378,199.27 107.794,199.854 107.085,199.854C106.376,199.854 105.792,199.27 105.792,198.561C105.792,197.852 106.376,197.268 107.085,197.268C107.794,197.268 108.378,197.852 108.378,198.561Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M109.833,210.927C109.833,211.503 109.359,211.978 108.782,211.978C108.206,211.978 107.731,211.503 107.731,210.927C107.731,210.351 108.206,209.878 108.782,209.878C109.359,209.878 109.833,210.351 109.833,210.927Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M163.664,199.127C163.664,199.704 163.19,200.178 162.613,200.178C162.037,200.178 161.563,199.704 161.563,199.127C161.563,198.549 162.037,198.077 162.613,198.077C163.19,198.077 163.664,198.549 163.664,199.127Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M138.607,208.017C138.607,208.595 138.132,209.068 137.556,209.068C136.98,209.068 136.506,208.595 136.506,208.017C136.506,207.441 136.98,206.968 137.556,206.968C138.132,206.968 138.607,207.441 138.607,208.017Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M206.017,220.789C206.017,221.365 205.543,221.839 204.966,221.839C204.39,221.839 203.915,221.365 203.915,220.789C203.915,220.212 204.39,219.738 204.966,219.738C205.543,219.738 206.017,220.212 206.017,220.789Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M211.513,171.079C211.513,171.788 210.929,172.372 210.22,172.372C209.511,172.372 208.927,171.788 208.927,171.079C208.927,170.371 209.511,169.787 210.22,169.787C210.929,169.787 211.513,170.371 211.513,171.079Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M201.167,178.111C201.167,178.689 200.693,179.163 200.116,179.163C199.54,179.163 199.066,178.689 199.066,178.111C199.066,177.537 199.54,177.062 200.116,177.062C200.693,177.062 201.167,177.537 201.167,178.111Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M211.352,180.132C211.352,180.841 210.768,181.425 210.059,181.425C209.35,181.425 208.766,180.841 208.766,180.132C208.766,179.423 209.35,178.839 210.059,178.839C210.768,178.839 211.352,179.423 211.352,180.132Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M201.167,192.661C201.167,193.237 200.693,193.711 200.116,193.711C199.54,193.711 199.066,193.237 199.066,192.661C199.066,192.084 199.54,191.61 200.116,191.61C200.693,191.61 201.167,192.084 201.167,192.661Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M227.517,164.048C227.517,164.624 227.043,165.099 226.467,165.099C225.889,165.099 225.414,164.624 225.414,164.048C225.414,163.472 225.889,162.997 226.467,162.997C227.043,162.997 227.517,163.472 227.517,164.048Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M230.104,170.433C230.104,171.144 229.52,171.726 228.811,171.726C228.101,171.726 227.517,171.144 227.517,170.433C227.517,169.724 228.101,169.14 228.811,169.14C229.52,169.14 230.104,169.724 230.104,170.433Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M248.209,178.031C248.209,178.74 247.625,179.324 246.915,179.324C246.205,179.324 245.621,178.74 245.621,178.031C245.621,177.322 246.205,176.738 246.915,176.738C247.625,176.738 248.209,177.322 248.209,178.031Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M229.781,191.53C229.781,192.106 229.306,192.58 228.73,192.58C228.154,192.58 227.679,192.106 227.679,191.53C227.679,190.954 228.154,190.479 228.73,190.479C229.306,190.479 229.781,190.954 229.781,191.53Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M241.419,180.537C241.419,181.113 240.945,181.587 240.368,181.587C239.792,181.587 239.318,181.113 239.318,180.537C239.318,179.96 239.792,179.486 240.368,179.486C240.945,179.486 241.419,179.96 241.419,180.537Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M239.318,197.51C239.318,198.086 238.843,198.561 238.267,198.561C237.691,198.561 237.216,198.086 237.216,197.51C237.216,196.934 237.691,196.459 238.267,196.459C238.843,196.459 239.318,196.934 239.318,197.51Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M168.848,24.697C169.026,24.04 169.558,23.528 170.227,23.379L170.594,20.612L171.137,23.405C171.785,23.59 172.287,24.12 172.434,24.783L175.235,25.18L172.408,25.678C172.23,26.317 171.717,26.815 171.07,26.973L170.594,29.82L170.114,26.952C169.485,26.77 168.993,26.26 168.837,25.619L166.135,25.18L168.848,24.697Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M96.37,222.996C96.548,222.339 97.081,221.826 97.749,221.677L98.117,218.912L98.661,221.705C99.308,221.888 99.811,222.417 99.956,223.081L102.758,223.478L99.931,223.976C99.753,224.615 99.239,225.113 98.592,225.271L98.117,228.12L97.637,225.251C97.007,225.068 96.516,224.558 96.359,223.917L93.657,223.478L96.37,222.996Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M229.659,197.43C229.837,196.772 230.368,196.26 231.037,196.112L231.405,193.344L231.949,196.137C232.596,196.321 233.099,196.852 233.244,197.516L236.045,197.913L233.219,198.411C233.04,199.049 232.528,199.547 231.88,199.705L231.405,202.553L230.925,199.684C230.295,199.502 229.805,198.991 229.648,198.352L226.947,197.913L229.659,197.43Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M240.211,168.919C240.388,168.261 240.92,167.749 241.588,167.601L241.956,164.833L242.5,167.626C243.148,167.812 243.651,168.341 243.796,169.005L246.597,169.402L243.771,169.9C243.592,170.538 243.079,171.037 242.433,171.195L241.956,174.042L241.477,171.173C240.847,170.992 240.357,170.482 240.2,169.841L237.497,169.402L240.211,168.919Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M109.303,63.606C109.481,62.948 110.013,62.437 110.681,62.287L111.049,59.521L111.593,62.314C112.241,62.498 112.743,63.028 112.889,63.692L115.69,64.089L112.863,64.586C112.685,65.225 112.172,65.724 111.525,65.882L111.049,68.729L110.569,65.861C109.94,65.678 109.449,65.168 109.293,64.528L106.59,64.089L109.303,63.606Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M100.756,123.628C110.286,140.277 121.393,152.461 130.341,164.038C138.283,174.314 153.757,179.458 148.307,184.336C142.164,189.832 127.292,165.583 127.292,165.583C117.408,153.664 107.949,141.02 98.299,124.483L100.756,123.628Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M0,167.318C46.046,137.076 126.409,117.552 192.597,91.275C242.884,71.31 287.601,46.248 311.639,11.739C250.721,135.827 81.066,121.139 3.312,168.474L0,167.318Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M107.05,105.788L130.11,105.788L146.644,147.424L152.155,152.955L122.134,152.955L127.645,147.424L125.687,142.344L109.117,142.344L107.413,148.153L111.365,152.955L95.701,152.955L101.213,147.424L111.837,110.604L107.05,105.788ZM122.751,135.054L116.078,118.147L111.184,135.054L122.751,135.054Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M214.184,105.788L238.118,105.788L254.653,147.424L260.164,152.955L230.143,152.955L235.654,147.424L233.696,142.344L217.125,142.344L215.421,148.153L219.373,152.955L203.71,152.955L209.222,147.424L219.845,110.604L214.184,105.788ZM230.759,135.054L224.087,118.147L219.192,135.054L230.759,135.054Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M75.758,135.163L75.758,110.604L70.972,105.788L86.925,105.788L82.14,110.604L82.14,147.424L87.651,152.955L66.693,152.955L48.637,122.411L48.637,147.424L53.277,152.955L36.6,152.955L42.111,147.424L42.111,110.604L37.325,105.788L58.21,105.788L75.758,135.163Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M196.553,117.885L196.063,103.2L191.12,106.612C184.156,104.177 176.051,104.269 170.364,106.96C165.071,109.465 159.36,114.754 160.055,122.27C160.752,129.786 166.577,132.695 171.826,135.074C178.582,138.136 185.936,139.171 185.827,143.217C185.757,145.791 181.485,147.637 178.165,147.532C175.135,147.436 165.28,146.696 160.125,140.573L161.101,156.02L166.604,151.985C173.289,154.35 181.392,155.342 188.889,152.897C196.341,150.469 204.174,144.233 199.827,133.335C197.956,128.646 192.804,125.755 189.731,124.497C186.917,123.345 178.333,119.97 175.936,118.72C173.136,117.262 173.448,112.632 180.185,111.692C186.288,110.841 194.742,115.728 196.553,117.885Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M35.658,239.727C128.131,145.348 265.971,101.743 311.639,11.739C284.138,99.243 136.85,147.504 35.408,244.165L35.658,239.727Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                        d: "M98.299,124.483C97.216,122.627 96.131,120.722 95.042,118.763C70.388,74.411 73.944,29.148 118.563,48.87C156.431,65.609 192.6,112.561 207.146,145.907C213.887,161.356 231.96,221.996 173.764,197.424L173.65,197.069C228.613,219.701 219.111,162.351 189.691,118.38C173.042,93.5 151.331,72.775 137.637,62.772C92.05,29.471 64.246,49.84 96.253,115.147C97.702,118.102 99.208,120.925 100.756,123.628L98.299,124.483Z",
                        style: {
                            fill: "white",
                            fillRule: "nonzero"
                        }
                    })
                ]
            })
        ]
    });
}

});

parcelRequire.register("5IeAT", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a59be22b88be0e8d$export$2e2bcd8739ae039; });







var $7d8fr = parcelRequire("7d8fr");

var $e2FCm = parcelRequire("e2FCm");
const $a59be22b88be0e8d$var$StyledGoogleForm = (0, $22uAH$styledcomponents).iframe.withConfig({
    displayName: "google-form__StyledGoogleForm",
    componentId: "sc-h0e1pb-0"
})([
    "width:100%;"
]);
const $a59be22b88be0e8d$var$ButtonAsNavLink = (0, $22uAH$styledcomponents)((0, $22uAH$Button)).withConfig({
    displayName: "google-form__ButtonAsNavLink",
    componentId: "sc-h0e1pb-1"
})([
    "",
    " ",
    ""
], (0, $22uAH$media).mediumUp`
    background-color: ${(0, $22uAH$themeVal)("color.primary-700")};

    &:hover {
      background-color: ${(0, $22uAH$themeVal)("color.primary-800")};
    }

    /* Print & when prop is passed */
    ${({ active: active  })=>active && "&,"}
    &:active,
    &.active {
      background-color: ${(0, $22uAH$themeVal)("color.primary-900")};
    }

    &:focus-visible {
      background-color: ${(0, $22uAH$themeVal)("color.primary-200a")};
    }
  `, (0, $22uAH$media).mediumDown`
    ${(0, $e2FCm.default)}
  `);
function $a59be22b88be0e8d$var$GoogleForm() {
    const { isRevealed: isRevealed , show: show , hide: hide  } = (0, $7d8fr.useFeedbackModal)();
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($a59be22b88be0e8d$var$ButtonAsNavLink, {
                type: "button",
                size: "large",
                onClick: show,
                style: {
                    color: "white"
                },
                children: "Contact Us"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Modal), {
                id: "modal",
                size: "large",
                title: "Contact Us",
                revealed: isRevealed,
                onCloseClick: hide,
                onOverlayClick: hide,
                closeButton: true,
                content: /*#__PURE__*/ (0, $22uAH$jsx)($a59be22b88be0e8d$var$StyledGoogleForm, {
                    src: "https://docs.google.com/forms/d/e/1FAIpQLSfGcd3FDsM3kQIOVKjzdPn4f88hX8RZ4Qef7qBsTtDqxjTSkg/viewform?embedded=true",
                    height: 504,
                    frameBorder: 0,
                    marginHeight: 0,
                    marginWidth: 0,
                    children: "Loading…"
                })
            })
        ]
    });
}
var $a59be22b88be0e8d$export$2e2bcd8739ae039 = $a59be22b88be0e8d$var$GoogleForm;

});
parcelRequire.register("e2FCm", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a39188ff1d0bb883$export$2e2bcd8739ae039; });



var $de7zf = parcelRequire("de7zf");
const $a39188ff1d0bb883$var$GlobalMenuLinkCSS = (0, $22uAH$css)([
    "appearance:none;position:relative;display:flex;gap:",
    ";align-items:center;border:0;background:none;cursor:pointer;color:currentColor;text-decoration:none;text-align:left;padding:",
    ";transition:all 0.32s ease 0s;text-transform:",
    ";font-weight:",
    ";",
    " &:hover{opacity:0.64;}> *{flex-shrink:0;}&::after{content:'';position:absolute;bottom:0;left:0;width:0.125rem;height:0;background:currentColor;",
    "}&.active::after{",
    " ",
    "}"
], (0, $22uAH$glsp)(0.25), (0, $de7zf.variableGlsp)(0, 1), (0, $22uAH$themeVal)("button.type.case"), (0, $22uAH$themeVal)("button.type.weight"), (0, $22uAH$media).largeUp`
    padding: ${(0, $22uAH$glsp)(0.5, 0)};
  `, (0, $22uAH$media).largeUp`
      width: 0;
      height: 0.125rem;
    `, (0, $22uAH$media).mediumDown`
      height: 100%;
    `, (0, $22uAH$media).largeUp`
      width: 100%;
    `);
var $a39188ff1d0bb883$export$2e2bcd8739ae039 = $a39188ff1d0bb883$var$GlobalMenuLinkCSS;

});


parcelRequire.register("g45Fr", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $61c432061b2651af$export$2e2bcd8739ae039; });

function $61c432061b2651af$var$UnscrollableBody() {
    (0, $22uAH$useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, []);
    return null;
}
var $61c432061b2651af$export$2e2bcd8739ae039 = $61c432061b2651af$var$UnscrollableBody;

});

parcelRequire.register("knZgP", function(module, exports) {

$parcel$export(module.exports, "ABOUT_PATH", function () { return $a69c2be404b02de0$export$a9d707845a74e7f7; });
$parcel$export(module.exports, "STORIES_PATH", function () { return $a69c2be404b02de0$export$5b5d95bbf9e564e2; });
$parcel$export(module.exports, "DATASETS_PATH", function () { return $a69c2be404b02de0$export$e08818004a56cd24; });
$parcel$export(module.exports, "EXPLORATION_PATH", function () { return $a69c2be404b02de0$export$f71537b6bf0df664; });
$parcel$export(module.exports, "ANALYSIS_PATH", function () { return $a69c2be404b02de0$export$d952fbb7ee3525f2; });
$parcel$export(module.exports, "getDatasetPath", function () { return $a69c2be404b02de0$export$a995bc6de1f28ece; });
$parcel$export(module.exports, "getDatasetExplorePath", function () { return $a69c2be404b02de0$export$7d452796c80bafa8; });

var $EAuO5 = parcelRequire("EAuO5");
const $a69c2be404b02de0$export$a9d707845a74e7f7 = "/about";
const $a69c2be404b02de0$export$5b5d95bbf9e564e2 = "/stories";
const $a69c2be404b02de0$export$e08818004a56cd24 = "/data-catalog";
const $a69c2be404b02de0$export$f71537b6bf0df664 = "/exploration";
const $a69c2be404b02de0$export$d952fbb7ee3525f2 = "/analysis";
const $a69c2be404b02de0$export$c5349a07710ccfb7 = "/analysis/results";
const $a69c2be404b02de0$export$26aedbbd667bd78b = (d)=>`${$a69c2be404b02de0$export$5b5d95bbf9e564e2}/${typeof d === "string" ? d : d.id}`;
const $a69c2be404b02de0$export$a995bc6de1f28ece = (d)=>`${$a69c2be404b02de0$export$e08818004a56cd24}/${typeof d === "string" ? d : d.id}`;
const $a69c2be404b02de0$export$7d452796c80bafa8 = (d)=>{
    if (!(0, $EAuO5.checkEnvFlag)(undefined)) return `${$a69c2be404b02de0$export$e08818004a56cd24}/${typeof d === "string" ? d : d.id}/explore`;
    const id = typeof d === "string" ? d : d.id;
    return `${$a69c2be404b02de0$export$f71537b6bf0df664}?search=${id}`;
};

});






parcelRequire.register("6WR6j", function(module, exports) {

$parcel$export(module.exports, "NotebookConnectModal", function () { return $e3dcb0137583a47a$export$1866d6992a79a72a; });
$parcel$export(module.exports, "NotebookConnectCalloutBlock", function () { return $e3dcb0137583a47a$export$109c5c5bc7d581c0; });








var $etfqO = parcelRequire("etfqO");

var $9gKLh = parcelRequire("9gKLh");

var $de7zf = parcelRequire("de7zf");
const $e3dcb0137583a47a$var$DatasetUsages = (0, $22uAH$styledcomponents).ul.withConfig({
    displayName: "notebook-connect__DatasetUsages",
    componentId: "sc-1bg6f68-0"
})([
    "display:grid;grid-template-columns:1fr;gap:",
    ";margin-bottom:",
    ";list-style-type:none;padding:0;",
    ""
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$media).smallUp`
    grid-template-columns: 1fr 1fr;
  `);
const $e3dcb0137583a47a$var$DatasetUsageLink = (0, $22uAH$styledcomponents).a.withConfig({
    displayName: "notebook-connect__DatasetUsageLink",
    componentId: "sc-1bg6f68-1"
})([
    "display:flex;padding:",
    ";text-decoration:none;color:",
    ";border-radius:",
    ";background:",
    ";outline:0 solid transparent;transition:transform 0.24s ease-in-out 0s,outline-width 0.16s ease-in-out 0s;& > svg{flex:0 0 auto;margin:0.25rem 0.5rem 0 0;}&:visited{color:",
    ";}&:hover{transform:translate(0,0.125rem);}&:focus-visible{outline-width:0.25rem;outline-color:",
    ";}&:focus:not(:focus-visible){outline:0;}"
], (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.primary-50"), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.primary"));
const $e3dcb0137583a47a$var$DatasetUsageLabel = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "notebook-connect__DatasetUsageLabel",
    componentId: "sc-1bg6f68-2"
})([
    "& > h4{font-weight:normal;}& > p{color:",
    ";font-size:0.875rem;}"
], (0, $22uAH$themeVal)("color.base"));
const $e3dcb0137583a47a$var$IconByType = {
    jupyter: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCog), {}),
    github: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonBook), {}),
    download: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonDownload2), {}),
    unknown: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCog), {})
};
function $e3dcb0137583a47a$export$1866d6992a79a72a(props) {
    const { dataset: dataset , revealed: revealed , onClose: onClose  } = props;
    const datasetUsages = dataset?.usage;
    const datasetUsagesWithIcon = (0, $22uAH$useMemo)(()=>{
        return datasetUsages?.map((d)=>{
            let type = "unknown";
            if (d.url.match("nasa-veda.2i2c.cloud")) type = "jupyter";
            else if (d.url.match("github.com/NASA-IMPACT/veda-docs")) type = "github"; // TO DO: browser UI url pattern check
            else if (d.url.match("browseui")) type = "download";
            return {
                ...d,
                type: type
            };
        });
    }, [
        datasetUsages
    ]);
    if (!datasetUsages || !datasetUsagesWithIcon) return null;
    const layerIdsSet = dataset.layers.reduce((acc, layer)=>acc.add(layer.stacCol), new Set());
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Modal), {
        id: "modal",
        size: "medium",
        title: "How to use this dataset",
        revealed: revealed,
        onCloseClick: onClose,
        onOverlayClick: onClose,
        closeButton: true,
        content: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)($e3dcb0137583a47a$var$DatasetUsages, {
                    children: datasetUsagesWithIcon.map((datasetUsage)=>/*#__PURE__*/ (0, $22uAH$jsx)("li", {
                            children: /*#__PURE__*/ (0, $22uAH$jsxs)($e3dcb0137583a47a$var$DatasetUsageLink, {
                                href: datasetUsage.url,
                                target: "_blank",
                                rel: "noopener",
                                children: [
                                    $e3dcb0137583a47a$var$IconByType[datasetUsage.type],
                                    /*#__PURE__*/ (0, $22uAH$jsxs)($e3dcb0137583a47a$var$DatasetUsageLabel, {
                                        children: [
                                            /*#__PURE__*/ (0, $22uAH$jsx)("h4", {
                                                children: datasetUsage.title
                                            }),
                                            /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                                                children: datasetUsage.label
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, datasetUsage.url))
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                    children: "For reference, the following STAC collection ID's are associated with this dataset:"
                }),
                /*#__PURE__*/ (0, $22uAH$jsx)("ul", {
                    children: Array.from(layerIdsSet).map((id)=>/*#__PURE__*/ (0, $22uAH$jsx)("li", {
                            children: /*#__PURE__*/ (0, $22uAH$jsx)("code", {
                                children: id
                            })
                        }, id))
                })
            ]
        })
    });
}
function $e3dcb0137583a47a$var$NotebookConnectButtonSelf(props) {
    const { className: className , compact: compact = true , variation: variation = "primary-fill" , size: size = "medium" , dataset: dataset  } = props;
    const [revealed, setRevealed] = (0, $22uAH$useState)(false);
    const close = (0, $22uAH$useCallback)(()=>setRevealed(false), []);
    const datasetUsages = dataset?.usage;
    if (!datasetUsages) return null;
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Button), {
                className: className,
                type: "button",
                variation: variation,
                fitting: compact ? "skinny" : "regular",
                onClick: ()=>setRevealed(true),
                size: size,
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCode), {
                        meaningful: compact,
                        title: "Open data usage options"
                    }),
                    compact ? "" : "Access Data"
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)($e3dcb0137583a47a$export$1866d6992a79a72a, {
                dataset: dataset,
                revealed: revealed,
                onClose: close
            })
        ]
    });
}
const $e3dcb0137583a47a$export$3ddf9ca7b41c0f7c = (0, $22uAH$styledcomponents)($e3dcb0137583a47a$var$NotebookConnectButtonSelf).withConfig({
    displayName: "notebook-connect__NotebookConnectButton",
    componentId: "sc-1bg6f68-3"
})([
    ""
]);
function $e3dcb0137583a47a$var$NotebookConnectCalloutSelf(props) {
    const { children: children , datasetId: datasetId , className: className  } = props;
    if (!datasetId) throw new (0, $9gKLh.HintedError)("Malformed Map Block", [
        "Missing property: datasetId"
    ]);
    const dataset = (0, $etfqO.datasets)[datasetId];
    if (!dataset) throw new (0, $9gKLh.HintedError)("Malformed Map Block", [
        `Dataset not found: ${datasetId}`
    ]);
    if (!dataset.data.usage?.length) throw new (0, $9gKLh.HintedError)("Malformed Map Block", [
        `Dataset does not have 'usage' defined: ${datasetId}`
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                children: children
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)($e3dcb0137583a47a$export$3ddf9ca7b41c0f7c // compact={false}
            , {
                variation: "base-outline",
                dataset: dataset.data
            })
        ]
    });
}
const $e3dcb0137583a47a$export$109c5c5bc7d581c0 = (0, $22uAH$styledcomponents)($e3dcb0137583a47a$var$NotebookConnectCalloutSelf).withConfig({
    displayName: "notebook-connect__NotebookConnectCalloutBlock",
    componentId: "sc-1bg6f68-4"
})([
    "display:flex;flex-flow:row nowrap;border-radius:",
    ";background:",
    ";padding:",
    ";gap:",
    ";box-shadow:inset 0 -1px 0 0 ",
    ";",
    "{margin-left:auto;}"
], (0, $22uAH$multiply)((0, $22uAH$themeVal)("shape.rounded"), 2), (0, $22uAH$themeVal)("color.base-50"), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.base-50a"), $e3dcb0137583a47a$export$3ddf9ca7b41c0f7c);

});



var $jegiK = parcelRequire("jegiK");















var $knZgP = parcelRequire("knZgP");

var $6WR6j = parcelRequire("6WR6j");



const $9ca0df9ef22aeeb9$var$DropMenuItemButton = (0, $22uAH$styledcomponents)((0, $22uAH$DropMenuItem)).attrs({
    as: "button",
    "data-dropdown": "click.close"
}).withConfig({
    displayName: "drop-menu-item-button__DropMenuItemButton",
    componentId: "sc-l6vivq-0"
})([
    "background:none;border:none;width:100%;cursor:pointer;text-align:left;",
    ""
], (props)=>$9ca0df9ef22aeeb9$var$renderVariation(props));
var $9ca0df9ef22aeeb9$export$2e2bcd8739ae039 = $9ca0df9ef22aeeb9$var$DropMenuItemButton;
function $9ca0df9ef22aeeb9$var$renderVariation(props) {
    const { variation: variation = "base" , active: active  } = props;
    return (0, $22uAH$css)([
        "color:",
        ";&:hover{color:",
        ";background-color:",
        ";}",
        " &.active{background-color:",
        ";}&:focus-visible{outline-color:",
        ";}"
    ], (0, $22uAH$themeVal)(`color.${variation}`), (0, $22uAH$themeVal)(`color.${variation}`), (0, $22uAH$themeVal)(`color.${variation}-50a`), active && "&,", (0, $22uAH$themeVal)(`color.${variation}-100a`), (0, $22uAH$themeVal)(`color.${variation}-200a`));
}



var $fwaez = parcelRequire("fwaez");
const $5cfa6760eeb979d0$var$TriggerButton = (0, $22uAH$styledcomponents)((0, $22uAH$Button)).withConfig({
    displayName: "dataset-menu__TriggerButton",
    componentId: "sc-1d05o20-0"
})([
    "margin-left:auto;"
]);
const $5cfa6760eeb979d0$var$DropMenuItemButtonDisable = (0, $22uAH$styledcomponents)((0, $9ca0df9ef22aeeb9$export$2e2bcd8739ae039)).withConfig({
    displayName: "dataset-menu__DropMenuItemButtonDisable",
    componentId: "sc-1d05o20-1"
})([
    "",
    ""
], ({ visuallyDisabled: v  })=>v && (0, $22uAH$visuallyDisabled)());
function $5cfa6760eeb979d0$var$DatasetMenu(props) {
    const { dataset: dataset  } = props;
    const [revealed, setRevealed] = (0, $22uAH$useState)(false);
    const close = (0, $22uAH$useCallback)(()=>setRevealed(false), []);
    const hasUsage = !!dataset.usage?.length;
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $6WR6j.NotebookConnectModal), {
                dataset: dataset,
                revealed: revealed,
                onClose: close
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Dropdown), {
                alignment: "right",
                direction: "up" // eslint-disable-next-line @typescript-eslint/no-unused-vars
                ,
                triggerElement: ({ className: className , ...rest })=>/*#__PURE__*/ (0, $22uAH$jsx)($5cfa6760eeb979d0$var$TriggerButton // @ts-expect-error achromic-text exists. The problem is bad typing in the UI library.
                    , {
                        variation: "achromic-text",
                        fitting: "skinny",
                        size: "small",
                        ...rest,
                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonEllipsisVertical), {})
                    }),
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropTitle), {
                        children: "Options"
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$DropMenu), {
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$DropMenuItem), {
                                    as: (0, $22uAH$Link),
                                    "data-dropdown": "click.close",
                                    to: (0, $knZgP.getDatasetPath)(dataset),
                                    children: [
                                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonPage), {}),
                                        " Learn more"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$DropMenuItem), {
                                    as: (0, $22uAH$Link),
                                    "data-dropdown": "click.close",
                                    to: (0, $knZgP.getDatasetExplorePath)(dataset),
                                    children: [
                                        /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCompass), {}),
                                        " Explore data"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                                    content: "This dataset has no usage information",
                                    disabled: hasUsage,
                                    children: /*#__PURE__*/ (0, $22uAH$jsxs)($5cfa6760eeb979d0$var$DropMenuItemButtonDisable, {
                                        onClick: ()=>setRevealed(true),
                                        visuallyDisabled: !hasUsage,
                                        children: [
                                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonCode), {}),
                                            "Access data"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $5cfa6760eeb979d0$export$2e2bcd8739ae039 = $5cfa6760eeb979d0$var$DatasetMenu;












const $c70fdeba21f061b5$var$SearchFieldWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "search-field__SearchFieldWrapper",
    componentId: "sc-1ezyakq-0"
})([
    "display:flex;flex-flow:column;align-items:flex-end;width:100%;"
]);
const $c70fdeba21f061b5$var$SearchFieldMessage = (0, $22uAH$styledcomponents)((0, $22uAH$FormHelperMessage)).withConfig({
    displayName: "search-field__SearchFieldMessage",
    componentId: "sc-1ezyakq-1"
})([
    "line-height:1.5rem;transition:max-width 320ms ease-in-out,opacity 160ms ease-in-out 160ms;white-space:nowrap;max-width:0;opacity:0;",
    " ",
    ""
], ({ isOpen: isOpen  })=>isOpen && (0, $22uAH$css)([
        "width:100%;max-width:100%;"
    ]), ({ isFocused: isFocused  })=>isFocused && (0, $22uAH$css)([
        "opacity:1;"
    ]));
const $c70fdeba21f061b5$var$SearchFieldContainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "search-field__SearchFieldContainer",
    componentId: "sc-1ezyakq-2"
})([
    "position:relative;display:flex;width:100%;background-color:",
    ";::before{position:absolute;inset:0;pointer-events:none;display:block;content:'';border-radius:",
    ";box-shadow:inset 0 0 0 1px ",
    ";}&:focus-within{border-radius:",
    ";outline-width:0.25rem;outline-color:",
    ";outline-style:solid;}"
], (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.base"), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.primary-200a"));
const $c70fdeba21f061b5$var$SearchFieldClearable = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "search-field__SearchFieldClearable",
    componentId: "sc-1ezyakq-3"
})([
    "display:flex;overflow:hidden;transition:max-width 320ms ease-in-out;width:100%;",
    ""
], ({ isOpen: isOpen  })=>isOpen && (0, $22uAH$css)([
        "width:100%;max-width:100%;"
    ]));
const $c70fdeba21f061b5$var$FormInputSearch = (0, $22uAH$styledcomponents)((0, $22uAH$FormInput)).withConfig({
    displayName: "search-field__FormInputSearch",
    componentId: "sc-1ezyakq-4"
})([
    "border:0;padding-left:0;padding-right:0;width:100%;"
]);
function $c70fdeba21f061b5$var$SearchField(props) {
    const { value: value , onChange: onChange , keepOpen: keepOpen , size: size , ...rest } = props;
    const fieldRef = (0, $22uAH$useRef)(null);
    const [isFocused, setFocused] = (0, $22uAH$useState)(false);
    const isOpen = isFocused || !!value.length || !!keepOpen;
    return /*#__PURE__*/ (0, $22uAH$jsxs)($c70fdeba21f061b5$var$SearchFieldWrapper, {
        className: "search-field",
        children: [
            /*#__PURE__*/ (0, $22uAH$jsxs)($c70fdeba21f061b5$var$SearchFieldContainer, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Button), {
                        size: size,
                        fitting: "skinny",
                        onClick: ()=>{
                            fieldRef.current?.focus();
                            setFocused(true);
                        },
                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonMagnifierLeft), {
                            meaningful: true,
                            title: "Open search"
                        })
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)($c70fdeba21f061b5$var$SearchFieldClearable, {
                        isOpen: isOpen,
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)($c70fdeba21f061b5$var$FormInputSearch, {
                                ref: fieldRef,
                                ...rest,
                                size: size,
                                value: value,
                                onChange: (e)=>onChange(e.target.value),
                                onFocus: ()=>{
                                    setFocused(true);
                                },
                                onBlur: ()=>{
                                    setFocused(false);
                                }
                            }),
                            !!value.length && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Button), {
                                size: size,
                                fitting: "skinny",
                                onClick: ()=>{
                                    onChange("");
                                },
                                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonDiscXmark), {
                                    meaningful: true,
                                    title: "Clear search"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)($c70fdeba21f061b5$var$SearchFieldMessage, {
                isOpen: isOpen,
                isFocused: isFocused,
                children: "Minimum 3 characters"
            })
        ]
    });
}
var $c70fdeba21f061b5$export$2e2bcd8739ae039 = $c70fdeba21f061b5$var$SearchField;










var $de7zf = parcelRequire("de7zf");





var $de7zf = parcelRequire("de7zf");

var $5InEa = parcelRequire("5InEa");
const $52b1edac16385c47$export$321b6557957bf9c6 = (0, $22uAH$styledcomponents).article.withConfig({
    displayName: "styles__CardBlank",
    componentId: "sc-j44xa9-0"
})([
    "position:relative;display:flex;flex-flow:column nowrap;border-radius:",
    ";box-shadow:",
    ";height:100%;overflow:hidden;transition:all 0.24s ease-in-out 0s;"
], (0, $22uAH$multiply)((0, $22uAH$themeVal)("shape.rounded"), 2), (0, $22uAH$themeVal)("boxShadow.elevationD"));
const $52b1edac16385c47$export$bb29c16f5612603e = (0, $22uAH$styledcomponents).ol.withConfig({
    displayName: "styles__CardList",
    componentId: "sc-j44xa9-1"
})([
    "",
    " width:100%;display:flex;flex-direction:column;gap:1.5rem;"
], (0, $22uAH$listReset)());
const $52b1edac16385c47$export$b00a90afeaf1eab4 = (0, $22uAH$styledcomponents).ol.withConfig({
    displayName: "styles__CardListGrid",
    componentId: "sc-j44xa9-2"
})([
    "",
    " grid-column:1 / -1;display:grid;gap:",
    ";grid-template-columns:repeat(1,1fr);",
    " ",
    " > li{min-width:0;}"
], (0, $22uAH$listReset)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$media).mediumUp`
    grid-template-columns: repeat(2, 1fr);
  `, (0, $22uAH$media).largeUp`
    grid-template-columns: repeat(3, 1fr);
  `);
const $52b1edac16385c47$export$5665775b26e26c5d = (0, $22uAH$styledcomponents).header.withConfig({
    displayName: "styles__CardHeader",
    componentId: "sc-j44xa9-3"
})([
    "display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:flex-end;padding:",
    ";gap:",
    ";"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
const $52b1edac16385c47$export$de55224050bee4d7 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styles__CardHeadline",
    componentId: "sc-j44xa9-4"
})([
    "display:flex;flex-flow:column nowrap;gap:",
    ";"
], (0, $22uAH$glsp)(0.25));
const $52b1edac16385c47$export$9b6a647253f61c5f = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styles__CardActions",
    componentId: "sc-j44xa9-5"
})([
    ""
]);
const $52b1edac16385c47$export$474db65c3c394e1c = (0, $22uAH$styledcomponents)((0, $5InEa.VarHeading)).attrs({
    as: "h3",
    size: "small"
}).withConfig({
    displayName: "styles__CardTitle",
    componentId: "sc-j44xa9-6"
})([
    ""
]);
const $52b1edac16385c47$export$df063b277b1eb93 = (0, $22uAH$styledcomponents)((0, $22uAH$Overline)).withConfig({
    displayName: "styles__CardOverline",
    componentId: "sc-j44xa9-7"
})([
    "order:-1;color:",
    ";> *{line-height:inherit;}i{",
    "}"
], (0, $22uAH$themeVal)("color.base-400a"), (0, $22uAH$visuallyHidden)());
const $52b1edac16385c47$export$a8ae421c739691bf = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styles__CardMeta",
    componentId: "sc-j44xa9-8"
})([
    "display:flex;gap:",
    ";a{color:inherit;pointer-events:all;&,&:visited{text-decoration:none;color:inherit;}&:hover{opacity:0.64;}}> ",
    ":last-child{display:none;}> ",
    ":first-child{display:none;}"
], (0, $22uAH$glsp)(0.25), /* sc-selector */ (0, $22uAH$VerticalDivider), /* sc-selector */ (0, $22uAH$VerticalDivider));
const $52b1edac16385c47$export$851de33184ecdac4 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styles__CardBody",
    componentId: "sc-j44xa9-9"
})([
    "padding:",
    ";&:not(:first-child){padding-top:0;margin-top:",
    ";}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(-0.5));
const $52b1edac16385c47$export$e9897d434e0741ee = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "styles__CardFooter",
    componentId: "sc-j44xa9-10"
})([
    "display:flex;flex-flow:row nowrap;gap:",
    ";padding:",
    ";&:not(:first-child){padding-top:0;margin-top:",
    ";}button{pointer-events:all;}"
], (0, $de7zf.variableGlsp)(0.5), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(-0.5));
const $52b1edac16385c47$export$7391ae7cd9297896 = (0, $22uAH$styledcomponents).dl.withConfig({
    displayName: "styles__CardTopicsList",
    componentId: "sc-j44xa9-11"
})([
    "display:flex;gap:",
    ";max-width:100%;width:100%;overflow:hidden;mask-image:linear-gradient( to right,black calc(100% - 3rem),transparent 100% );> dt{",
    "}"
], (0, $de7zf.variableGlsp)(0.25), (0, $22uAH$visuallyHidden)());


const $52e7593592b6009e$var$FilterMenu = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "checkable-filter__FilterMenu",
    componentId: "sc-1lwkete-0"
})([
    "border:2px solid ",
    ";border-radius:",
    ";padding:12px;margin-bottom:1.5rem;"
], (0, $22uAH$themeVal)("color.base-200"), (0, $22uAH$themeVal)("shape.rounded"));
const $52e7593592b6009e$var$FilterTitle = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "checkable-filter__FilterTitle",
    componentId: "sc-1lwkete-1"
})([
    "display:flex;justify-content:space-between;#title-selected{display:flex;flex-direction:column;gap:",
    ";",
    "{font-size:",
    ";}}span{font-size:1rem;color:",
    ";}"
], (0, $de7zf.variableGlsp)(0.1), (0, $52b1edac16385c47$export$474db65c3c394e1c), (0, $de7zf.variableBaseType)("0.7rem"), (0, $22uAH$themeVal)("color.base-500"));
const $52e7593592b6009e$var$Options = (0, $22uAH$styledcomponents)((0, $22uAH$FormCheckableGroup)).withConfig({
    displayName: "checkable-filter__Options",
    componentId: "sc-1lwkete-2"
})([
    "padding-top:6px;div{width:100%;padding:4px 8px;}.checked{background-color:",
    ";outline-width:1px;outline-color:",
    ";outline-style:solid;}"
], (0, $22uAH$themeVal)("color.primary-100"), (0, $22uAH$themeVal)("color.primary-300"));
const $52e7593592b6009e$var$Option = (0, $22uAH$styledcomponents)((0, $22uAH$FormCheckable)).withConfig({
    displayName: "checkable-filter__Option",
    componentId: "sc-1lwkete-3"
})([
    "font-size:",
    ";display:flex;align-items:center;"
], (0, $de7zf.variableBaseType)("0.6rem"));
const $52e7593592b6009e$var$Toggle = (0, $22uAH$styledcomponents)((0, $22uAH$Toolbar)).withConfig({
    displayName: "checkable-filter__Toggle",
    componentId: "sc-1lwkete-4"
})([
    "align-items:start;"
]);
const $52e7593592b6009e$var$ToggleIconButton = (0, $22uAH$styledcomponents)((0, $22uAH$ToolbarIconButton)).withConfig({
    displayName: "checkable-filter__ToggleIconButton",
    componentId: "sc-1lwkete-5"
})([
    "background-color:inherit;"
]);
function $52e7593592b6009e$export$2e2bcd8739ae039(props) {
    const { items: items , title: title , onChanges: onChanges , globallySelected: globallySelected , tagItemCleared: tagItemCleared  } = props;
    const [show, setShow] = (0, $22uAH$useState)(true);
    const [count, setCount] = (0, $22uAH$useState)(0);
    const [selected, setSelected] = (0, $22uAH$useState)([]);
    const handleChange = (0, $22uAH$useCallback)((e)=>{
        const idInfo = e.target.id.split("&&");
        const taxonomy = idInfo[0];
        const id = idInfo[1];
        const optionItem = {
            taxonomy: taxonomy,
            name: e.target.name,
            id: id
        };
        if (e.target.checked) {
            setCount((prevValue)=>prevValue + 1);
            setSelected([
                ...selected,
                optionItem
            ]); // Local
            onChanges(optionItem); // Global to filters-control
        } else {
            setCount((prevValue)=>prevValue - 1);
            setSelected(selected.filter((item)=>item.id !== e.target.id));
            onChanges(optionItem);
        }
    }, [
        selected
    ]);
    const isChecked = (item)=>globallySelected.some((selected)=>selected.id == item.id && selected.taxonomy == item.taxonomy);
    (0, $22uAH$useEffect)(()=>{
        if (!globallySelected || globallySelected.length === 0) setCount(0);
        if (globallySelected.length > 0) setSelected(selected.filter((item)=>item.id));
        else setSelected([]);
    }, [
        globallySelected
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (tagItemCleared?.item && globallySelected.length > 0) {
            setCount((prevValue)=>prevValue - 1);
            setSelected(selected.filter((item)=>item.id !== tagItemCleared.item?.id));
            tagItemCleared?.callback?.(undefined);
        }
    }, [
        tagItemCleared,
        globallySelected
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsxs)($52e7593592b6009e$var$FilterMenu, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsxs)($52e7593592b6009e$var$FilterTitle, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
                        id: "title-selected",
                        children: [
                            /*#__PURE__*/ (0, $22uAH$jsx)((0, $52b1edac16385c47$export$474db65c3c394e1c), {
                                children: title
                            }),
                            count > 0 && /*#__PURE__*/ (0, $22uAH$jsxs)("span", {
                                children: [
                                    count,
                                    " selected"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)($52e7593592b6009e$var$Toggle, {
                        size: "small",
                        children: /*#__PURE__*/ (0, $22uAH$jsx)($52e7593592b6009e$var$ToggleIconButton, {
                            active: show,
                            onClick: ()=>setShow(!show),
                            children: show ? /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonChevronUp), {}) : /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonChevronDown), {})
                        })
                    })
                ]
            }),
            show && /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$FormGroupStructure), {
                label: "",
                id: "",
                children: /*#__PURE__*/ (0, $22uAH$jsx)($52e7593592b6009e$var$Options, {
                    children: items.map((item)=>{
                        const checked = isChecked(item);
                        return /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                            className: checked ? "checked" : "unchecked",
                            children: /*#__PURE__*/ (0, $22uAH$jsx)($52e7593592b6009e$var$Option, {
                                value: item.name,
                                onChange: (e)=>handleChange(e),
                                checked: checked,
                                type: "checkbox",
                                name: item.name,
                                id: `${item.taxonomy}&&${item.id}`,
                                children: item.name
                            }, item.id)
                        }, item.id);
                    })
                })
            })
        ]
    });
}






let $d78e2e231d21091f$export$b52183d5cfb26dc9;
(function(Actions) {
    Actions["CLEAR"] = "clear";
    Actions["SEARCH"] = "search";
    Actions["SORT_FIELD"] = "sfield";
    Actions["SORT_DIR"] = "sdir";
    Actions["TAXONOMY"] = "taxonomy";
    Actions["TAXONOMY_MULTISELECT"] = "taxonomy_multiselect";
})($d78e2e231d21091f$export$b52183d5cfb26dc9 || ($d78e2e231d21091f$export$b52183d5cfb26dc9 = {}));
const $d78e2e231d21091f$export$526912d39fe676af = [
    {
        id: "asc",
        name: "Ascending"
    },
    {
        id: "desc",
        name: "Descending"
    }
];
const $d78e2e231d21091f$export$f5136d9d0932b663 = {
    id: "all",
    name: "All"
};
function $d78e2e231d21091f$export$592eb0ca299a64be({ sortOptions: sortOptions  }) {
    // Setup Qs State to store data in the url's query string
    // react-router function to get the navigation.
    const navigate = (0, $22uAH$useNavigate1)();
    const useQsState = (0, $22uAH$qsstatehook)({
        commit: navigate
    });
    const [sortField, setSortField] = useQsState.memo({
        key: $d78e2e231d21091f$export$b52183d5cfb26dc9.SORT_FIELD,
        // If pubDate exists, default sorting to this
        default: sortOptions.find((o)=>o.id === "pubDate")?.id || sortOptions[0]?.id,
        validator: sortOptions.map((d)=>d.id)
    }, [
        sortOptions
    ]);
    const [sortDir, setSortDir] = useQsState.memo({
        key: $d78e2e231d21091f$export$b52183d5cfb26dc9.SORT_DIR,
        default: $d78e2e231d21091f$export$526912d39fe676af[0].id,
        validator: $d78e2e231d21091f$export$526912d39fe676af.map((d)=>d.id)
    }, []);
    const [search, setSearch] = useQsState.memo({
        key: $d78e2e231d21091f$export$b52183d5cfb26dc9.SEARCH,
        default: ""
    }, []);
    const [taxonomies, setTaxonomies] = useQsState.memo({
        key: $d78e2e231d21091f$export$b52183d5cfb26dc9.TAXONOMY,
        default: {},
        dehydrator: (v)=>JSON.stringify(v),
        // dehydrator defines how a value is stored in the url
        hydrator: (v)=>v ? JSON.parse(v) : {} // hydrator defines how a value is read from the url
    }, []);
    const onAction = (0, $22uAH$useCallback)((what, value)=>{
        switch(what){
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.CLEAR:
                setSearch("");
                setTaxonomies({});
                break;
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.SEARCH:
                setSearch(value);
                break;
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.SORT_FIELD:
                setSortField(value);
                break;
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.SORT_DIR:
                setSortDir(value);
                break;
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.TAXONOMY:
                {
                    const { key: key , value: val  } = value;
                    if (val === $d78e2e231d21091f$export$f5136d9d0932b663.id) setTaxonomies((0, $22uAH$omit)(taxonomies, key));
                    else setTaxonomies((0, $22uAH$set)({
                        ...taxonomies
                    }, key, val));
                }
                break;
            case $d78e2e231d21091f$export$b52183d5cfb26dc9.TAXONOMY_MULTISELECT:
                {
                    const { key: key1 , value: val1  } = value;
                    if (taxonomies && key1 in taxonomies) {
                        // If taxonomy group currently present
                        const taxonomyGroupValues = taxonomies[key1] instanceof Array ? taxonomies[key1] : [
                            taxonomies[key1]
                        ];
                        if (taxonomyGroupValues.includes(val1)) {
                            // If val exists, then remove
                            const updatedValues = taxonomyGroupValues.filter((x)=>x !== val1);
                            updatedValues.length ? setTaxonomies((0, $22uAH$set)({
                                ...taxonomies
                            }, key1, updatedValues)) : setTaxonomies((0, $22uAH$omit)(taxonomies, key1));
                        } else {
                            // else add
                            taxonomyGroupValues.push(val1);
                            setTaxonomies(taxonomies);
                        }
                    } else // Taxonomy group currently not present
                    setTaxonomies((0, $22uAH$set)({
                        ...taxonomies
                    }, key1, [
                        val1
                    ]));
                }
                break;
        }
    }, [
        setSortField,
        setSortDir,
        taxonomies,
        setTaxonomies,
        setSearch
    ]);
    return {
        search: search,
        sortField: sortField,
        sortDir: sortDir,
        taxonomies: taxonomies,
        onAction: onAction
    };
}



var $dP18j = parcelRequire("dP18j");
const $440c024744a1266e$var$ControlsWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "filters-control__ControlsWrapper",
    componentId: "sc-14pskno-0"
})([
    "min-width:20rem;width:",
    ";position:sticky;top:calc(",
    " + 1rem);height:",
    ";transition:top ",
    "ms ease-out;"
], (props)=>props.widthValue ?? "20rem", (props)=>props.topValue, (props)=>props.heightValue, (0, $dP18j.HEADER_TRANSITION_DURATION));
function $440c024744a1266e$export$2e2bcd8739ae039(props) {
    const { allSelected: allSelected , onAction: onAction , taxonomiesOptions: taxonomiesOptions , search: search , width: width , onChangeToFilters: onChangeToFilters , clearedTagItem: clearedTagItem , setClearedTagItem: setClearedTagItem  } = props;
    const controlsRef = (0, $22uAH$useRef)(null);
    const [controlsHeight, setControlsHeight] = (0, $22uAH$useState)(0);
    const { isHeaderHidden: isHeaderHidden , wrapperHeight: wrapperHeight  } = (0, $dP18j.useSlidingStickyHeader)();
    const handleChanges = (0, $22uAH$useCallback)((item)=>{
        if (allSelected.some((selected)=>selected.id == item.id && selected.taxonomy == item.taxonomy)) {
            setClearedTagItem?.(undefined);
            if (onChangeToFilters) onChangeToFilters(item, "remove");
        } else {
            setClearedTagItem?.(undefined);
            if (onChangeToFilters) onChangeToFilters(item, "add");
        }
    }, [
        allSelected,
        setClearedTagItem,
        onChangeToFilters
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!controlsRef.current) return;
        const height = controlsRef.current.offsetHeight;
        setControlsHeight(height); // Observe the height change of controls (from accordion folding)
        const resizeObserver = new ResizeObserver(([entry])=>{
            if (entry.borderBoxSize.length > 0) {
                const borderBoxSize = entry.borderBoxSize[0]; // blockSize: For boxes with a horizontal writing-mode, this is the vertical dimension
                setControlsHeight(borderBoxSize.blockSize);
            }
        });
        resizeObserver.observe(controlsRef.current);
        return ()=>resizeObserver.disconnect(); // clean up 
    }, [
        controlsRef
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsx)($440c024744a1266e$var$ControlsWrapper, {
        widthValue: width,
        heightValue: controlsHeight + "px",
        topValue: isHeaderHidden ? "0px" : `${wrapperHeight}px`,
        children: /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
            ref: controlsRef,
            children: [
                /*#__PURE__*/ (0, $22uAH$jsx)((0, $c70fdeba21f061b5$export$2e2bcd8739ae039), {
                    size: "large",
                    placeholder: "Search by title, description",
                    value: search ?? "",
                    onChange: (v)=>onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).SEARCH, v)
                }),
                taxonomiesOptions.map((taxonomy)=>{
                    const items = taxonomy.values.map((t)=>({
                            ...t,
                            taxonomy: taxonomy.name
                        }));
                    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $52e7593592b6009e$export$2e2bcd8739ae039), {
                        items: items,
                        title: taxonomy.name,
                        onChanges: handleChanges,
                        globallySelected: allSelected,
                        tagItemCleared: {
                            item: clearedTagItem,
                            callback: setClearedTagItem
                        }
                    }, taxonomy.name);
                })
            ]
        })
    });
}








var $de7zf = parcelRequire("de7zf");
const $889b0db21a892740$var$Tag = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "filter-tag__Tag",
    componentId: "sc-yufjma-0"
})([
    "display:flex;width:fit-content;justify-content:center;background-color:",
    ";margin:",
    ";padding:6px 0 6px 6px;outline-width:1px;outline-color:",
    ";outline-style:solid;border-radius:2px;font-size:",
    ";button{background:none;border:none;outline:none;box-shadow:none;display:flex;align-items:center;}"
], (0, $22uAH$themeVal)("color.base-50"), (0, $22uAH$glsp)(0.25), (0, $22uAH$themeVal)("color.base-200"), (0, $de7zf.variableBaseType)("0.6rem"));
function $889b0db21a892740$export$2e2bcd8739ae039(props) {
    const { item: item , onClick: onClick  } = props;
    const handleClick = ()=>{
        onClick(item);
    };
    return /*#__PURE__*/ (0, $22uAH$jsxs)($889b0db21a892740$var$Tag, {
        children: [
            item.name,
            /*#__PURE__*/ (0, $22uAH$jsx)("button", {
                type: "button",
                onClick: handleClick,
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonXmarkSmall), {})
            })
        ]
    });
}




var $47Isj = parcelRequire("47Isj");
const $8a84c9dc72a6ca08$var$prepareDatasets = (data, options)=>{
    const { sortField: sortField , sortDir: sortDir , search: search , taxonomies: taxonomies , filterLayers: filterLayers  } = options;
    let filtered = [
        ...data
    ]; // Does the free text search appear in specific fields?
    if (search.length >= 3) {
        const searchLower = search.toLowerCase(); // Function to check if searchLower is included in any of the string fields
        const includesSearchLower = (str)=>str.toLowerCase().includes(searchLower); // Function to determine if a layer matches the search criteria
        const layerMatchesSearch = (layer)=>includesSearchLower(layer.stacCol) || includesSearchLower(layer.name) || includesSearchLower(layer.parentDataset.name) || includesSearchLower(layer.parentDataset.id) || includesSearchLower(layer.description);
        filtered = filtered.filter((d)=>{
            // Pre-calculate lowercased versions to use in comparisons
            const idLower = d.id.toLowerCase();
            const nameLower = d.name.toLowerCase();
            const descriptionLower = d.description.toLowerCase();
            const topicsTaxonomy = d.taxonomy.find((t)=>t.name === (0, $47Isj.TAXONOMY_TOPICS)); // Check if any of the conditions for including the item are met
            return idLower.includes(searchLower) || nameLower.includes(searchLower) || descriptionLower.includes(searchLower) || d.layers.some(layerMatchesSearch) || topicsTaxonomy?.values.some((t)=>includesSearchLower(t.name));
        });
        if (filterLayers) filtered = filtered.map((d)=>({
                ...d,
                layers: d.layers.filter(layerMatchesSearch)
            }));
    }
    taxonomies && Object.entries(taxonomies).forEach(([name, value])=>{
        if (!value.includes((0, $d78e2e231d21091f$export$f5136d9d0932b663).id)) filtered = filtered.filter((d)=>d.taxonomy.some((t)=>t.name === name && t.values.some((v)=>value.includes(v.id))));
    });
    sortField && /* eslint-disable-next-line fp/no-mutating-methods */ filtered.sort((a, b)=>{
        if (!a[sortField]) return Infinity;
        return a[sortField]?.localeCompare(b[sortField]);
    });
    if (sortDir === "desc") /* eslint-disable-next-line fp/no-mutating-methods */ filtered.reverse();
    return filtered;
};
var $8a84c9dc72a6ca08$export$2e2bcd8739ae039 = $8a84c9dc72a6ca08$var$prepareDatasets;




var $7d8fr = parcelRequire("7d8fr");





var $de7zf = parcelRequire("de7zf");

var $5InEa = parcelRequire("5InEa");



var $de7zf = parcelRequire("de7zf");
const $49876e455af0d3bb$var$Constrainer = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "constrainer__Constrainer",
    componentId: "sc-ij23n0-0"
})([
    "display:grid;gap:",
    ";grid-template-columns:repeat(4,1fr);width:100%;max-width:",
    ";margin:0 auto;padding-left:",
    ";padding-right:",
    ";",
    " ",
    ""
], (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("layout.max"), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$media).mediumUp`
    grid-template-columns: repeat(8, 1fr);
  `, (0, $22uAH$media).largeUp`
    grid-template-columns: repeat(12, 1fr);
  `);
var $49876e455af0d3bb$export$2e2bcd8739ae039 = $49876e455af0d3bb$var$Constrainer;



var $4qnuQ = parcelRequire("4qnuQ");
const $758e7226f15125ec$export$e513643ad18ce599 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldBase",
    componentId: "sc-1b6okii-0"
})([
    "padding-top:",
    ";padding-bottom:",
    ";& + &{padding-top:0;}"
], (0, $de7zf.variableGlsp)(2), (0, $de7zf.variableGlsp)(2));
const $758e7226f15125ec$export$346abda115f190d2 = (0, $22uAH$styledcomponents)((0, $4qnuQ.default)).withConfig({
    displayName: "fold__FoldGrid",
    componentId: "sc-1b6okii-1"
})([
    "padding-top:",
    ";padding-bottom:",
    ";& + &,& + ",
    "{padding-top:0;}"
], (0, $de7zf.variableGlsp)(2), (0, $de7zf.variableGlsp)(2), $758e7226f15125ec$export$e513643ad18ce599);
const $758e7226f15125ec$var$FoldInner = (0, $22uAH$styledcomponents)((0, $49876e455af0d3bb$export$2e2bcd8739ae039)).withConfig({
    displayName: "fold__FoldInner",
    componentId: "sc-1b6okii-2"
})([
    ""
]);
const $758e7226f15125ec$export$20dbefdb0820cc7e = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldHeader",
    componentId: "sc-1b6okii-3"
})([
    "grid-column:1 / -1;display:flex;flex-flow:column nowrap;gap:",
    ";",
    " > a{flex-shrink:0;}"
], (0, $de7zf.variableGlsp)(), (0, $22uAH$media).largeUp`
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
  `);
const $758e7226f15125ec$export$d198f4e612bfff3f = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldHeadline",
    componentId: "sc-1b6okii-4"
})([
    "p{margin:1rem 0 0 0;}"
]);
const $758e7226f15125ec$export$ca5026cdd6359846 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldHeadActions",
    componentId: "sc-1b6okii-5"
})([
    "display:flex;flex-flow:row nowrap;align-items:center;gap:",
    ";"
], (0, $de7zf.variableGlsp)(0.5));
const $758e7226f15125ec$export$d5162af383626d28 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldHGroup",
    componentId: "sc-1b6okii-6"
})([
    "gap:",
    ";"
], (0, $de7zf.variableGlsp)(0.125));
const $758e7226f15125ec$export$112c405e29c5130c = (0, $22uAH$styledcomponents)((0, $5InEa.VarHeading)).attrs({
    as: "h2",
    size: "xlarge"
}).withConfig({
    displayName: "fold__FoldTitle",
    componentId: "sc-1b6okii-7"
})([
    "column-span:all;max-width:52rem;display:flex;flex-direction:column;gap:calc(",
    " - ",
    ");&::before{content:'';width:",
    ";height:",
    ";border-radius:",
    ";background:",
    ";}"
], (0, $22uAH$glsp)(), (0, $22uAH$glsp)(0.25), (0, $22uAH$glsp)(2), (0, $22uAH$glsp)(0.25), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.primary"));
const $758e7226f15125ec$export$f2b68822595bc04e = (0, $22uAH$styledcomponents)((0, $5InEa.VarLead)).withConfig({
    displayName: "fold__FoldLead",
    componentId: "sc-1b6okii-8"
})([
    "color:inherit;"
]);
const $758e7226f15125ec$export$71143095dc9523f1 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "fold__FoldBody",
    componentId: "sc-1b6okii-9"
})([
    "grid-column:1 / -1;display:flex;flex-flow:column nowrap;gap:",
    ";"
], (0, $de7zf.variableGlsp)());
const $758e7226f15125ec$var$Content = (0, $22uAH$styledcomponents)((0, $5InEa.VarProse)).withConfig({
    displayName: "fold__Content",
    componentId: "sc-1b6okii-10"
})([
    "grid-column:1 / span 4;",
    " ",
    ""
], (0, $22uAH$media).mediumUp`
    grid-column: 2 / span 6;
  `, (0, $22uAH$media).largeUp`
    grid-column: 3 / span 8;
  `);
function $758e7226f15125ec$var$FoldComponent(props) {
    const { children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($758e7226f15125ec$export$e513643ad18ce599, {
        ...rest,
        children: /*#__PURE__*/ (0, $22uAH$jsx)($758e7226f15125ec$var$FoldInner, {
            children: children
        })
    });
}
const $758e7226f15125ec$export$71b56ab8b1d5480d = (0, $22uAH$styledcomponents)($758e7226f15125ec$var$FoldComponent).withConfig({
    displayName: "fold__Fold",
    componentId: "sc-1b6okii-11"
})([
    ""
]);
function $758e7226f15125ec$export$3acc350f02190877(props) {
    const { children: children  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsx)($758e7226f15125ec$export$e513643ad18ce599, {
        children: /*#__PURE__*/ (0, $22uAH$jsx)($758e7226f15125ec$var$FoldInner, {
            children: /*#__PURE__*/ (0, $22uAH$jsx)($758e7226f15125ec$var$Content, {
                children: children
            })
        })
    });
}
















var $de7zf = parcelRequire("de7zf");


const $7ca3528ef9ff6bdb$var$renderPillVariation = ({ variation: variation  })=>{
    switch(variation){
        case "achromic":
            return (0, $22uAH$css)([
                "color:",
                ";background:",
                ";"
            ], (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("color.surface-100a"));
        case "warning":
            return (0, $22uAH$css)([
                "color:",
                ";background:",
                ";"
            ], (0, $22uAH$themeVal)("color.danger-500"), (0, $22uAH$themeVal)("color.danger-200a"));
        case "primary":
        default:
            return (0, $22uAH$css)([
                "color:",
                ";background:",
                ";"
            ], (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.primary-100a"));
    }
};
const $7ca3528ef9ff6bdb$export$d2cf3038149dd1b5 = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "pill__Pill",
    componentId: "sc-18yqf5w-0"
})([
    "display:inline-flex;vertical-align:top;border-radius:",
    ";padding:",
    ";transition:all 0.24s ease 0s;font-size:0.75rem;line-height:1.25rem;font-weight:",
    ";white-space:nowrap;",
    ":is(a){pointer-events:auto;&,&:visited{text-decoration:none;}&:hover{opacity:0.64;}}"
], (0, $22uAH$themeVal)("shape.ellipsoid"), (0, $22uAH$glsp)(0.125, 0.75), (0, $22uAH$themeVal)("type.base.bold"), $7ca3528ef9ff6bdb$var$renderPillVariation);


const $0d48b55a375708ab$var$HorizontalCard = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "horizontal-info-card__HorizontalCard",
    componentId: "sc-ny9ew6-0"
})([
    "display:flex;height:inherit;"
]);
const $0d48b55a375708ab$var$CardImage = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "horizontal-info-card__CardImage",
    componentId: "sc-ny9ew6-1"
})([
    "min-width:10rem;width:10rem;height:100%;img{width:100%;height:100%;object-fit:cover;}"
]);
const $0d48b55a375708ab$var$CardContent = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "horizontal-info-card__CardContent",
    componentId: "sc-ny9ew6-2"
})([
    "display:flex;flex-direction:column;padding:1.5rem 1rem;"
]);
const $0d48b55a375708ab$export$9b1cabb95df82258 = (0, $22uAH$css)([
    "height:10rem;color:",
    ";",
    "{font-size:",
    ";}#description{font-size:",
    ";height:3rem;margin:0.5rem 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;}#tags{display:flex;gap:",
    ";}"
], (0, $22uAH$themeVal)("color.base-800"), (0, $52b1edac16385c47$export$474db65c3c394e1c), (0, $de7zf.variableBaseType)("0.7rem"), (0, $de7zf.variableBaseType)("0.6rem"), (0, $22uAH$glsp)(0.5));
function $0d48b55a375708ab$export$2e2bcd8739ae039(props) {
    const { title: title , description: description , imgSrc: imgSrc , imgAlt: imgAlt , tagLabels: tagLabels  } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)($0d48b55a375708ab$var$HorizontalCard, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($0d48b55a375708ab$var$CardImage, {
                children: /*#__PURE__*/ (0, $22uAH$jsx)("img", {
                    src: imgSrc,
                    alt: imgAlt,
                    loading: "lazy"
                })
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)($0d48b55a375708ab$var$CardContent, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $52b1edac16385c47$export$474db65c3c394e1c), {
                        children: title
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                        id: "description",
                        children: /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                            children: description
                        })
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsx)("div", {
                        id: "tags",
                        children: tagLabels && tagLabels.map((label)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $7ca3528ef9ff6bdb$export$d2cf3038149dd1b5), {
                                variation: "primary",
                                children: label
                            }, label))
                    })
                ]
            })
        ]
    });
}



var $de7zf = parcelRequire("de7zf");




const $eb34a313aec8bf12$var$InteractiveLink = (0, $22uAH$styledcomponents).a.withConfig({
    displayName: "element-interactive__InteractiveLink",
    componentId: "sc-1beva1w-0"
})([
    "position:absolute;inset:0;z-index:-1;pointer-events:auto;font-size:0;margin:0;"
]);
const $eb34a313aec8bf12$export$e6dfd72ab29f8598 = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "element-interactive__Wrapper",
    componentId: "sc-1beva1w-1"
})([
    "position:relative;z-index:1;> *:not(a){pointer-events:none;}"
]);
const $eb34a313aec8bf12$export$5898f455345088bd = /*#__PURE__*/ (0, $22uAH$react).forwardRef(function ElementInteractiveFwd(props, ref) {
    const { linkProps: linkProps = {} , linkLabel: linkLabel = "View" , children: children , ...rest } = props;
    const [isStateOver, setStateOver] = (0, $22uAH$useState)(false);
    const [isStateActive, setStateActive] = (0, $22uAH$useState)(false);
    const [isStateFocus, setStateFocus] = (0, $22uAH$useState)(false);
    return /*#__PURE__*/ (0, $22uAH$jsxs)($eb34a313aec8bf12$export$e6dfd72ab29f8598, {
        ref: ref,
        ...rest,
        isStateOver: isStateOver,
        isStateActive: isStateActive,
        isStateFocus: isStateFocus,
        onFocus: (0, $22uAH$useCallback)(()=>setStateFocus(true), []),
        onBlur: (0, $22uAH$useCallback)(()=>setStateFocus(false), []),
        onMouseEnter: (0, $22uAH$useCallback)(()=>setStateOver(true), []),
        onMouseLeave: (0, $22uAH$useCallback)(()=>{
            setStateOver(false);
            setStateActive(false);
        }, []),
        children: [
            children,
            /*#__PURE__*/ (0, $22uAH$jsx)($eb34a313aec8bf12$var$InteractiveLink, {
                ...linkProps,
                onMouseDown: (0, $22uAH$useCallback)(()=>setStateActive(true), []),
                onMouseUp: (0, $22uAH$useCallback)(()=>setStateActive(false), []),
                onFocus: (0, $22uAH$useCallback)(()=>setStateFocus(true), []),
                onBlur: (0, $22uAH$useCallback)(()=>setStateFocus(false), []),
                children: linkLabel
            })
        ]
    });
});
$eb34a313aec8bf12$export$5898f455345088bd.propTypes = {
    children: (0, $22uAH$proptypes).node.isRequired,
    linkLabel: (0, $22uAH$proptypes).string.isRequired,
    linkProps: (0, $22uAH$proptypes).object
}; /**
🍀 FULL EXAMPLE CODE

import { Link } from 'react-router-dom'
import { ElementInteractive, Wrapper } from './element-interactive';

const WrapperElement = styled(Wrapper).attrs({ as: 'article' })`
  ${({ isStateFocus }) => isStateFocus && css``}
  ${({ isStateOver }) => isStateOver && css``}
  ${({ isStateActive }) => isStateActive && css``}
`;

function MyComponent() {
  return (
    <ElementInteractive
      as={WrapperElement}
      linkLabel='View more'
      linkProps={{
        as: Link,
        to: '/member/123'
      }}
    >
      <p>Content for this item</p>
      <button>click</button>
    </ElementInteractive>
  );
}
*/ 



var $jdv3b = parcelRequire("jdv3b");

var $50Ucy = parcelRequire("50Ucy");
const $3d3a3642affe42cc$export$bb29c16f5612603e = (0, $22uAH$styledcomponents).ol.withConfig({
    displayName: "card__CardList",
    componentId: "sc-1lozmjm-0"
})([
    "",
    " grid-column:1 / -1;display:grid;gap:",
    ";grid-template-columns:repeat(1,1fr);",
    " ",
    " > li{min-width:0;}"
], (0, $22uAH$listReset)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$media).mediumUp`
    grid-template-columns: repeat(2, 1fr);
  `, (0, $22uAH$media).largeUp`
    grid-template-columns: repeat(3, 1fr);
  `);
const $3d3a3642affe42cc$export$e9897d434e0741ee = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "card__CardFooter",
    componentId: "sc-1lozmjm-1"
})([
    "display:flex;flex-flow:row nowrap;gap:",
    ";padding:",
    ";&:not(:first-child){padding-top:0;margin-top:",
    ";}button{pointer-events:all;}"
], (0, $de7zf.variableGlsp)(0.5), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(-0.5));
function $3d3a3642affe42cc$var$renderCardType({ cardType: cardType  }) {
    switch(cardType){
        case "cover":
            return (0, $22uAH$css)([
                "padding-top:",
                ";background:",
                ";color:",
                ";justify-content:flex-end;",
                "{position:absolute;inset:0;z-index:-1;background:",
                ";}",
                "{color:",
                ";}"
            ], (0, $de7zf.variableGlsp)(2), (0, $22uAH$themeVal)("color.base-400"), (0, $22uAH$themeVal)("color.surface"), $3d3a3642affe42cc$var$CardFigure, (0, $22uAH$themeVal)("color.base-400"), (0, $52b1edac16385c47$export$df063b277b1eb93), (0, $22uAH$themeVal)("color.surface-400a"));
        case "featured":
            return (0, $22uAH$css)([
                "padding-top:",
                ";color:",
                ";justify-content:flex-end;min-height:16rem;",
                " ",
                "{position:absolute;inset:0;z-index:-1;background:",
                ";}",
                "{font-size:",
                ";max-width:52rem;}",
                "{color:",
                ";}",
                "{font-size:",
                ";max-width:52rem;}"
            ], (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$media).mediumUp`
          min-height: 28rem;
        `, $3d3a3642affe42cc$var$CardFigure, (0, $22uAH$themeVal)("color.base-400"), (0, $52b1edac16385c47$export$474db65c3c394e1c), (0, $de7zf.variableBaseType)("1.5rem"), (0, $52b1edac16385c47$export$df063b277b1eb93), (0, $22uAH$themeVal)("color.surface-400a"), (0, $52b1edac16385c47$export$851de33184ecdac4), (0, $de7zf.variableBaseType)("1rem"));
        case "horizontal-info":
            return 0, $0d48b55a375708ab$export$9b1cabb95df82258;
        default:
            return (0, $22uAH$css)([
                "background:transparent;"
            ]);
    }
}
const $3d3a3642affe42cc$export$d14d08fa0d83d69d = (0, $22uAH$styledcomponents)((0, $52b1edac16385c47$export$321b6557957bf9c6)).withConfig({
    displayName: "card__CardItem",
    componentId: "sc-1lozmjm-2"
})([
    "",
    " ",
    " ",
    " ",
    ""
], $3d3a3642affe42cc$var$renderCardType, ({ isStateFocus: isStateFocus  })=>isStateFocus && (0, $22uAH$css)([
        "box-shadow:",
        ";transform:translate(0,0.125rem);"
    ], (0, $22uAH$themeVal)("boxShadow.elevationC")), ({ isStateOver: isStateOver  })=>isStateOver && (0, $22uAH$css)([
        "box-shadow:",
        ";transform:translate(0,0.125rem);"
    ], (0, $22uAH$themeVal)("boxShadow.elevationC")), ({ isStateActive: isStateActive  })=>isStateActive && (0, $22uAH$css)([
        "box-shadow:",
        ";transform:translate(0,0.125rem);"
    ], (0, $22uAH$themeVal)("boxShadow.elevationB")));
const $3d3a3642affe42cc$var$CardLabel = (0, $22uAH$styledcomponents).span.withConfig({
    displayName: "card__CardLabel",
    componentId: "sc-1lozmjm-3"
})([
    "position:absolute;z-index:1;top:",
    ";right:",
    ";display:inline-block;vertical-align:top;color:",
    ";border-radius:",
    ";padding:",
    ";background:",
    ";pointer-events:auto;transition:all 0.24s ease 0s;&,&:visited{text-decoration:none;}&:hover{opacity:0.64;}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$themeVal)("shape.ellipsoid"), (0, $22uAH$glsp)(0.125, 0.5), (0, $22uAH$themeVal)("color.base-400a"));
const $3d3a3642affe42cc$var$CardFigure = (0, $22uAH$styledcomponents)((0, $jdv3b.Figure)).withConfig({
    displayName: "card__CardFigure",
    componentId: "sc-1lozmjm-4"
})([
    "order:-1;img{height:100%;width:100%;object-fit:cover;mix-blend-mode:multiply;}"
]);
const $3d3a3642affe42cc$var$ExternalLinkMark = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "card__ExternalLinkMark",
    componentId: "sc-1lozmjm-5"
})([
    "display:flex;align-items:center;position:absolute;top:",
    ";right:",
    ";padding:",
    " ",
    ";background-color:",
    ";color:",
    ";text-transform:none;border-radius:calc( ",
    " - ",
    " );z-index:1;"
], (0, $de7zf.variableGlsp)(0.25), (0, $de7zf.variableGlsp)(0.25), (0, $de7zf.variableGlsp)(0.125), (0, $de7zf.variableGlsp)(0.25), (0, $22uAH$themeVal)("color.primary"), (0, $22uAH$themeVal)("color.surface"), (0, $22uAH$multiply)((0, $22uAH$themeVal)("shape.rounded"), 2), (0, $de7zf.variableGlsp)(0.125));
const $3d3a3642affe42cc$var$FlagText = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "card__FlagText",
    componentId: "sc-1lozmjm-6"
})([
    "display:inline;font-weight:bold;font-size:0.825rem;margin-right:",
    ";"
], (0, $de7zf.variableGlsp)(0.25));
function $3d3a3642affe42cc$export$53f216714f50123e() {
    return /*#__PURE__*/ (0, $22uAH$jsxs)($3d3a3642affe42cc$var$ExternalLinkMark, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($3d3a3642affe42cc$var$FlagText, {
                children: "External Link"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonExpandTopRight), {
                size: "small",
                meaningful: false
            })
        ]
    });
}
function $3d3a3642affe42cc$var$CardComponent(props) {
    const { className: className , title: title , cardType: cardType , description: description , linkLabel: linkLabel , linkTo: linkTo , date: date , overline: overline , imgSrc: imgSrc , imgAlt: imgAlt , tagLabels: tagLabels , parentTo: parentTo , footerContent: footerContent , onCardClickCapture: onCardClickCapture , onLinkClick: onLinkClick  } = props;
    const isExternalLink = /^https?:\/\//.test(linkTo);
    const linkProps = (0, $50Ucy.getLinkProps)(linkTo, (0, $22uAH$Link), onLinkClick);
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $eb34a313aec8bf12$export$5898f455345088bd), {
        as: $3d3a3642affe42cc$export$d14d08fa0d83d69d,
        cardType: cardType,
        className: className,
        linkLabel: linkLabel || "View more",
        linkProps: linkProps,
        onClickCapture: onCardClickCapture,
        children: [
            cardType !== "horizontal-info" && /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $52b1edac16385c47$export$5665775b26e26c5d), {
                        children: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $52b1edac16385c47$export$de55224050bee4d7), {
                            children: [
                                /*#__PURE__*/ (0, $22uAH$jsx)((0, $52b1edac16385c47$export$474db65c3c394e1c), {
                                    children: title
                                }),
                                /*#__PURE__*/ (0, $22uAH$jsxs)((0, $52b1edac16385c47$export$df063b277b1eb93), {
                                    as: "div",
                                    children: [
                                        isExternalLink && /*#__PURE__*/ (0, $22uAH$jsx)($3d3a3642affe42cc$export$53f216714f50123e, {}),
                                        !isExternalLink && tagLabels && parentTo && tagLabels.map((label)=>/*#__PURE__*/ (0, $22uAH$jsx)($3d3a3642affe42cc$var$CardLabel, {
                                                as: (0, $22uAH$Link),
                                                to: parentTo,
                                                children: label
                                            }, label)),
                                        date ? /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
                                            children: [
                                                "published on",
                                                " ",
                                                /*#__PURE__*/ (0, $22uAH$jsx)("time", {
                                                    dateTime: (0, $22uAH$format)(date, "yyyy-MM-dd"),
                                                    children: (0, $22uAH$format)(date, "MMM d, yyyy")
                                                })
                                            ]
                                        }) : overline
                                    ]
                                })
                            ]
                        })
                    }),
                    description && /*#__PURE__*/ (0, $22uAH$jsx)((0, $52b1edac16385c47$export$851de33184ecdac4), {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)("p", {
                            children: description
                        })
                    }),
                    footerContent && /*#__PURE__*/ (0, $22uAH$jsx)($3d3a3642affe42cc$export$e9897d434e0741ee, {
                        children: footerContent
                    }),
                    imgSrc && /*#__PURE__*/ (0, $22uAH$jsx)($3d3a3642affe42cc$var$CardFigure, {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)("img", {
                            src: imgSrc,
                            alt: imgAlt,
                            loading: "lazy"
                        })
                    })
                ]
            }),
            cardType === "horizontal-info" && /*#__PURE__*/ (0, $22uAH$jsx)((0, $0d48b55a375708ab$export$2e2bcd8739ae039), {
                title: title,
                description: description,
                imgSrc: imgSrc,
                imgAlt: imgAlt,
                tagLabels: tagLabels
            })
        ]
    });
}
const $3d3a3642affe42cc$export$60332b2344f7fe41 = (0, $22uAH$styledcomponents)($3d3a3642affe42cc$var$CardComponent).withConfig({
    displayName: "card__Card",
    componentId: "sc-1lozmjm-7"
})([
    ""
]);









var $de7zf = parcelRequire("de7zf");
function $9c027d624f875986$var$EmptyHub(props) {
    const theme = (0, $22uAH$useTheme)();
    const { children: children , ...rest } = props;
    return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
        ...rest,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$CollecticonPage), {
                size: "xxlarge",
                color: theme.color["base-400"]
            }),
            children
        ]
    });
}
var $9c027d624f875986$export$2e2bcd8739ae039 = (0, $22uAH$styledcomponents)($9c027d624f875986$var$EmptyHub).withConfig({
    displayName: "empty-hub",
    componentId: "sc-yyyxpb-0"
})([
    "max-width:100%;grid-column:1/-1;display:flex;flex-flow:column;align-items:center;padding:",
    ";border-radius:",
    ";border:1px dashed ",
    ";gap:",
    ";"
], (0, $de7zf.variableGlsp)(5, 1), (0, $22uAH$themeVal)("shape.rounded"), (0, $22uAH$themeVal)("color.base-300"), (0, $de7zf.variableGlsp)(1));



var $knZgP = parcelRequire("knZgP");




const $5ab0fece7b709ba9$var$SearchHighlight = (0, $22uAH$styledcomponents).mark.withConfig({
    displayName: "text-highlight__SearchHighlight",
    componentId: "sc-iwbd85-0"
})([
    "font-style:italic;background-color:",
    ";"
], (0, $22uAH$themeVal)("color.warning"));
function $5ab0fece7b709ba9$export$2e2bcd8739ae039(props) {
    const { children: children , value: value , highlightEl: highlightEl , disabled: disabled  } = props;
    if (!value || disabled) return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: children
    });
    const El = highlightEl ?? $5ab0fece7b709ba9$var$SearchHighlight; // Highlight is done index based because it has to take case insensitive
    // searches into account.
    const regex = new RegExp(value, "ig");
    /* eslint-disable-next-line prefer-const */ let highlighted = [];
    let workingIdx = 0;
    let m;
    /* eslint-disable-next-line no-cond-assign */ while((m = regex.exec(children)) !== null){
        // Prevent infinite loops with zero-width matches.
        if (m.index === regex.lastIndex) regex.lastIndex++; // Store string since last match.
        highlighted = highlighted.concat(children.substring(workingIdx, m.index)); // Highlight word.
        highlighted = highlighted.concat(/*#__PURE__*/ (0, $22uAH$jsx)(El, {
            children: children.substring(m.index, m.index + value.length)
        }, m.index)); // Move index forward.
        workingIdx = m.index + value.length;
    } // Add last piece. From working index to the end.
    highlighted = highlighted.concat(children.substring(workingIdx));
    return /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Fragment1), {
        children: highlighted
    });
}









const $c9ad9cba890738c7$var$SourcesUl = (0, $22uAH$styledcomponents).ul.withConfig({
    displayName: "card-sources__SourcesUl",
    componentId: "sc-1albkef-0"
})([
    "",
    " display:inline;gap:0.25rem;li{display:inline;}li:not(:last-child)::after{content:', ';}"
], (0, $22uAH$listReset)());
function $c9ad9cba890738c7$export$25944820ca11d24e(props) {
    const { sources: sources , onSourceClick: onSourceClick , rootPath: rootPath  } = props;
    if (!sources?.length) return null; // No link rendering
    if (!rootPath || !onSourceClick) return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                children: "By"
            }),
            " ",
            /*#__PURE__*/ (0, $22uAH$jsx)($c9ad9cba890738c7$var$SourcesUl, {
                children: sources.map((source)=>/*#__PURE__*/ (0, $22uAH$jsx)("li", {
                        children: source.name
                    }, source.id))
            })
        ]
    });
    return /*#__PURE__*/ (0, $22uAH$jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("span", {
                children: "By"
            }),
            " ",
            /*#__PURE__*/ (0, $22uAH$jsx)($c9ad9cba890738c7$var$SourcesUl, {
                children: sources.map((source)=>/*#__PURE__*/ (0, $22uAH$jsx)("li", {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$Link), {
                            to: `${rootPath}?${(0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY}=${encodeURIComponent(JSON.stringify({
                                Source: source.id
                            }))}`,
                            onClick: (e)=>{
                                e.preventDefault();
                                onSourceClick(source.id);
                            },
                            children: source.name
                        })
                    }, source.id))
            })
        ]
    });
}



var $47Isj = parcelRequire("47Isj");





var $fwaez = parcelRequire("fwaez");




const $7cc2a94039105d7b$export$1a26968bd5e528c1 = (0, $22uAH$styledcomponents)((0, $22uAH$createCollecticon)((props)=>/*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: props.title || "A progress tick high icon"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                d: "M15.938,9L13.918,9C13.713,10.223 13.136,11.349 12.244,12.244C11.109,13.375 9.603,14 8,14C6.397,14 4.891,13.375 3.756,12.244C2.625,11.109 2,9.603 2,8C2,6.397 2.625,4.891 3.756,3.756C3.834,3.678 3.916,3.6 4,3.528L4,6L6,6L6,-0L0,0L0,2L2.709,2C1.047,3.466 0,5.609 0,8C0,12.419 3.581,16 8,16C12.081,16 15.446,12.947 15.938,9ZM10.784,4.916L12.269,6.253L7.1,12L3.856,8.794L5.262,7.372L7.016,9.103L10.784,4.916ZM14.32,3.094L12.893,4.521C13.42,5.26 13.769,6.104 13.918,7L15.938,7C15.756,5.539 15.18,4.201 14.32,3.094ZM11.478,3.108L12.906,1.68C11.551,0.627 9.849,-0 8,-0L8,2C9.264,2 10.469,2.388 11.478,3.108Z"
            })
        ]
    }))).withConfig({
    displayName: "progress-tick__CollecticonProgressTickHigh",
    componentId: "sc-fnf5og-0"
})([
    ""
]);
const $7cc2a94039105d7b$export$e936722be7af186a = (0, $22uAH$styledcomponents)((0, $22uAH$createCollecticon)((props)=>/*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: props.title || "A progress tick medium icon"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                d: "M7,15.938L7,13.918C5.777,13.713 4.651,13.136 3.756,12.244C2.625,11.109 2,9.603 2,8C2,6.397 2.625,4.891 3.756,3.756C3.834,3.678 3.916,3.6 4,3.528L4,6L6,6L6,-0L0,0L0,2L2.709,2C1.047,3.466 0,5.609 0,8C0,12.081 3.053,15.446 7,15.938ZM11.478,12.892C10.739,13.419 9.895,13.768 9,13.918L9,15.938C10.461,15.756 11.799,15.18 12.906,14.32L11.478,12.892ZM15.938,9L13.918,9C13.768,9.895 13.419,10.739 12.892,11.478L14.32,12.906C15.18,11.8 15.756,10.461 15.938,9ZM10.784,4.916L12.269,6.253L7.1,12L3.856,8.794L5.262,7.372L7.016,9.103L10.784,4.916ZM14.32,3.094L12.893,4.521C13.42,5.26 13.769,6.104 13.918,7L15.938,7C15.756,5.539 15.18,4.201 14.32,3.094ZM11.478,3.108L12.906,1.68C11.551,0.627 9.849,-0 8,-0L8,2C9.264,2 10.469,2.388 11.478,3.108Z"
            })
        ]
    }))).withConfig({
    displayName: "progress-tick__CollecticonProgressTickMedium",
    componentId: "sc-fnf5og-1"
})([
    ""
]);
const $7cc2a94039105d7b$export$bf479e9952d124c2 = (0, $22uAH$styledcomponents)((0, $22uAH$createCollecticon)((props)=>/*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: props.title || "A progress tick high icon"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                d: "M4.522,12.892L3.094,14.32C4.2,15.18 5.539,15.756 7,15.938L7,13.918C6.105,13.768 5.261,13.419 4.522,12.892ZM11.478,12.892C10.739,13.419 9.895,13.768 9,13.918L9,15.938C10.461,15.756 11.799,15.18 12.906,14.32L11.478,12.892ZM13.918,9C13.768,9.895 13.419,10.739 12.892,11.478L14.32,12.906C15.18,11.8 15.756,10.461 15.938,9L13.918,9ZM2.082,9L0.062,9C0.244,10.461 0.82,11.799 1.68,12.906L3.108,11.478C2.581,10.739 2.232,9.895 2.082,9ZM10.784,4.916L12.269,6.253L7.1,12L3.856,8.794L5.262,7.372L7.016,9.103L10.784,4.916ZM14.32,3.094L12.893,4.521C13.42,5.26 13.769,6.104 13.918,7L15.938,7C15.756,5.539 15.18,4.201 14.32,3.094ZM0.062,7L2.082,7C2.287,5.777 2.864,4.651 3.756,3.756C3.834,3.678 3.916,3.6 4,3.528L4,6L6,6L6,-0L0,0L0,2L2.709,2C1.283,3.258 0.309,5.015 0.062,7ZM11.478,3.108L12.906,1.68C11.551,0.627 9.849,-0 8,-0L8,2C9.264,2 10.469,2.388 11.478,3.108Z"
            })
        ]
    }))).withConfig({
    displayName: "progress-tick__CollecticonProgressTickLow",
    componentId: "sc-fnf5og-2"
})([
    ""
]);






const $01414f913ea2af5e$export$5c5e312ef0488786 = (0, $22uAH$styledcomponents)((0, $22uAH$createCollecticon)((props)=>/*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: props.title || "A flask icon"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                id: "lab-flask",
                d: "M5,2L5,6C5,6 2.583,10.028 0.817,12.971C0.447,13.589 0.437,14.358 0.792,14.985C1.147,15.612 1.812,16 2.532,16C5.694,16 10.306,16 13.468,16C14.188,16 14.853,15.612 15.208,14.985C15.563,14.358 15.553,13.589 15.183,12.971C13.417,10.028 11,6 11,6L11,2L12,2L12,0L4,0L4,2L5,2ZM11.068,10L4.932,10L7,6.554L7,2L9,2C9,2 9,6.554 9,6.554L11.068,10Z"
            })
        ]
    }))).withConfig({
    displayName: "flask__CollecticonFlask",
    componentId: "sc-ngnoq7-0"
})([
    ""
]);






const $0d8cadee49891aed$export$41cf3a9d8250975e = (0, $22uAH$styledcomponents)((0, $22uAH$createCollecticon)((props)=>/*#__PURE__*/ (0, $22uAH$jsxs)("svg", {
        ...props,
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)("title", {
                children: props.title || "A medal icon"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)("path", {
                id: "medal",
                d: "M4,10.471L4,16L8,14L12,16L12,10.471C13.227,9.372 14,7.775 14,6C14,2.689 11.311,0 8,0C4.689,0 2,2.689 2,6C2,7.775 2.773,9.372 4,10.471ZM8,3C9.656,3 11,4.344 11,6C11,7.656 9.656,9 8,9C6.344,9 5,7.656 5,6C5,4.344 6.344,3 8,3Z"
            })
        ]
    }))).withConfig({
    displayName: "medal__CollecticonMedal",
    componentId: "sc-1a3f6vp-0"
})([
    ""
]);



var $de7zf = parcelRequire("de7zf");

var $47Isj = parcelRequire("47Isj");
const $c4171c0a97d01357$var$DATA_UNCERTAINTY = {
    High: (0, $7cc2a94039105d7b$export$bf479e9952d124c2),
    Medium: (0, $7cc2a94039105d7b$export$e936722be7af186a),
    Low: (0, $7cc2a94039105d7b$export$1a26968bd5e528c1)
};
const $c4171c0a97d01357$var$DATA_GRADE = {
    Research: (0, $01414f913ea2af5e$export$5c5e312ef0488786),
    "Agency standard/regulatory": (0, $0d8cadee49891aed$export$41cf3a9d8250975e)
};
const $c4171c0a97d01357$var$DatasetClassificationWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "dataset-classification__DatasetClassificationWrapper",
    componentId: "sc-bku750-0"
})([
    "position:absolute;top:",
    ";left:",
    ";display:flex;gap:",
    ";svg{pointer-events:all;color:",
    ";}"
], (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $22uAH$glsp)(0.5), (0, $22uAH$themeVal)("color.surface"));
function $c4171c0a97d01357$export$8995c29291ad3af8(props) {
    const { dataset: dataset  } = props;
    const grade = (0, $47Isj.getTaxonomy)(dataset, (0, $47Isj.TAXONOMY_GRADE))?.values[0];
    const uncertainty = (0, $47Isj.getTaxonomy)(dataset, (0, $47Isj.TAXONOMY_UNCERTAINTY))?.values[0];
    const IconUncertainty = $c4171c0a97d01357$var$DATA_UNCERTAINTY[uncertainty?.name ?? ""];
    const IconGrade = $c4171c0a97d01357$var$DATA_GRADE[grade?.name ?? ""];
    if (!IconUncertainty && !IconGrade) return null;
    return /*#__PURE__*/ (0, $22uAH$jsxs)($c4171c0a97d01357$var$DatasetClassificationWrapper, {
        children: [
            IconUncertainty && uncertainty && /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                content: `Uncertainty: ${uncertainty.name}`,
                children: /*#__PURE__*/ (0, $22uAH$jsx)(IconUncertainty, {
                    meaningful: true,
                    title: `Uncertainty: ${uncertainty.name}`
                })
            }),
            IconGrade && grade && /*#__PURE__*/ (0, $22uAH$jsx)((0, $fwaez.Tip), {
                content: `Grade: ${grade.name}`,
                children: /*#__PURE__*/ (0, $22uAH$jsx)(IconGrade, {
                    meaningful: true,
                    title: `Grade: ${grade.name}`
                })
            })
        ]
    });
}



var $de7zf = parcelRequire("de7zf");

var $k30iu = parcelRequire("k30iu");

let $76b407f40607dd8c$export$11caf269d0e0aa93;
(function(TimeDensity) {
    TimeDensity["YEAR"] = "year";
    TimeDensity["MONTH"] = "month";
    TimeDensity["DAY"] = "day";
})($76b407f40607dd8c$export$11caf269d0e0aa93 || ($76b407f40607dd8c$export$11caf269d0e0aa93 = {}));
let $76b407f40607dd8c$export$9952932df500566e;
(function(TimelineDatasetStatus) {
    TimelineDatasetStatus["IDLE"] = "idle";
    TimelineDatasetStatus["LOADING"] = "loading";
    TimelineDatasetStatus["SUCCESS"] = "success";
    TimelineDatasetStatus["ERROR"] = "error";
})($76b407f40607dd8c$export$9952932df500566e || ($76b407f40607dd8c$export$9952932df500566e = {}));








const $e8810c480cd28d74$export$ad1a74e9b449db44 = [
    {
        id: "min",
        label: "Min",
        chartLabel: "Min",
        themeColor: "infographicA",
        style: {
            "strokeDasharray": "2 2"
        }
    },
    {
        id: "mean",
        label: "Average",
        chartLabel: "Average",
        themeColor: "infographicB"
    },
    {
        id: "max",
        label: "Max",
        chartLabel: "Max",
        themeColor: "infographicC",
        style: {
            "strokeDasharray": "2 2"
        }
    },
    {
        id: "std",
        label: "St Deviation",
        chartLabel: "St Deviation",
        themeColor: "infographicD"
    },
    {
        id: "median",
        label: "Median",
        chartLabel: "Median",
        themeColor: "infographicE"
    },
    {
        id: "sum",
        label: "Sum",
        chartLabel: "Sum",
        themeColor: "infographicF"
    }
];
const $e8810c480cd28d74$export$8a3afbbe3055c1c0 = $e8810c480cd28d74$export$ad1a74e9b449db44.filter((metric)=>metric.id === "mean" || metric.id === "std");
const $e8810c480cd28d74$var$MetricList = (0, $22uAH$styledcomponents)((0, $22uAH$DropMenu)).withConfig({
    displayName: "analysis-metrics__MetricList",
    componentId: "sc-j8f3i9-0"
})([
    "display:flex;flex-flow:column;list-style:none;margin:",
    ";padding:",
    ";gap:",
    ";> li{padding:",
    ";font-weight:",
    ";color:",
    ";}"
], (0, $22uAH$glsp)(0, -1, 1, -1), (0, $22uAH$glsp)(0, 0, 1, 0), (0, $22uAH$glsp)(0.5), (0, $22uAH$glsp)(0, 1), (0, $22uAH$themeVal)("type.base.regular"), (0, $22uAH$themeVal)("color.base-400"));
const $e8810c480cd28d74$var$MetricSwitch = (0, $22uAH$styledcomponents)((0, $22uAH$FormSwitch)).withConfig({
    displayName: "analysis-metrics__MetricSwitch",
    componentId: "sc-j8f3i9-1"
})([
    "display:grid;grid-template-columns:min-content 1fr auto;gap:",
    ";&::before{content:'';width:0.5rem;height:0.5rem;background:",
    ";border-radius:",
    ";align-self:center;}"
], (0, $22uAH$glsp)(0.5), ({ metricThemeColor: metricThemeColor  })=>(0, $22uAH$themeVal)(`color.${metricThemeColor}`), (0, $22uAH$themeVal)("shape.ellipsoid"));
function $e8810c480cd28d74$export$2e2bcd8739ae039(props) {
    const { activeMetrics: activeMetrics , onMetricsChange: onMetricsChange  } = props;
    const handleMetricChange = (metric, shouldAdd)=>{
        onMetricsChange(shouldAdd ? activeMetrics.concat(metric) : activeMetrics.filter((m)=>m.id !== metric.id));
    };
    return /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$DropTitle), {
                children: "Analysis metrics"
            }),
            /*#__PURE__*/ (0, $22uAH$jsx)($e8810c480cd28d74$var$MetricList, {
                children: $e8810c480cd28d74$export$ad1a74e9b449db44.map((metric)=>{
                    const checked = !!activeMetrics.find((m)=>m.id === metric.id);
                    return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                        children: /*#__PURE__*/ (0, $22uAH$jsx)($e8810c480cd28d74$var$MetricSwitch, {
                            metricThemeColor: metric.themeColor,
                            name: `switch-metric-${metric.id}`,
                            id: `switch-metric-${metric.id}`,
                            value: `switch-metric-${metric.id}`,
                            title: "Toggle metric on/off",
                            checked: checked,
                            onChange: ()=>handleMetricChange(metric, !checked),
                            children: metric.label
                        })
                    }, metric.id);
                })
            })
        ]
    });
}



var $etfqO = parcelRequire("etfqO");
const $c1161fd6fa2e7e9b$export$86626c0628a45158 = (0, $etfqO.datasets);



var $8mxqI = parcelRequire("8mxqI");
const $56694d7eb21d4e8c$export$24c438aeb316401e = (layerId)=>{
    const parentDataset = Object.values((0, $c1161fd6fa2e7e9b$export$86626c0628a45158)).find((dataset)=>dataset.data.layers.find((l)=>l.id === layerId));
    return parentDataset?.data;
};
const $56694d7eb21d4e8c$export$933351d61a6177c0 = ({ datasetId: datasetId , attr: attr  })=>{
    return (0, $c1161fd6fa2e7e9b$export$86626c0628a45158)[datasetId]?.data[attr];
};
const $56694d7eb21d4e8c$export$392f91ec1e469408 = Object.values((0, $c1161fd6fa2e7e9b$export$86626c0628a45158)).map((d)=>d.data);
const $56694d7eb21d4e8c$export$17b44589b4c203ee = Object.values((0, $c1161fd6fa2e7e9b$export$86626c0628a45158)).map((d)=>d.data).filter((d)=>!d.disableExplore);
function $56694d7eb21d4e8c$var$enhanceDatasetLayers(dataset) {
    return {
        ...dataset,
        layers: dataset.layers.map((layer)=>({
                ...layer,
                parentDataset: {
                    id: dataset.id,
                    name: dataset.name
                }
            }))
    };
}
const $56694d7eb21d4e8c$export$2c493a4870f9968f = $56694d7eb21d4e8c$export$17b44589b4c203ee.map($56694d7eb21d4e8c$var$enhanceDatasetLayers);
const $56694d7eb21d4e8c$export$690412e814722277 = (dataset)=>dataset.map($56694d7eb21d4e8c$var$enhanceDatasetLayers);
const $56694d7eb21d4e8c$export$dbc8d795f9666d22 = Object.values((0, $c1161fd6fa2e7e9b$export$86626c0628a45158)).flatMap((dataset)=>{
    return dataset.data.layers.map((l)=>({
            ...l,
            parentDataset: {
                id: dataset.data.id,
                name: dataset.data.name
            }
        }));
});
/**
 * Returns an array of metrics based on the given Dataset Layer configuration.
 * If the layer has metrics defined, it returns only the metrics that match the
 * ids. Otherwise, it returns all available metrics.
 *
 * @param data - The Datase tLayer object to get metrics for.
 * @returns An array of metrics objects.
 */ function $56694d7eb21d4e8c$var$getInitialMetrics(data) {
    const metricsIds = data.analysis?.metrics ?? [];
    if (!metricsIds.length) return 0, $e8810c480cd28d74$export$8a3afbbe3055c1c0;
    const foundMetrics = metricsIds.map((metric)=>{
        return (0, $e8810c480cd28d74$export$ad1a74e9b449db44).find((m)=>m.id === metric);
    }).filter(Boolean);
    return foundMetrics;
}
function $56694d7eb21d4e8c$export$1fd91fc84abac1d3(ids, datasetsList, reconciledDatasets) {
    return ids.map((id)=>{
        const alreadyReconciled = reconciledDatasets.find((d)=>d.data.id === id);
        if (alreadyReconciled) return alreadyReconciled;
        const dataset = datasetsList.find((d)=>d.id === id);
        if (!dataset) throw new Error(`Dataset [${id}] not found`);
        return {
            status: (0, $76b407f40607dd8c$export$9952932df500566e).IDLE,
            data: dataset,
            error: null,
            settings: {
                isVisible: true,
                opacity: 100,
                analysisMetrics: $56694d7eb21d4e8c$var$getInitialMetrics(dataset)
            },
            analysis: {
                status: (0, $76b407f40607dd8c$export$9952932df500566e).IDLE,
                data: null,
                error: null,
                meta: {}
            }
        };
    });
}
function $56694d7eb21d4e8c$export$3192ffac2c9c4f49(datasetId, datasetData) {
    const { domain: domain , isPeriodic: isPeriodic , timeDensity: timeDensity  } = datasetData;
    if (!domain || domain.length === 0) throw new Error(`Invalid domain on dataset [${datasetId}]`);
    if (!isPeriodic) return domain.map((d)=>(0, $8mxqI.utcString2userTzDate)(d));
    switch(timeDensity){
        case (0, $76b407f40607dd8c$export$11caf269d0e0aa93).YEAR:
            return (0, $22uAH$eachYearOfInterval)({
                start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
                end: (0, $8mxqI.utcString2userTzDate)(domain.last)
            });
        case (0, $76b407f40607dd8c$export$11caf269d0e0aa93).MONTH:
            return (0, $22uAH$eachMonthOfInterval)({
                start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
                end: (0, $8mxqI.utcString2userTzDate)(domain.last)
            });
        case (0, $76b407f40607dd8c$export$11caf269d0e0aa93).DAY:
            return (0, $22uAH$eachDayOfInterval)({
                start: (0, $8mxqI.utcString2userTzDate)(domain[0]),
                end: (0, $8mxqI.utcString2userTzDate)(domain.last)
            });
        default:
            throw new Error(`Invalid time density [${timeDensity}] on dataset [${datasetId}]`);
    }
}
function $56694d7eb21d4e8c$export$e3ff1717ffebe7f1(date, timeDensity) {
    switch(timeDensity){
        case (0, $76b407f40607dd8c$export$11caf269d0e0aa93).MONTH:
            return (0, $22uAH$startOfMonth)(date);
        case (0, $76b407f40607dd8c$export$11caf269d0e0aa93).YEAR:
            return (0, $22uAH$startOfYear)(date);
    }
    return (0, $22uAH$startOfDay)(date);
}
class $56694d7eb21d4e8c$export$6c23019e9e58bf80 extends Error {
    constructor(message, code){
        super(message);
        this.code = code;
    }
}


/**
 * DATA CATALOG Feature component 
 * Allows you to browse through datasets using the filters sidebar control
 */ const $46d003a9066219fe$var$BrowseFoldHeader = (0, $22uAH$styledcomponents)((0, $758e7226f15125ec$export$20dbefdb0820cc7e)).withConfig({
    displayName: "data-catalog__BrowseFoldHeader",
    componentId: "sc-tijk4h-0"
})([
    "margin-bottom:4rem;"
]);
const $46d003a9066219fe$var$Content = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "data-catalog__Content",
    componentId: "sc-tijk4h-1"
})([
    "display:flex;margin-bottom:8rem;position:relative;"
]);
const $46d003a9066219fe$var$CatalogWrapper = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "data-catalog__CatalogWrapper",
    componentId: "sc-tijk4h-2"
})([
    "width:100%;"
]);
const $46d003a9066219fe$var$BrowseSection = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "data-catalog__BrowseSection",
    componentId: "sc-tijk4h-3"
})([
    "width:100%;max-width:",
    ";margin:0 auto;margin-top:",
    ";padding-left:",
    ";padding-right:",
    ";gap:",
    ";"
], (0, $22uAH$themeVal)("layout.max"), (0, $de7zf.variableGlsp)(2), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)(), (0, $de7zf.variableGlsp)());
const $46d003a9066219fe$var$Cards = (0, $22uAH$styledcomponents)((0, $52b1edac16385c47$export$bb29c16f5612603e)).withConfig({
    displayName: "data-catalog__Cards",
    componentId: "sc-tijk4h-4"
})([
    "padding:0 0 0 2rem;"
]);
const $46d003a9066219fe$var$Tags = (0, $22uAH$styledcomponents).div.withConfig({
    displayName: "data-catalog__Tags",
    componentId: "sc-tijk4h-5"
})([
    "display:flex;flex-wrap:wrap;padding:0 0 2.4rem 2rem;"
]);
const $46d003a9066219fe$var$PlainTextButton = (0, $22uAH$styledcomponents).button.withConfig({
    displayName: "data-catalog__PlainTextButton",
    componentId: "sc-tijk4h-6"
})([
    "background:none;border:none;outline:none;box-shadow:none;color:",
    ";text-decoration:underline;font-size:",
    ";&:hover{color:",
    ";}"
], (0, $22uAH$themeVal)("color.primary-400"), (0, $de7zf.variableBaseType)("0.6rem"), (0, $22uAH$themeVal)("color.primary-800"));
const $46d003a9066219fe$var$EmptyState = (0, $22uAH$styledcomponents)((0, $9c027d624f875986$export$2e2bcd8739ae039)).withConfig({
    displayName: "data-catalog__EmptyState",
    componentId: "sc-tijk4h-7"
})([
    "margin-left:2rem;"
]);
const $46d003a9066219fe$export$2ecc3309bc48a1e0 = [
    {
        id: "name",
        name: "Name"
    }
];
function $46d003a9066219fe$var$DataCatalog({ datasets: datasets  }) {
    const controlVars = (0, $d78e2e231d21091f$export$592eb0ca299a64be)({
        sortOptions: $46d003a9066219fe$export$2ecc3309bc48a1e0
    });
    const navigate = (0, $22uAH$useNavigate)();
    const { taxonomies: taxonomies , sortField: sortField , sortDir: sortDir , onAction: onAction  } = controlVars;
    const search = controlVars.search ?? "";
    const datasetTaxonomies = (0, $47Isj.generateTaxonomies)(datasets);
    const urlTaxonomyItems = taxonomies ? Object.entries(taxonomies).map(([key, val])=>(0, $47Isj.getTaxonomyByIds)(key, val, datasetTaxonomies)).flat() : [];
    const allDatasetsWithEnhancedLayers = (0, $22uAH$useMemo)(()=>(0, $56694d7eb21d4e8c$export$690412e814722277)(datasets), [
        datasets
    ]);
    const [datasetsToDisplay, setDatasetsToDisplay] = (0, $22uAH$useState)((0, $8a84c9dc72a6ca08$export$2e2bcd8739ae039)(allDatasetsWithEnhancedLayers, {
        search: search,
        taxonomies: taxonomies,
        sortField: sortField,
        sortDir: sortDir,
        filterLayers: false
    }));
    const [allSelectedFilters, setAllSelectedFilters] = (0, $22uAH$useState)(urlTaxonomyItems);
    const [clearedTagItem, setClearedTagItem] = (0, $22uAH$useState)();
    const prevSelectedFilters = (0, $k30iu.usePreviousValue)(allSelectedFilters) || []; // Handlers
    const handleChangeAllSelectedFilters = (0, $22uAH$useCallback)((item, action)=>{
        if (action == "add") setAllSelectedFilters([
            ...allSelectedFilters,
            item
        ]);
        if (action == "remove") setAllSelectedFilters(allSelectedFilters.filter((selected)=>selected.id !== item.id));
        onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY_MULTISELECT, {
            key: item.taxonomy,
            value: item.id
        });
    }, [
        setAllSelectedFilters,
        allSelectedFilters,
        onAction
    ]);
    const handleClearTag = (0, $22uAH$useCallback)((item)=>{
        setAllSelectedFilters(allSelectedFilters.filter((selected)=>selected !== item));
        setClearedTagItem(item);
    }, [
        allSelectedFilters
    ]);
    const handleClearTags = (0, $22uAH$useCallback)(()=>{
        setAllSelectedFilters([]);
    }, [
        setAllSelectedFilters
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (clearedTagItem && allSelectedFilters.length == prevSelectedFilters.length - 1) {
            onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY_MULTISELECT, {
                key: clearedTagItem.taxonomy,
                value: clearedTagItem.id
            });
            setClearedTagItem(undefined);
        }
    }, [
        allSelectedFilters,
        clearedTagItem
    ]);
    (0, $22uAH$useEffect)(()=>{
        if (!allSelectedFilters.length) {
            onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).CLEAR);
            navigate((0, $knZgP.DATASETS_PATH));
        }
    }, [
        allSelectedFilters
    ]);
    (0, $22uAH$useEffect)(()=>{
        const updated = (0, $8a84c9dc72a6ca08$export$2e2bcd8739ae039)(allDatasetsWithEnhancedLayers, {
            search: search,
            taxonomies: taxonomies,
            sortField: sortField,
            sortDir: sortDir,
            filterLayers: false
        });
        setDatasetsToDisplay(updated);
    }, [
        allSelectedFilters,
        taxonomies,
        search
    ]);
    const browseControlsHeaderRef = (0, $22uAH$useRef)(null);
    const { headerHeight: headerHeight  } = (0, $7d8fr.useSlidingStickyHeaderProps)();
    const renderTags = (0, $22uAH$useMemo)(()=>{
        if (allSelectedFilters.length > 0 || urlTaxonomyItems.length > 0) return /*#__PURE__*/ (0, $22uAH$jsxs)($46d003a9066219fe$var$Tags, {
            children: [
                allSelectedFilters.length > 0 ? allSelectedFilters.map((filter)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $889b0db21a892740$export$2e2bcd8739ae039), {
                        item: filter,
                        onClick: handleClearTag
                    }, `${filter.taxonomy}-${filter.id}`)) : urlTaxonomyItems.map((filter)=>/*#__PURE__*/ (0, $22uAH$jsx)((0, $889b0db21a892740$export$2e2bcd8739ae039), {
                        item: filter,
                        onClick: handleClearTag
                    }, `${filter.taxonomy}-${filter.id}`)),
                /*#__PURE__*/ (0, $22uAH$jsx)($46d003a9066219fe$var$PlainTextButton, {
                    onClick: handleClearTags,
                    children: "Clear all"
                })
            ]
        });
        return null;
    }, [
        allSelectedFilters,
        handleClearTag,
        handleClearTags,
        urlTaxonomyItems
    ]);
    return /*#__PURE__*/ (0, $22uAH$jsxs)($46d003a9066219fe$var$BrowseSection, {
        children: [
            /*#__PURE__*/ (0, $22uAH$jsx)($46d003a9066219fe$var$BrowseFoldHeader, {
                ref: browseControlsHeaderRef,
                style: {
                    scrollMarginTop: `${headerHeight + 16}px`
                },
                children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $758e7226f15125ec$export$d198f4e612bfff3f), {
                    children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $758e7226f15125ec$export$112c405e29c5130c), {
                        children: "Search datasets"
                    })
                })
            }),
            /*#__PURE__*/ (0, $22uAH$jsxs)($46d003a9066219fe$var$Content, {
                children: [
                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $440c024744a1266e$export$2e2bcd8739ae039), {
                        ...controlVars,
                        taxonomiesOptions: datasetTaxonomies,
                        onChangeToFilters: handleChangeAllSelectedFilters,
                        clearedTagItem: clearedTagItem,
                        setClearedTagItem: setClearedTagItem,
                        allSelected: allSelectedFilters
                    }),
                    /*#__PURE__*/ (0, $22uAH$jsxs)($46d003a9066219fe$var$CatalogWrapper, {
                        children: [
                            renderTags,
                            datasetsToDisplay.length ? /*#__PURE__*/ (0, $22uAH$jsx)($46d003a9066219fe$var$Cards, {
                                children: datasetsToDisplay.map((d)=>{
                                    const topics = (0, $47Isj.getTaxonomy)(d, (0, $47Isj.TAXONOMY_TOPICS))?.values;
                                    const allTaxonomyValues = (0, $47Isj.getAllTaxonomyValues)(d).map((v)=>v.name);
                                    return /*#__PURE__*/ (0, $22uAH$jsx)("li", {
                                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $3d3a3642affe42cc$export$60332b2344f7fe41), {
                                            cardType: "horizontal-info",
                                            tagLabels: allTaxonomyValues,
                                            overline: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $52b1edac16385c47$export$a8ae421c739691bf), {
                                                children: [
                                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $c4171c0a97d01357$export$8995c29291ad3af8), {
                                                        dataset: d
                                                    }),
                                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $c9ad9cba890738c7$export$25944820ca11d24e), {
                                                        sources: (0, $47Isj.getTaxonomy)(d, (0, $47Isj.TAXONOMY_SOURCE))?.values,
                                                        rootPath: (0, $knZgP.DATASETS_PATH),
                                                        onSourceClick: (id)=>{
                                                            onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY_MULTISELECT, {
                                                                key: (0, $47Isj.TAXONOMY_SOURCE),
                                                                value: id
                                                            });
                                                            browseControlsHeaderRef.current?.scrollIntoView();
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $22uAH$VerticalDivider), {
                                                        variation: "light"
                                                    })
                                                ]
                                            }),
                                            linkLabel: "View more",
                                            linkTo: (0, $knZgP.getDatasetPath)(d),
                                            title: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5ab0fece7b709ba9$export$2e2bcd8739ae039), {
                                                value: search,
                                                disabled: search.length < 3,
                                                children: d.name
                                            }),
                                            description: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5ab0fece7b709ba9$export$2e2bcd8739ae039), {
                                                value: search,
                                                disabled: search.length < 3,
                                                children: d.description
                                            }),
                                            imgSrc: d.media?.src,
                                            imgAlt: d.media?.alt,
                                            footerContent: /*#__PURE__*/ (0, $22uAH$jsxs)((0, $22uAH$Fragment1), {
                                                children: [
                                                    topics?.length ? /*#__PURE__*/ (0, $22uAH$jsxs)((0, $52b1edac16385c47$export$7391ae7cd9297896), {
                                                        children: [
                                                            /*#__PURE__*/ (0, $22uAH$jsx)("dt", {
                                                                children: "Topics"
                                                            }),
                                                            topics.map((t)=>{
                                                                const path = `${(0, $knZgP.DATASETS_PATH)}?${(0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY}=${encodeURIComponent(JSON.stringify({
                                                                    Topics: [
                                                                        t.id
                                                                    ]
                                                                }))}`;
                                                                return /*#__PURE__*/ (0, $22uAH$jsx)("dd", {
                                                                    children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $7ca3528ef9ff6bdb$export$d2cf3038149dd1b5), {
                                                                        variation: "achromic",
                                                                        as: (0, $22uAH$Link),
                                                                        to: path,
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            onAction((0, $d78e2e231d21091f$export$b52183d5cfb26dc9).TAXONOMY_MULTISELECT, {
                                                                                key: (0, $47Isj.TAXONOMY_TOPICS),
                                                                                value: t.id
                                                                            });
                                                                            browseControlsHeaderRef.current?.scrollIntoView();
                                                                        },
                                                                        children: /*#__PURE__*/ (0, $22uAH$jsx)((0, $5ab0fece7b709ba9$export$2e2bcd8739ae039), {
                                                                            value: search,
                                                                            disabled: search.length < 3,
                                                                            children: t.name
                                                                        })
                                                                    })
                                                                }, t.id);
                                                            })
                                                        ]
                                                    }) : null,
                                                    /*#__PURE__*/ (0, $22uAH$jsx)((0, $5cfa6760eeb979d0$export$2e2bcd8739ae039), {
                                                        dataset: d
                                                    })
                                                ]
                                            })
                                        })
                                    }, d.id);
                                })
                            }) : /*#__PURE__*/ (0, $22uAH$jsx)($46d003a9066219fe$var$EmptyState, {
                                children: "There are no datasets to show with the selected filters."
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
var $46d003a9066219fe$export$2e2bcd8739ae039 = $46d003a9066219fe$var$DataCatalog;



var $8b31i = parcelRequire("8b31i");


var $f55c5a314009f3e9$export$2e2bcd8739ae039 = parcelRequire("jegiK").default;
var $5f41b185219f52a8$export$2e2bcd8739ae039 = parcelRequire("8b31i").default;
export {$f55c5a314009f3e9$export$2e2bcd8739ae039 as BlockChart, $46d003a9066219fe$export$2e2bcd8739ae039 as DataCatalog, $5f41b185219f52a8$export$2e2bcd8739ae039 as MdxContent};
//# sourceMappingURL=module.js.map
