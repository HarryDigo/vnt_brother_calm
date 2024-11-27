import {
  AuthenticationContext,
  SessionContext
} from "./chunk-3G4RR6PN.js";
import {
  Link,
  getItemTitle,
  getPageItemFullPath,
  hasSelectedNavigationChildren,
  isPageItemSelected
} from "./chunk-NGSIEVNM.js";
import {
  BrandingContext,
  NavigationContext,
  PaletteModeContext,
  RouterContext,
  WindowContext
} from "./chunk-W5D4V4CH.js";
import {
  AppBar_default,
  Avatar_default,
  Box_default,
  Button_default,
  Collapse_default,
  Divider_default,
  Drawer_default,
  IconButton_default,
  ListItemButton_default,
  ListItemIcon_default,
  ListItemText_default,
  ListItem_default,
  ListSubheader_default,
  List_default,
  Popover_default,
  Stack_default,
  Toolbar_default,
  Tooltip_default,
  Typography_default
} from "./chunk-EUNJCSGU.js";
import "./chunk-LOUKRN4S.js";
import "./chunk-L2Q2RVSC.js";
import "./chunk-A667VLZT.js";
import "./chunk-C6WWHQR7.js";
import {
  createSvgIcon
} from "./chunk-LZ77HWJY.js";
import "./chunk-YWUYKLGL.js";
import {
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useMediaQuery,
  useTheme
} from "./chunk-SU264GJV.js";
import {
  __toESM,
  require_react
} from "./chunk-DDNM7ENY.js";

// node_modules/@toolpad/core/DashboardLayout/DashboardLayout.js
var React13 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/icons-material/esm/Menu.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Menu_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");

// node_modules/@mui/icons-material/esm/MenuOpen.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var MenuOpen_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z"
}), "MenuOpen");

// node_modules/@toolpad/core/Account/Account.js
var React7 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@toolpad/core/Account/SignInButton.js
var React2 = __toESM(require_react());

// node_modules/@toolpad/core/shared/locales/LocaleContext.js
var React = __toESM(require_react());

// node_modules/@toolpad/core/shared/locales/en.js
var TOOLPAD_CORE_DEFAULT_LOCALE_TEXT = {
  // Account
  signInLabel: "Sign In",
  signOutLabel: "Sign Out",
  // Account Preview
  iconButtonAriaLabel: "Current User"
};
var en_default = TOOLPAD_CORE_DEFAULT_LOCALE_TEXT;

// node_modules/@toolpad/core/shared/locales/LocaleContext.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var LocaleContext = React.createContext(en_default);
function LocaleProvider({
  localeText,
  children
}) {
  const mergedLocaleText = React.useMemo(() => ({
    ...en_default,
    ...localeText
  }), [localeText]);
  return (0, import_jsx_runtime3.jsx)(LocaleContext.Provider, {
    value: mergedLocaleText,
    children
  });
}
function useLocaleText() {
  return React.useContext(LocaleContext);
}

// node_modules/@toolpad/core/Account/SignInButton.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function SignInButton(props) {
  const authentication = React2.useContext(AuthenticationContext);
  const localeText = useLocaleText();
  return (0, import_jsx_runtime4.jsx)(Button_default, {
    disableElevation: true,
    variant: "contained",
    size: "small",
    onClick: authentication == null ? void 0 : authentication.signIn,
    sx: {
      textTransform: "capitalize",
      filter: "opacity(0.9)",
      transition: "filter 0.2s ease-in",
      "&:hover": {
        filter: "opacity(1)"
      }
    },
    ...props,
    children: (localeText == null ? void 0 : localeText.signInLabel) || "Sign In"
  });
}

// node_modules/@toolpad/core/Account/SignOutButton.js
var React3 = __toESM(require_react());

// node_modules/@mui/icons-material/esm/Logout.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Logout_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), "Logout");

// node_modules/@toolpad/core/Account/SignOutButton.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _LogoutIcon;
function SignOutButton(props) {
  const authentication = React3.useContext(AuthenticationContext);
  const localeText = useLocaleText();
  return (0, import_jsx_runtime6.jsx)(Button_default, {
    disabled: !authentication,
    variant: "outlined",
    size: "small",
    disableElevation: true,
    onClick: authentication == null ? void 0 : authentication.signOut,
    sx: {
      textTransform: "capitalize",
      fontWeight: "normal",
      filter: "opacity(0.9)",
      transition: "filter 0.2s ease-in",
      "&:hover": {
        filter: "opacity(1)"
      }
    },
    startIcon: _LogoutIcon || (_LogoutIcon = (0, import_jsx_runtime6.jsx)(Logout_default, {})),
    ...props,
    children: localeText.signOutLabel
  });
}

