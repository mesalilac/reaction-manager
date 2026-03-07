use serde::{Deserialize, Serialize};

#[derive(specta::Type, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct GeneralStats {
    pub image_count: i32,
    pub video_count: i32,
    pub audio_count: i32,
    pub snippet_count: i32,
    pub tag_count: i32,
}
