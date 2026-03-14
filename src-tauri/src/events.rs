use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, specta::Type, tauri_specta::Event)]
pub struct FileProcessingProgress {
    pub current: i32,
    pub total: i32,
}
