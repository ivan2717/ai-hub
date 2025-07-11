// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{Manager, WindowEvent};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        // 使用 setup 钩子，在窗口创建后执行代码
        .setup(|app| {
            // 通过 label 获取主窗口
            let _window = app.get_webview_window("main").unwrap();

            // 在非移动端平台上设置全屏
            #[cfg(not(mobile))]
            {
                _window
                    .set_fullscreen(true)
                    .expect("Failed to set window to fullscreen");
            }

            Ok(())
        })
        // （可选但强烈推荐）添加事件监听来处理意外情况
        .on_window_event(|_window, event| match event {
            // 如果用户试图通过系统快捷键退出全屏
            #[cfg(not(mobile))]
            WindowEvent::Resized(..) => {
                // 立即强制其返回全屏状态
                let _ = _window.set_fullscreen(true);
            }
            // 阻止通过 Alt+F4 或 Cmd+Q 关闭
            WindowEvent::CloseRequested { api, .. } => {
                api.prevent_close();
            }
            // 确保窗口始终在最前和获取焦点 (Kiosk模式加强)
            #[cfg(not(mobile))]
            WindowEvent::Focused(false) => {
                let _ = _window.set_focus();
            }
            _ => {}
        })
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
