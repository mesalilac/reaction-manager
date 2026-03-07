use super::prelude::*;

#[derive(Queryable, Selectable, Insertable, Identifiable, Debug, Clone)]
#[diesel(table_name = settings)]
pub struct SettingEntity {
    pub id: i32,
    pub library_path: Option<String>,
    pub minimize_on_copy: bool,
}

#[derive(specta::Type, Serialize, Deserialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Setting {
    pub id: i32,
    pub library_path: Option<String>,
    pub minimize_on_copy: bool,
}

impl Setting {
    pub fn from_entity(entity: SettingEntity) -> Self {
        Self {
            id: entity.id,
            library_path: entity.library_path,
            minimize_on_copy: entity.minimize_on_copy,
        }
    }
}
