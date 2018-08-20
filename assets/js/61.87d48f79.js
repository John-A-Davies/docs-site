(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{204:function(e,t,i){"use strict";i.r(t);var s=i(0),a=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("zLUX provides the ability to create application plug-ins. For more information, see "),i("router-link",{attrs:{to:"./mvd-plugincreateappplugin.html"}},[e._v("Creating zLUX application plug-ins")]),e._v(".")],1),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("From the Mainframe Virtual Desktop (MVD), you can access the Project Zowe applications.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("where:")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),i("p",[e._v("The explorer server provides a sample web client that can be used to view and manipulate the Job Entry Subsystem (JES), data sets, z/OS UNIX System Services (USS), and System log.")]),e._v(" "),i("p",[e._v("The following views are available from the explorer server Web UI and are accessible via the explorer server icon located in the application draw of MVD (Navigation between views can be performed using the menu draw located in the top left corner of the explorer server Web UI):")]),e._v(" "),e._m(9),e._v(" "),i("p",[e._v("Use this view to query JES jobs with filters, and view the related steps, files, and status. You can also purge jobs from this view.")]),e._v(" "),e._m(10),e._v(" "),i("p",[e._v("Use this view to browse the MVS™ file system by using a high-level qualifier filter. With the Dataset Explorer, you can complete the following tasks:")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("Use this view to browse the USS files by using a path. With the UNIX file Explorer, you can complete the following tasks:")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),i("p",[e._v("Application plug-ins are applications that you can use to access the mainframe and to perform various tasks. Developers can create application plug-ins using a sample application as a guide.")]),e._v(" "),e._m(15),e._v(" "),i("p",[e._v("This sample application plug-in for developers demonstrates how to create a dataservice and how to create an application plug-in using Angular.")]),e._v(" "),e._m(16),e._v(" "),i("p",[e._v("This sample application plug-in for developers demonstrates how to embed pre-made webpages within the desktop as an application and how an application can request an action of another application (see the source code for more information).")]),e._v(" "),e._m(17),e._v(" "),i("p",[e._v("This application plug-in helps you find information about the important services on the mainframe, such as CICS, Db2, and IMS.")]),e._v(" "),e._m(18),e._v(" "),i("p",[e._v("This application plug-in provides a 3270 connection to the mainframe on\nwhich the Zowe Node Server runs.")]),e._v(" "),e._m(19),e._v(" "),i("p",[e._v("This application plug-in provides a connection to UNIX System Services and UNIX.")]),e._v(" "),e._m(20),e._v(" "),i("p",[e._v("zLUX generates log files in the following default locations:")]),e._v(" "),e._m(21),e._v(" "),i("p",[e._v("The Zowe Node Server logs and ZSS logs are timestamped in the format yyyy-mm-dd-hh-mm and older logs are deleted when a new log is created at server startup.")]),e._v(" "),i("p",[e._v("The log files contain processing messages and statistics.")]),e._v(" "),e._m(22),e._v(" "),i("p",[e._v("The zLUX server writes log information to a file and to the screen. (On Windows, logs are written to a file only.)")]),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),i("p",[e._v("If zLUX cannot create the directory or file, the server will still run, however, it might not perform logging properly).")]),e._v(" "),e._m(29),e._v(" "),e._m(30)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"using-zlux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-zlux","aria-hidden":"true"}},[this._v("#")]),this._v(" Using zLUX")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"navigating-mvd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigating-mvd","aria-hidden":"true"}},[this._v("#")]),this._v(" Navigating MVD")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"accessing-the-mvd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-mvd","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing the MVD")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From a supported browser, open the MVD at "),t("code",[this._v("https://myhost:httpsPort/ZLUX/plugins/com.rs.mvd/web/index.html")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("em",[e._v("myHost")]),e._v(" is the host on which you are running the Zowe Node Server.")]),e._v(" "),i("li",[i("em",[e._v("httpsPort")]),e._v(" is the value that was assigned to "),i("em",[e._v("node.https.port")]),e._v(" in "),i("code",[e._v("zluxserver.json")]),e._v(".\nFor example, if you run the Zowe Node Server on host "),i("em",[e._v("myhost")]),e._v(" and the value that is assigned to "),i("em",[e._v("node.https.port")]),e._v(" in "),i("code",[e._v("zluxserver.json")]),e._v(" is 12345, you would specify "),i("code",[e._v("https://myhost:12345/ZLUX/plugins/com.rs.mvd/web/index.html")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logging-in-and-out-of-the-mvd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging-in-and-out-of-the-mvd","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging in and out of the MVD")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("To log in, enter your mainframe credentials in the "),t("strong",[this._v("Username")]),this._v(" and  "),t("strong",[this._v("Password")]),this._v(" fields.")]),this._v(" "),t("li",[this._v("Press Enter. Upon authentication of your user name and password, the desktop opens.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To log out, click the the avatar in the lower right corner and click "),t("strong",[this._v("Sign Out")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-explorers-within-zlux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-explorers-within-zlux","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Explorers within zLUX")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("JES Explorer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Data set Explorer")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("List the members of partitioned data sets.")]),e._v(" "),i("li",[e._v('Create new data sets using attributes or the attributes of an existing data set ("Allocate Like").')]),e._v(" "),i("li",[e._v("Submit data sets that contain JCL to Job Entry Subsystem (JES).")]),e._v(" "),i("li",[e._v("Edit sequential data sets and partitioned data set members with basic syntax highlighting and content assist for JCL and REXX.")]),e._v(" "),i("li",[e._v("Conduct basic validation of record length when editing JCL.")]),e._v(" "),i("li",[e._v("Delete data sets and members.")]),e._v(" "),i("li",[e._v("Open data sets in full screen editor mode, which gives you a fully qualified link to that file. The link is then reusable for example in help tickets.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("UNIX file Explorer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("List files and folders.")]),this._v(" "),t("li",[this._v("Create new files and folders.")]),this._v(" "),t("li",[this._v("Edit files with basic syntax highlighting and content assist for JCL and REXX.")]),this._v(" "),t("li",[this._v("Delete files and folders.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-zlux-application-plug-ins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-zlux-application-plug-ins","aria-hidden":"true"}},[this._v("#")]),this._v(" Using zLUX application plug-ins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hello-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[this._v("#")]),this._v(" Hello World")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"iframe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iframe","aria-hidden":"true"}},[this._v("#")]),this._v(" IFrame")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"zos-subsystems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zos-subsystems","aria-hidden":"true"}},[this._v("#")]),this._v(" ZOS Subsystems")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"tn3270"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tn3270","aria-hidden":"true"}},[this._v("#")]),this._v(" TN3270")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"vt-terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vt-terminal","aria-hidden":"true"}},[this._v("#")]),this._v(" VT Terminal")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"zlux-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-logging","aria-hidden":"true"}},[this._v("#")]),this._v(" zLUX logging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Zowe Node Server: "),t("code",[this._v("zlux-example-server/log/nodeServer-yyyy-mm-dd-hh-mm.log")])]),this._v(" "),t("li",[this._v("ZSS: "),t("code",[this._v("zlux-example-server/log/zssServer-yyyy-mm-dd-hh-mm.log")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"controlling-the-zlux-logging-location"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#controlling-the-zlux-logging-location","aria-hidden":"true"}},[this._v("#")]),this._v(" Controlling the zLUX logging location")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"zlux-node-log-dir-and-zss-log-dir-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-node-log-dir-and-zss-log-dir-environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" ZLUX_NODE_LOG_DIR and ZSS_LOG_DIR environment variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To control where the information is logged, use the environment variable "),t("em",[this._v("ZLUX_NODE_LOG_DIR")]),this._v(", for the Zowe Node Server, and "),t("em",[this._v("ZSS_LOG_DIR")]),this._v(", for ZSS. While these variables are intended to specify a directory, if you specify a location that is a file name, zLUX will write the logs to the specified file instead (for example: "),t("code",[this._v("/dev/null")]),this._v(" to disable logging).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When you specify the environment variables "),t("em",[this._v("ZLUX_NODE_LOG_DIR")]),this._v(" and "),t("em",[this._v("ZSS_LOG_DIR")]),this._v(" and they are directories rather than files, zLUX will perform timestamping and cleanup.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"zlux-node-log-file-and-zss-log-file-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zlux-node-log-file-and-zss-log-file-environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" ZLUX_NODE_LOG_FILE and ZSS_LOG_FILE environment variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you set the log file name for the node server by setting the "),t("em",[this._v("ZLUX_NODE_LOG_FILE")]),this._v(" environment variable, or if you set the log file for ZSS by setting the "),t("em",[this._v("ZSS_LOG_FILE")]),this._v(" environment variable, there will only be one log file, and it will be overwritten.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Note")]),this._v(": When you set the "),t("em",[this._v("ZLUX_NODE_LOG_FILE")]),this._v(" or "),t("em",[this._v("ZSS_LOG_FILE")]),this._v(" environment variables, zLUX will not override the log names, set a timestamp, or delete the logs.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"retaining-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retaining-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" Retaining logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, zLUX retains the last five logs. If you want to specify a different number of logs to retain, set "),t("em",[this._v("ZLUX_NODE_LOGS_TO_KEEP")]),this._v(" (Zowe Node Server logs) or "),t("em",[this._v("ZSS_LOGS_TO_KEEP")]),this._v(" (ZSS logs) to the number of logs that you want to keep. The default is 5.")])}],!1,null,null,null);a.options.__file="usingmvd.md";t.default=a.exports}}]);