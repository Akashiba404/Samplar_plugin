var main_iframe = getElementById("settings_iframe");
const fs = require("fs")

document.getElementById("key_setting_button").onclick() = function() {
    document.main_ifarme.src = "setting_page/key_setting.html";
};

document.getElementById("button_setting_button").onclick() = function() {
    document.main_ifarme.src = "setting_page/button_setting.html";
};

document.getElementById("volume_setting_button").onclick() = function() {
    document.main_ifarme.src = "setting_page/volume_setting.html";
};

// fs.appendFileSync("setting_files/key_setting.txt", a,"UTF-8");