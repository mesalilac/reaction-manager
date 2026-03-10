use super::prelude::*;

#[tauri::command]
#[specta::specta]
pub async fn util_drop_files(state: AppState<'_>) -> CommandResult<i32> {
    let mut conn = state.pool.get()?;

    Ok(todo!())
}
