app_name = "scale"
app_title = "Scale"
app_publisher = "ERPGulf"
app_description = " App to accomadate Weighing scale barcode with ERPNext POS"
app_email = "support@ERPGUlf.com"
app_license = "mit"
# required_apps = []

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/scale/css/scale.css"
# app_include_js = "/assets/scale/js/scale.js"

# Path: hooks.py

# app_include_js = "/assets/scale/js/override.js"

# app_include_js = [
#     "/assets/scale/js/onscan.js",
#     "/assets/scale/js/override_controller.js",
#     "/assets/scale/js/override_item_selector.js"
# ]

app_include_js = [
    "/assets/scale/js/override_item_selector.js",
    "/assets/scale/js/override_post_order_summary.js",
    "/assets/scale/js/override_pos_controller.js"
]
 




# include js, css files in header of web template
# web_include_css = "/assets/scale/css/scale.css"
# web_include_js = "/assets/scale/js/override.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "scale/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page


# page_js = {"point_of_sale": "scale/public/js/override.js"}



# include js in doctype views
# doctype_js = {"doctype" : "public/js/override.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "scale/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "scale.utils.jinja_methods",
# 	"filters": "scale.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "scale.install.before_install"
# after_install = "scale.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "scale.uninstall.before_uninstall"
# after_uninstall = "scale.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "scale.utils.before_app_install"
# after_app_install = "scale.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "scale.utils.before_app_uninstall"
# after_app_uninstall = "scale.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "scale.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"scale.tasks.all"
# 	],
# 	"daily": [
# 		"scale.tasks.daily"
# 	],
# 	"hourly": [
# 		"scale.tasks.hourly"
# 	],
# 	"weekly": [
# 		"scale.tasks.weekly"
# 	],
# 	"monthly": [
# 		"scale.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "scale.install.before_tests"

# Overriding Methods
# ------------------------------


override_whitelisted_methods = {
    "erpnext.selling.page.point_of_sale.point_of_sale.search_by_term" : "scale.my_pos.searching_term",
    "scale.my_pos.get_test_qty" : "scale.my_pos.get_test_qty",
}

#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "scale.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "scale.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["scale.utils.before_request"]
# after_request = ["scale.utils.after_request"]

# Job Events
# ----------
# before_job = ["scale.utils.before_job"]
# after_job = ["scale.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"scale.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