// node_modules/@toolpad/core/Account/AccountPreview.js
var React4 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/icons-material/esm/MoreVert.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var MoreVert_default = createSvgIcon((0, import_jsx_runtime7.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVert");

// node_modules/@toolpad/core/Account/AccountPreview.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _MoreVertIcon;
function AccountPreview(props) {
  var _a, _b, _c, _d, _e, _f;
  const {
    slots,
    variant = "condensed",
    slotProps,
    open,
    handleClick
  } = props;
  const session = React4.useContext(SessionContext);
  const localeText = useLocaleText();
  if (!session || !session.user) {
    return null;
  }
  const avatarContent = (slots == null ? void 0 : slots.avatar) ? (0, import_jsx_runtime8.jsx)(slots.avatar, {}) : (0, import_jsx_runtime8.jsx)(Avatar_default, {
    src: ((_a = session.user) == null ? void 0 : _a.image) || "",
    alt: ((_b = session.user) == null ? void 0 : _b.name) || ((_c = session.user) == null ? void 0 : _c.email) || "",
    sx: {
      height: variant === "expanded" ? 48 : 32,
      width: variant === "expanded" ? 48 : 32
    },
    ...slotProps == null ? void 0 : slotProps.avatar
  });
  if (variant === "expanded") {
    return (0, import_jsx_runtime8.jsxs)(Stack_default, {
      direction: "row",
      justifyContent: "flex-start",
      spacing: 2,
      padding: 2,
      children: [avatarContent, (0, import_jsx_runtime8.jsxs)(Stack_default, {
        direction: "column",
        justifyContent: "space-evenly",
        children: [(0, import_jsx_runtime8.jsx)(Typography_default, {
          variant: "body2",
          fontWeight: "bolder",
          noWrap: true,
          children: (_d = session.user) == null ? void 0 : _d.name
        }), (0, import_jsx_runtime8.jsx)(Typography_default, {
          variant: "caption",
          noWrap: true,
          children: (_e = session.user) == null ? void 0 : _e.email
        })]
      }), handleClick && ((slots == null ? void 0 : slots.moreIconButton) ? (0, import_jsx_runtime8.jsx)(slots.moreIconButton, {}) : (0, import_jsx_runtime8.jsx)(IconButton_default, {
        size: "small",
        onClick: handleClick,
        ...slotProps == null ? void 0 : slotProps.moreIconButton,
        sx: {
          alignSelf: "flex-start",
          ...(_f = slotProps == null ? void 0 : slotProps.moreIconButton) == null ? void 0 : _f.sx
        },
        children: _MoreVertIcon || (_MoreVertIcon = (0, import_jsx_runtime8.jsx)(MoreVert_default, {
          fontSize: "small"
        }))
      }))]
    });
  }
  return (0, import_jsx_runtime8.jsx)(Tooltip_default, {
    title: session.user.name ?? "Account",
    children: (slots == null ? void 0 : slots.avatarIconButton) ? (0, import_jsx_runtime8.jsx)(slots.avatarIconButton, {}) : (0, import_jsx_runtime8.jsx)(IconButton_default, {
      onClick: handleClick,
      "aria-label": localeText.iconButtonAriaLabel || "Current User",
      size: "small",
      "aria-controls": open ? "account-menu" : void 0,
      "aria-haspopup": "true",
      "aria-expanded": open ? "true" : void 0,
      ...slotProps == null ? void 0 : slotProps.avatarIconButton,
      children: avatarContent
    })
  });
}
true ? AccountPreview.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The handler used when the preview is expanded
   */
  handleClick: import_prop_types.default.func,
  /**
   * The state of the Account popover
   * @default false
   */
  open: import_prop_types.default.bool,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types.default.shape({
    avatar: import_prop_types.default.object,
    avatarIconButton: import_prop_types.default.object,
    moreIconButton: import_prop_types.default.object
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types.default.shape({
    avatar: import_prop_types.default.elementType
  }),
  /**
   * The type of account details to display.
   * @property {'condensed'} condensed - Shows only the user's avatar.
   * @property {'expanded'} expanded - Displays the user's avatar, name, and email if available.
   * @default 'condensed'
   */
  variant: import_prop_types.default.oneOf(["condensed", "expanded"])
} : void 0;

// node_modules/@toolpad/core/Account/AccountPopoverHeader.js
var React5 = __toESM(require_react());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
function AccountPopoverHeader(props) {
  const {
    children,
    ...rest
  } = props;
  return (0, import_jsx_runtime9.jsx)(Stack_default, {
    ...rest,
    children
  });
}

// node_modules/@toolpad/core/Account/AccountPopoverFooter.js
var React6 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function AccountPopoverFooter(props) {
  const {
    children,
    ...rest
  } = props;
  return (0, import_jsx_runtime10.jsx)(Box_default, {
    ...rest,
    sx: {
      display: "flex",
      flexDirection: "row",
      p: 1,
      justifyContent: "flex-end",
      ...rest.sx
    },
    children
  });
}

// node_modules/@toolpad/core/Account/Account.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _AccountPopoverHeader;
var _Divider;
function Account(props) {
  var _a;
  const {
    localeText
  } = props;
  const {
    slots,
    slotProps
  } = props;
  const [anchorEl, setAnchorEl] = React7.useState(null);
  const session = React7.useContext(SessionContext);
  const authentication = React7.useContext(AuthenticationContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!authentication) {
    return null;
  }
  if (!(session == null ? void 0 : session.user)) {
    return (0, import_jsx_runtime11.jsx)(LocaleProvider, {
      localeText,
      children: (slots == null ? void 0 : slots.signInButton) ? (0, import_jsx_runtime11.jsx)(slots.signInButton, {
        onClick: authentication.signIn
      }) : (0, import_jsx_runtime11.jsx)(SignInButton, {
        ...slotProps == null ? void 0 : slotProps.signInButton
      })
    });
  }
  return (0, import_jsx_runtime11.jsxs)(LocaleProvider, {
    localeText,
    children: [(slots == null ? void 0 : slots.preview) ? (0, import_jsx_runtime11.jsx)(slots.preview, {
      handleClick,
      open
    }) : (0, import_jsx_runtime11.jsx)(AccountPreview, {
      variant: "condensed",
      handleClick,
      open,
      ...slotProps == null ? void 0 : slotProps.preview
    }), (slots == null ? void 0 : slots.popover) ? (0, import_jsx_runtime11.jsx)(slots.popover, {
      ...slotProps == null ? void 0 : slotProps.popover
    }) : (0, import_jsx_runtime11.jsx)(Popover_default, {
      anchorEl,
      id: "account-menu",
      open,
      onClose: handleClose,
      onClick: handleClose,
      transformOrigin: {
        horizontal: "right",
        vertical: "top"
      },
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom"
      },
      ...slotProps == null ? void 0 : slotProps.popover,
      slotProps: {
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        },
        ...(_a = slotProps == null ? void 0 : slotProps.popover) == null ? void 0 : _a.slotProps
      },
      children: (slots == null ? void 0 : slots.popoverContent) ? (0, import_jsx_runtime11.jsx)(slots.popoverContent, {
        ...slotProps == null ? void 0 : slotProps.popoverContent
      }) : (0, import_jsx_runtime11.jsxs)(Stack_default, {
        direction: "column",
        ...slotProps == null ? void 0 : slotProps.popoverContent,
        children: [_AccountPopoverHeader || (_AccountPopoverHeader = (0, import_jsx_runtime11.jsx)(AccountPopoverHeader, {
          children: (0, import_jsx_runtime11.jsx)(AccountPreview, {
            variant: "expanded"
          })
        })), _Divider || (_Divider = (0, import_jsx_runtime11.jsx)(Divider_default, {})), (0, import_jsx_runtime11.jsx)(AccountPopoverFooter, {
          children: (0, import_jsx_runtime11.jsx)(SignOutButton, {
            ...slotProps == null ? void 0 : slotProps.signOutButton
          })
        })]
      })
    })]
  });
}
true ? Account.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The labels for the account component.
   */
  localeText: import_prop_types2.default.shape({
    iconButtonAriaLabel: import_prop_types2.default.string,
    signInLabel: import_prop_types2.default.string,
    signOutLabel: import_prop_types2.default.string
  }),
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types2.default.shape({
    popover: import_prop_types2.default.object,
    popoverContent: import_prop_types2.default.object,
    preview: import_prop_types2.default.shape({
      handleClick: import_prop_types2.default.func,
      open: import_prop_types2.default.bool,
      slotProps: import_prop_types2.default.shape({
        avatar: import_prop_types2.default.object,
        avatarIconButton: import_prop_types2.default.object,
        moreIconButton: import_prop_types2.default.object
      }),
      slots: import_prop_types2.default.shape({
        avatar: import_prop_types2.default.elementType,
        avatarIconButton: import_prop_types2.default.elementType,
        moreIconButton: import_prop_types2.default.elementType
      }),
      variant: import_prop_types2.default.oneOf(["condensed", "expanded"])
    }),
    signInButton: import_prop_types2.default.object,
    signOutButton: import_prop_types2.default.object
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types2.default.shape({
    popover: import_prop_types2.default.elementType,
    popoverContent: import_prop_types2.default.elementType,
    preview: import_prop_types2.default.elementType,
    signInButton: import_prop_types2.default.elementType,
    signOutButton: import_prop_types2.default.elementType
  })
} : void 0;

// node_modules/@toolpad/core/shared/branding.js
var React8 = __toESM(require_react());
function useApplicationTitle() {
  const branding = React8.useContext(BrandingContext);
  return (branding == null ? void 0 : branding.title) ?? "Toolpad";
}

// node_modules/@toolpad/core/DashboardLayout/DashboardSidebarSubNavigation.js
var React9 = __toESM(require_react());

// node_modules/@mui/icons-material/esm/ExpandLess.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var ExpandLess_default = createSvgIcon((0, import_jsx_runtime12.jsx)("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");

// node_modules/@mui/icons-material/esm/ExpandMore.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var ExpandMore_default = createSvgIcon((0, import_jsx_runtime13.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");

// node_modules/@toolpad/core/DashboardLayout/utils.js
function getDrawerSxTransitionMixin(isExpanded, property) {
  return {
    transition: (theme) => theme.transitions.create(property, {
      easing: theme.transitions.easing.sharp,
      duration: isExpanded ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
    })
  };
}
function getDrawerWidthTransitionMixin(isExpanded) {
  return {
    ...getDrawerSxTransitionMixin(isExpanded, "width"),
    overflowX: "hidden"
  };
}

// node_modules/@toolpad/core/DashboardLayout/DashboardSidebarSubNavigation.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _ExpandLessIcon;
var _ExpandMoreIcon;
var NavigationListItemButton = styled_default(ListItemButton_default)(({
  theme
}) => ({
  borderRadius: 8,
  "&.Mui-selected": {
    "& .MuiListItemIcon-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiTypography-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiSvgIcon-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiAvatar-root": {
      backgroundColor: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiTouchRipple-child": {
      backgroundColor: (theme.vars ?? theme).palette.primary.dark
    }
  },
  "& .MuiSvgIcon-root": {
    color: (theme.vars ?? theme).palette.action.active
  },
  "& .MuiAvatar-root": {
    backgroundColor: (theme.vars ?? theme).palette.action.active
  }
}));
function DashboardSidebarSubNavigation({
  subNavigation,
  basePath = "",
  depth = 0,
  onLinkClick,
  isMini = false,
  isFullyExpanded = true,
  hasDrawerTransitions = false,
  selectedItemId
}) {
  const routerContext = React9.useContext(RouterContext);
  const pathname = (routerContext == null ? void 0 : routerContext.pathname) ?? "/";
  const initialExpandedSidebarItemIds = React9.useMemo(() => subNavigation.map((navigationItem, navigationItemIndex) => ({
    navigationItem,
    originalIndex: navigationItemIndex
  })).filter(({
    navigationItem
  }) => hasSelectedNavigationChildren(navigationItem, basePath, pathname)).map(({
    originalIndex
  }) => `${depth}-${originalIndex}`), [basePath, depth, pathname, subNavigation]);
  const [expandedSidebarItemIds, setExpandedSidebarItemIds] = React9.useState(initialExpandedSidebarItemIds);
  const handleOpenFolderClick = React9.useCallback((itemId) => () => {
    setExpandedSidebarItemIds((previousValue) => previousValue.includes(itemId) ? previousValue.filter((previousValueItemId) => previousValueItemId !== itemId) : [...previousValue, itemId]);
  }, []);
  return (0, import_jsx_runtime14.jsx)(List_default, {
    sx: {
      padding: 0,
      mb: depth === 0 ? 4 : 1,
      pl: 2 * depth
    },
    children: subNavigation.map((navigationItem, navigationItemIndex) => {
      if (navigationItem.kind === "header") {
        return (0, import_jsx_runtime14.jsx)(ListSubheader_default, {
          component: "div",
          sx: {
            fontSize: 12,
            fontWeight: "700",
            height: isMini ? 0 : 40,
            ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isFullyExpanded, "height") : {},
            px: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            zIndex: 2
          },
          children: getItemTitle(navigationItem)
        }, `subheader-${depth}-${navigationItemIndex}`);
      }
      if (navigationItem.kind === "divider") {
        const nextItem = subNavigation[navigationItemIndex + 1];
        return (0, import_jsx_runtime14.jsx)(Divider_default, {
          sx: {
            borderBottomWidth: 2,
            mx: 1,
            mt: 1,
            mb: (nextItem == null ? void 0 : nextItem.kind) === "header" && !isMini ? 0 : 1,
            ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isFullyExpanded, "margin") : {}
          }
        }, `divider-${depth}-${navigationItemIndex}`);
      }
      const navigationItemFullPath = getPageItemFullPath(basePath, navigationItem);
      const navigationItemId = `${depth}-${navigationItemIndex}`;
      const navigationItemTitle = getItemTitle(navigationItem);
      const isNestedNavigationExpanded = expandedSidebarItemIds.includes(navigationItemId);
      const nestedNavigationCollapseIcon = isNestedNavigationExpanded ? _ExpandLessIcon || (_ExpandLessIcon = (0, import_jsx_runtime14.jsx)(ExpandLess_default, {})) : _ExpandMoreIcon || (_ExpandMoreIcon = (0, import_jsx_runtime14.jsx)(ExpandMore_default, {}));
      const listItemIconSize = 34;
      const isSelected = isPageItemSelected(navigationItem, basePath, pathname);
      if (isSelected && selectedItemId) {
        console.warn(`Duplicate selected path in navigation: ${navigationItemFullPath}`);
      }
      if (isSelected && !selectedItemId) {
        selectedItemId = navigationItemId;
      }
      const listItem = (0, import_jsx_runtime14.jsx)(ListItem_default, {
        sx: {
          py: 0,
          px: 1,
          overflowX: "hidden"
        },
        children: (0, import_jsx_runtime14.jsxs)(NavigationListItemButton, {
          selected: isSelected && (!navigationItem.children || isMini),
          sx: {
            px: 1.4,
            height: 48
          },
          ...navigationItem.children && !isMini ? {
            onClick: handleOpenFolderClick(navigationItemId)
          } : {
            LinkComponent: Link,
            href: navigationItemFullPath,
            onClick: onLinkClick
          },
          children: [navigationItem.icon || isMini ? (0, import_jsx_runtime14.jsxs)(ListItemIcon_default, {
            sx: {
              minWidth: listItemIconSize,
              mr: 1.2
            },
            children: [navigationItem.icon ?? null, !navigationItem.icon && isMini ? (0, import_jsx_runtime14.jsx)(Avatar_default, {
              sx: {
                width: listItemIconSize - 7,
                height: listItemIconSize - 7,
                fontSize: 12,
                ml: "-2px"
              },
              children: navigationItemTitle.split(" ").slice(0, 2).map((itemTitleWord) => itemTitleWord.charAt(0).toUpperCase())
            }) : null]
          }) : null, (0, import_jsx_runtime14.jsx)(ListItemText_default, {
            primary: navigationItemTitle,
            sx: {
              whiteSpace: "nowrap",
              zIndex: 1,
              "& .MuiTypography-root": {
                fontWeight: "500"
              }
            }
          }), navigationItem.action && !isMini && isFullyExpanded ? navigationItem.action : null, navigationItem.children && !isMini && isFullyExpanded ? nestedNavigationCollapseIcon : null]
        })
      });
      return (0, import_jsx_runtime14.jsxs)(React9.Fragment, {
        children: [isMini ? (0, import_jsx_runtime14.jsx)(Tooltip_default, {
          title: navigationItemTitle,
          placement: "right",
          children: listItem
        }) : listItem, navigationItem.children && !isMini ? (0, import_jsx_runtime14.jsx)(Collapse_default, {
          in: isNestedNavigationExpanded,
          timeout: "auto",
          unmountOnExit: true,
          children: (0, import_jsx_runtime14.jsx)(DashboardSidebarSubNavigation, {
            subNavigation: navigationItem.children,
            basePath: navigationItemFullPath,
            depth: depth + 1,
            onLinkClick,
            selectedItemId
          })
        }) : null]
      }, navigationItemId);
    })
  });
}

