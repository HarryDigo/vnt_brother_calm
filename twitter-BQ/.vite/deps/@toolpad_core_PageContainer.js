import {
  Link,
  getItemPath,
  getItemTitle,
  matchPath
} from "./chunk-NGSIEVNM.js";
import {
  NavigationContext,
  RouterContext,
  useSlotProps_default
} from "./chunk-W5D4V4CH.js";
import {
  Breadcrumbs_default,
  Container_default,
  Link_default,
  Stack_default,
  Typography_default
} from "./chunk-EUNJCSGU.js";
import "./chunk-LOUKRN4S.js";
import "./chunk-L2Q2RVSC.js";
import "./chunk-A667VLZT.js";
import "./chunk-LZ77HWJY.js";
import "./chunk-YWUYKLGL.js";
import {
  require_jsx_runtime,
  require_prop_types,
  styled_default
} from "./chunk-SU264GJV.js";
import {
  __toESM,
  require_react
} from "./chunk-DDNM7ENY.js";

// node_modules/@toolpad/core/PageContainer/PageContainer.js
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@toolpad/utils/dist/warnOnce.js
var history = /* @__PURE__ */ new Set();
function warnOnce(msg) {
  if (!history.has(msg)) {
    history.add(msg);
    console.warn(msg);
  }
}

// node_modules/@toolpad/core/PageContainer/PageContainerToolbar.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var PageContainerToolbarRoot = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  // Ensure the toolbar is always on the right side, even after wrapping
  marginLeft: "auto"
}));
function PageContainerToolbar(props) {
  return (0, import_jsx_runtime.jsx)(PageContainerToolbarRoot, {
    ...props
  });
}

// node_modules/@toolpad/core/useActivePage/useActivePage.js
var React2 = __toESM(require_react());
function useActivePage() {
  const navigationContext = React2.useContext(NavigationContext);
  const routerContext = React2.useContext(RouterContext);
  const pathname = (routerContext == null ? void 0 : routerContext.pathname) ?? "/";
  const activeItem = matchPath(navigationContext, pathname);
  const rootItem = matchPath(navigationContext, "/");
  return React2.useMemo(() => {
    if (!activeItem) {
      return null;
    }
    const breadcrumbs = [];
    if (rootItem) {
      breadcrumbs.push({
        title: getItemTitle(rootItem),
        path: "/"
      });
    }
    const segments = pathname.split("/").filter(Boolean);
    let prefix = "";
    for (const segment of segments) {
      const path = `${prefix}/${segment}`;
      prefix = path;
      const item = matchPath(navigationContext, path);
      if (!item) {
        continue;
      }
      const itemPath = getItemPath(navigationContext, item);
      const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
      if ((lastCrumb == null ? void 0 : lastCrumb.path) !== itemPath) {
        breadcrumbs.push({
          title: getItemTitle(item),
          path: itemPath
        });
      }
    }
    return {
      title: getItemTitle(activeItem),
      path: getItemPath(navigationContext, activeItem),
      breadcrumbs,
      // TODO: Remove in the next major version
      breadCrumbs: breadcrumbs
    };
  }, [activeItem, rootItem, pathname, navigationContext]);
}

// node_modules/@toolpad/core/PageContainer/PageContainer.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var PageContentHeader = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(2)
}));
function PageContainer(props) {
  var _a, _b;
  const {
    children,
    slots,
    slotProps,
    breadcrumbs,
    breadCrumbs,
    ...rest
  } = props;
  if (breadCrumbs) {
    warnOnce("The PageContainer `breadCrumbs` prop is deprecated. Use `breadcrumbs` instead.");
  }
  const activePage = useActivePage();
  const resolvedBreadcrumbs = breadcrumbs ?? breadCrumbs ?? (activePage == null ? void 0 : activePage.breadcrumbs) ?? [];
  const title = props.title ?? (activePage == null ? void 0 : activePage.title) ?? "";
  const ToolbarComponent = ((_a = props == null ? void 0 : props.slots) == null ? void 0 : _a.toolbar) ?? PageContainerToolbar;
  const toolbarSlotProps = useSlotProps_default({
    elementType: ToolbarComponent,
    ownerState: props,
    externalSlotProps: (_b = props == null ? void 0 : props.slotProps) == null ? void 0 : _b.toolbar,
    additionalProps: {}
  });
  return (0, import_jsx_runtime2.jsx)(Container_default, {
    ...rest,
    children: (0, import_jsx_runtime2.jsxs)(Stack_default, {
      sx: {
        my: 2
      },
      spacing: 2,
      children: [(0, import_jsx_runtime2.jsxs)(Stack_default, {
        children: [(0, import_jsx_runtime2.jsx)(Breadcrumbs_default, {
          "aria-label": "breadcrumb",
          children: resolvedBreadcrumbs ? resolvedBreadcrumbs.map((item, index) => {
            return index < resolvedBreadcrumbs.length - 1 ? (0, import_jsx_runtime2.jsx)(Link_default, {
              component: Link,
              underline: "hover",
              color: "inherit",
              href: item.path,
              children: getItemTitle(item)
            }, item.path) : (0, import_jsx_runtime2.jsx)(Typography_default, {
              color: "text.primary",
              children: getItemTitle(item)
            }, item.path);
          }) : null
        }), (0, import_jsx_runtime2.jsxs)(PageContentHeader, {
          children: [title ? (0, import_jsx_runtime2.jsx)(Typography_default, {
            variant: "h4",
            children: title
          }) : null, (0, import_jsx_runtime2.jsx)(ToolbarComponent, {
            ...toolbarSlotProps
          })]
        })]
      }), (0, import_jsx_runtime2.jsx)("div", {
        children
      })]
    })
  });
}
true ? PageContainer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The breadcrumbs of the page. Leave blank to use the active page breadcrumbs.
   */
  breadcrumbs: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    path: import_prop_types.default.string.isRequired,
    title: import_prop_types.default.string.isRequired
  })),
  /**
   * @deprecated Use `breadcrumbs` instead.
   */
  breadCrumbs: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    path: import_prop_types.default.string.isRequired,
    title: import_prop_types.default.string.isRequired
  })),
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types.default.shape({
    toolbar: import_prop_types.default.shape({
      children: import_prop_types.default.node
    }).isRequired
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types.default.shape({
    toolbar: import_prop_types.default.elementType
  }),
  /**
   * The title of the page. Leave blank to use the active page title.
   */
  title: import_prop_types.default.string
} : void 0;
export {
  PageContainer,
  PageContainerToolbar
};
//# sourceMappingURL=@toolpad_core_PageContainer.js.map