// node_modules/@toolpad/core/DashboardLayout/ToolbarActions.js
function ToolbarActions() {
  return null;
}

// node_modules/@toolpad/core/DashboardLayout/ThemeSwitcher.js
var React11 = __toESM(require_react());

// node_modules/@mui/icons-material/esm/DarkMode.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var DarkMode_default = createSvgIcon((0, import_jsx_runtime15.jsx)("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode");

// node_modules/@mui/icons-material/esm/LightMode.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var LightMode_default = createSvgIcon((0, import_jsx_runtime16.jsx)("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode");

// node_modules/@toolpad/utils/dist/hooks/useSsr.js
var React10 = __toESM(require_react());
function subscribe() {
  return () => {
  };
}
function getSnapshot() {
  return false;
}
function getServerSnapshot() {
  return true;
}
function useSsr() {
  return React10.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// node_modules/@toolpad/core/DashboardLayout/ThemeSwitcher.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _DarkModeIcon;
var _LightModeIcon;
function ThemeSwitcher() {
  const isSsr = useSsr();
  const theme = useTheme();
  const {
    paletteMode,
    setPaletteMode,
    isDualTheme
  } = React11.useContext(PaletteModeContext);
  const toggleMode = React11.useCallback(() => {
    setPaletteMode(paletteMode === "dark" ? "light" : "dark");
  }, [paletteMode, setPaletteMode]);
  return isDualTheme ? (0, import_jsx_runtime17.jsx)(Tooltip_default, {
    title: isSsr ? "Switch mode" : `${paletteMode === "dark" ? "Light" : "Dark"} mode`,
    enterDelay: 1e3,
    children: (0, import_jsx_runtime17.jsx)("div", {
      children: (0, import_jsx_runtime17.jsx)(IconButton_default, {
        "aria-label": isSsr ? "Switch theme mode" : `Switch to ${paletteMode === "dark" ? "light" : "dark"} mode`,
        onClick: toggleMode,
        sx: {
          color: (theme.vars ?? theme).palette.primary.dark
        },
        children: theme.getColorSchemeSelector ? (0, import_jsx_runtime17.jsxs)(React11.Fragment, {
          children: [(0, import_jsx_runtime17.jsx)(DarkMode_default, {
            sx: {
              display: "inline",
              [theme.getColorSchemeSelector("dark")]: {
                display: "none"
              }
            }
          }), (0, import_jsx_runtime17.jsx)(LightMode_default, {
            sx: {
              display: "none",
              [theme.getColorSchemeSelector("dark")]: {
                display: "inline"
              }
            }
          })]
        }) : (0, import_jsx_runtime17.jsx)(React11.Fragment, {
          children: isSsr || paletteMode !== "dark" ? _DarkModeIcon || (_DarkModeIcon = (0, import_jsx_runtime17.jsx)(DarkMode_default, {})) : _LightModeIcon || (_LightModeIcon = (0, import_jsx_runtime17.jsx)(LightMode_default, {}))
        })
      })
    })
  }) : null;
}

// node_modules/@toolpad/core/DashboardLayout/ToolpadLogo.js
var React12 = __toESM(require_react());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _g;
var _path;
var _g2;
var _path2;
var _g3;
function ToolpadLogo({
  size = 40
}) {
  return (0, import_jsx_runtime18.jsxs)("svg", {
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [_g || (_g = (0, import_jsx_runtime18.jsxs)("g", {
      mask: "url(#a)",
      children: [(0, import_jsx_runtime18.jsx)("path", {
        d: "M22.74 27.73v-7.6l6.64-3.79v7.6l-6.64 3.79Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "M16.1 23.93v-7.59l6.64 3.8v7.59l-6.65-3.8Z",
        fill: "#39F"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "m16.1 16.34 6.64-3.8 6.64 3.8-6.64 3.8-6.65-3.8Z",
        fill: "#A5D8FF"
      })]
    })), (0, import_jsx_runtime18.jsx)("mask", {
      id: "b",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "17",
      width: "14",
      height: "15",
      children: _path || (_path = (0, import_jsx_runtime18.jsx)("path", {
        d: "M8.5 22.3c0-1.05.56-2 1.46-2.53l3.75-2.14c.89-.5 1.98-.5 2.87 0l3.75 2.14a2.9 2.9 0 0 1 1.46 2.52v4.23c0 1.04-.56 2-1.46 2.52l-3.75 2.14c-.89.5-1.98.5-2.87 0l-3.75-2.14a2.9 2.9 0 0 1-1.46-2.52v-4.23Z",
        fill: "#D7DCE1"
      }))
    }), _g2 || (_g2 = (0, import_jsx_runtime18.jsxs)("g", {
      mask: "url(#b)",
      children: [(0, import_jsx_runtime18.jsx)("path", {
        d: "M15.14 32v-7.6l6.65-3.8v7.6L15.14 32Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "M8.5 28.2v-7.6l6.64 3.8V32L8.5 28.2Z",
        fill: "#39F"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "m8.5 20.6 6.64-3.79 6.65 3.8-6.65 3.8-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    })), (0, import_jsx_runtime18.jsx)("mask", {
      id: "c",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "4",
      width: "22",
      height: "20",
      children: _path2 || (_path2 = (0, import_jsx_runtime18.jsx)("path", {
        d: "M24.17 4.82a2.9 2.9 0 0 0-2.87 0L9.97 11.22a2.9 2.9 0 0 0-1.47 2.53v4.22c0 1.04.56 2 1.46 2.52l3.75 2.14c.89.5 1.98.5 2.87 0l11.33-6.42a2.9 2.9 0 0 0 1.47-2.52V9.48c0-1.04-.56-2-1.46-2.52l-3.75-2.14Z",
        fill: "#D7DCE1"
      }))
    }), _g3 || (_g3 = (0, import_jsx_runtime18.jsxs)("g", {
      mask: "url(#c)",
      children: [(0, import_jsx_runtime18.jsx)("path", {
        d: "M15.14 23.46v-7.6L29.38 7.8v7.59l-14.24 8.07Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "M8.5 19.66v-7.6l6.64 3.8v7.6l-6.64-3.8Z",
        fill: "#39F"
      }), (0, import_jsx_runtime18.jsx)("path", {
        d: "M8.5 12.07 22.74 4l6.64 3.8-14.24 8.06-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    }))]
  });
}

// node_modules/@toolpad/core/DashboardLayout/DashboardLayout.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _MenuOpenIcon;
var _MenuIcon;
var _Toolbar;
var _ToolpadLogo;
var _ThemeSwitcher;
var _Toolbar2;
var AppBar = styled_default(AppBar_default)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1
}));
var LogoContainer = styled_default("div")({
  position: "relative",
  height: 40,
  "& img": {
    maxHeight: 40
  }
});
function DashboardLayout(props) {
  const {
    children,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    slots,
    slotProps,
    sx
  } = props;
  const theme = useTheme();
  const branding = React13.useContext(BrandingContext);
  const navigation = React13.useContext(NavigationContext);
  const appWindow = React13.useContext(WindowContext);
  const applicationTitle = useApplicationTitle();
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React13.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React13.useState(false);
  const isUnderMdViewport = useMediaQuery(theme.breakpoints.down("md"), appWindow && {
    matchMedia: appWindow.matchMedia
  });
  const isOverSmViewport = useMediaQuery(theme.breakpoints.up("sm"), appWindow && {
    matchMedia: appWindow.matchMedia
  });
  const isNavigationExpanded = isUnderMdViewport ? isMobileNavigationExpanded : isDesktopNavigationExpanded;
  const setIsNavigationExpanded = React13.useCallback((newExpanded) => {
    if (isUnderMdViewport) {
      setIsMobileNavigationExpanded(newExpanded);
    } else {
      setIsDesktopNavigationExpanded(newExpanded);
    }
  }, [isUnderMdViewport]);
  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] = React13.useState(isNavigationExpanded);
  React13.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyExpanded(false);
    return () => {
    };
  }, [isNavigationExpanded, theme]);
  const selectedItemIdRef = React13.useRef("");
  const handleSetNavigationExpanded = React13.useCallback((newExpanded) => () => {
    setIsNavigationExpanded(newExpanded);
  }, [setIsNavigationExpanded]);
  const toggleNavigationExpanded = React13.useCallback(() => {
    setIsNavigationExpanded(!isNavigationExpanded);
  }, [isNavigationExpanded, setIsNavigationExpanded]);
  const handleNavigationLinkClick = React13.useCallback(() => {
    selectedItemIdRef.current = "";
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);
  React13.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = "";
    }
  }, [navigation]);
  const isDesktopMini = !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini = !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const getMenuIcon = React13.useCallback((isExpanded) => {
    const expandMenuActionText = "Expand";
    const collapseMenuActionText = "Collapse";
    return (0, import_jsx_runtime19.jsx)(Tooltip_default, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1e3,
      children: (0, import_jsx_runtime19.jsx)("div", {
        children: (0, import_jsx_runtime19.jsx)(IconButton_default, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: toggleNavigationExpanded,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = (0, import_jsx_runtime19.jsx)(MenuOpen_default, {})) : _MenuIcon || (_MenuIcon = (0, import_jsx_runtime19.jsx)(Menu_default, {}))
        })
      })
    });
  }, [toggleNavigationExpanded]);
  const hasDrawerTransitions = isOverSmViewport && (disableCollapsibleSidebar || !isUnderMdViewport);
  const ToolbarActionsSlot = (slots == null ? void 0 : slots.toolbarActions) ?? ToolbarActions;
  const ToolbarAccountSlot = (slots == null ? void 0 : slots.toolbarAccount) ?? Account;
  const SidebarFooterSlot = (slots == null ? void 0 : slots.sidebarFooter) ?? null;
  const getDrawerContent = React13.useCallback((isMini, viewport) => {
    var _a;
    return (0, import_jsx_runtime19.jsxs)(React13.Fragment, {
      children: [_Toolbar || (_Toolbar = (0, import_jsx_runtime19.jsx)(Toolbar_default, {})), (0, import_jsx_runtime19.jsxs)(Box_default, {
        component: "nav",
        "aria-label": `${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`,
        sx: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "auto",
          pt: ((_a = navigation[0]) == null ? void 0 : _a.kind) === "header" && !isMini ? 0 : 2,
          ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isNavigationFullyExpanded, "padding") : {}
        },
        children: [(0, import_jsx_runtime19.jsx)(DashboardSidebarSubNavigation, {
          subNavigation: navigation,
          onLinkClick: handleNavigationLinkClick,
          isMini,
          isFullyExpanded: isNavigationFullyExpanded,
          hasDrawerTransitions,
          selectedItemId: selectedItemIdRef.current
        }), SidebarFooterSlot ? (0, import_jsx_runtime19.jsx)(SidebarFooterSlot, {
          mini: isMini,
          ...slotProps == null ? void 0 : slotProps.sidebarFooter
        }) : null]
      })]
    });
  }, [SidebarFooterSlot, handleNavigationLinkClick, hasDrawerTransitions, isNavigationFullyExpanded, navigation, slotProps == null ? void 0 : slotProps.sidebarFooter]);
  const getDrawerSharedSx = React13.useCallback((isMini, isTemporary) => {
    const drawerWidth = isMini ? 64 : 320;
    return {
      width: drawerWidth,
      flexShrink: 0,
      ...getDrawerWidthTransitionMixin(isNavigationExpanded),
      ...isTemporary ? {
        position: "absolute"
      } : {},
      [`& .MuiDrawer-paper`]: {
        position: "absolute",
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundImage: "none",
        ...getDrawerWidthTransitionMixin(isNavigationExpanded)
      }
    };
  }, [isNavigationExpanded]);
  const layoutRef = React13.useRef(null);
  return (0, import_jsx_runtime19.jsxs)(Box_default, {
    ref: layoutRef,
    sx: {
      position: "relative",
      display: "flex",
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
      ...sx
    },
    children: [(0, import_jsx_runtime19.jsx)(AppBar, {
      color: "inherit",
      position: "absolute",
      children: (0, import_jsx_runtime19.jsxs)(Toolbar_default, {
        sx: {
          backgroundColor: "inherit",
          mx: {
            xs: -0.75,
            sm: -1.5
          }
        },
        children: [!hideNavigation ? (0, import_jsx_runtime19.jsxs)(React13.Fragment, {
          children: [(0, import_jsx_runtime19.jsx)(Box_default, {
            sx: {
              mr: {
                sm: disableCollapsibleSidebar ? 0 : 1
              },
              display: {
                md: "none"
              }
            },
            children: getMenuIcon(isMobileNavigationExpanded)
          }), (0, import_jsx_runtime19.jsx)(Box_default, {
            sx: {
              display: {
                xs: "none",
                md: disableCollapsibleSidebar ? "none" : "block"
              },
              mr: disableCollapsibleSidebar ? 0 : 1
            },
            children: getMenuIcon(isDesktopNavigationExpanded)
          })]
        }) : null, (0, import_jsx_runtime19.jsx)(Box_default, {
          sx: {
            position: {
              xs: "absolute",
              md: "static"
            },
            left: {
              xs: "50%",
              md: "auto"
            },
            transform: {
              xs: "translateX(-50%)",
              md: "none"
            }
          },
          children: (0, import_jsx_runtime19.jsx)(Link, {
            href: "/",
            style: {
              color: "inherit",
              textDecoration: "none"
            },
            children: (0, import_jsx_runtime19.jsxs)(Stack_default, {
              direction: "row",
              alignItems: "center",
              children: [(0, import_jsx_runtime19.jsx)(LogoContainer, {
                children: (branding == null ? void 0 : branding.logo) ?? (_ToolpadLogo || (_ToolpadLogo = (0, import_jsx_runtime19.jsx)(ToolpadLogo, {
                  size: 40
                })))
              }), (0, import_jsx_runtime19.jsx)(Typography_default, {
                variant: "h6",
                sx: {
                  color: (theme.vars ?? theme).palette.primary.main,
                  fontWeight: "700",
                  ml: 0.5,
                  whiteSpace: "nowrap"
                },
                children: applicationTitle
              })]
            })
          })
        }), (0, import_jsx_runtime19.jsx)(Box_default, {
          sx: {
            flexGrow: 1
          }
        }), (0, import_jsx_runtime19.jsxs)(Stack_default, {
          direction: "row",
          spacing: 1,
          children: [(0, import_jsx_runtime19.jsx)(ToolbarActionsSlot, {
            ...slotProps == null ? void 0 : slotProps.toolbarActions
          }), _ThemeSwitcher || (_ThemeSwitcher = (0, import_jsx_runtime19.jsx)(ThemeSwitcher, {})), (0, import_jsx_runtime19.jsx)(ToolbarAccountSlot, {
            ...slotProps == null ? void 0 : slotProps.toolbarAccount
          })]
        })]
      })
    }), !hideNavigation ? (0, import_jsx_runtime19.jsxs)(React13.Fragment, {
      children: [(0, import_jsx_runtime19.jsx)(Drawer_default, {
        container: layoutRef.current,
        variant: "temporary",
        open: isMobileNavigationExpanded,
        onClose: handleSetNavigationExpanded(false),
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        sx: {
          display: {
            xs: "block",
            sm: disableCollapsibleSidebar ? "block" : "none",
            md: "none"
          },
          ...getDrawerSharedSx(false, true)
        },
        children: getDrawerContent(false, "phone")
      }), (0, import_jsx_runtime19.jsx)(Drawer_default, {
        variant: "permanent",
        sx: {
          display: {
            xs: "none",
            sm: disableCollapsibleSidebar ? "none" : "block",
            md: "none"
          },
          ...getDrawerSharedSx(isMobileMini, false)
        },
        children: getDrawerContent(isMobileMini, "tablet")
      }), (0, import_jsx_runtime19.jsx)(Drawer_default, {
        variant: "permanent",
        sx: {
          display: {
            xs: "none",
            md: "block"
          },
          ...getDrawerSharedSx(isDesktopMini, false)
        },
        children: getDrawerContent(isDesktopMini, "desktop")
      })]
    }) : null, (0, import_jsx_runtime19.jsxs)(Box_default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1
      },
      children: [_Toolbar2 || (_Toolbar2 = (0, import_jsx_runtime19.jsx)(Toolbar_default, {})), (0, import_jsx_runtime19.jsx)(Box_default, {
        component: "main",
        sx: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "auto"
        },
        children
      })]
    })]
  });
}
true ? DashboardLayout.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the dashboard.
   */
  children: import_prop_types3.default.node,
  /**
   * Whether the sidebar should start collapsed in desktop size screens.
   * @default false
   */
  defaultSidebarCollapsed: import_prop_types3.default.bool,
  /**
   * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
   * @default false
   */
  disableCollapsibleSidebar: import_prop_types3.default.bool,
  /**
   * Whether the navigation bar and menu icon should be hidden
   * @default false
   */
  hideNavigation: import_prop_types3.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    sidebarFooter: import_prop_types3.default.shape({
      mini: import_prop_types3.default.bool.isRequired
    }),
    toolbarAccount: import_prop_types3.default.shape({
      localeText: import_prop_types3.default.shape({
        iconButtonAriaLabel: import_prop_types3.default.string,
        signInLabel: import_prop_types3.default.string,
        signOutLabel: import_prop_types3.default.string
      }),
      slotProps: import_prop_types3.default.shape({
        popover: import_prop_types3.default.object,
        popoverContent: import_prop_types3.default.object,
        preview: import_prop_types3.default.object,
        signInButton: import_prop_types3.default.object,
        signOutButton: import_prop_types3.default.object
      }),
      slots: import_prop_types3.default.shape({
        popover: import_prop_types3.default.elementType,
        popoverContent: import_prop_types3.default.elementType,
        preview: import_prop_types3.default.elementType,
        signInButton: import_prop_types3.default.elementType,
        signOutButton: import_prop_types3.default.elementType
      })
    }),
    toolbarActions: import_prop_types3.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    sidebarFooter: import_prop_types3.default.elementType,
    toolbarAccount: import_prop_types3.default.elementType,
    toolbarActions: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
export {
  DashboardLayout,
  ToolbarActions
};
//# sourceMappingURL=@toolpad_core_DashboardLayout.js.map
