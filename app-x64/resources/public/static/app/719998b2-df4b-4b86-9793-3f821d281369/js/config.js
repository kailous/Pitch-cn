;(function () {
  const fullConfig = {"prod": {"segment_api_write_key": "Rjvgwd8gXRRvoctArXQbcmDmh2qm03Q3", "dev_panel_layout_augmentation_tab_enabled": false, "xoch_snowplow_tracker_address": "https://s.pitch.com", "xoch_snowplow_post_path": "/78a39/de7", "analytics_tracking": true, "analytics_braze_api_key": "10fe0841-ef17-40bb-ba5c-153fdc0f075e", "analytics_braze_base_url": "sdk.fra-01.braze.eu", "datadog_tracking": true, "datadog_rum_tracking": false, "datadog_rum_client_token": null, "datadog_rum_application_id": null, "api_test": {}, "app_asset_endpoint": "https://pitch-static-assets.imgix.net", "publish_user_assets_endpoint": "https://pitch-publish-user-assets.imgix.net", "base_platform_app_url": "https://pitch.com", "base_external_link_url": "https://pitch.com", "templates_offline_support": true, "app_name": "Pitch", "asset_upload_api_endpoint": "https://document-sync-4-prod.api.pitch.com", "auth_client_id": "B69uZE0B11q1m28UE87mP4SPGBmNjGdg", "auth_client_id_web_2": "TAZUl8D8OK53lYBIQ5mZo0zu07edCwP0", "auth_endpoint": "auth.pitch.com", "auth_leeway": 300, "auto_updating": true, "auto_updater_base_url": "https://desktop-app-builds.pitch.com/", "auto-updater-base-url-desktop": "https://desktop-app-builds.pitch.com/", "auto-updater-base-url-mobile": "https://pitch-6364eda7-cb82-47ee-bf86-627ce6e89a58.s3.eu-west-1.amazonaws.com/", "magic_bell_api_key": "22b3f4f61c0154cc463e5ab42eb6b45b4b5a3c25", "billing_page_viewable": false, "billing_sales_email": "sales@pitch.com", "billing_upsell_ctas_allowed": true, "beta_labels_allowed": true, "debug_interceptors": false, "dev_panel_enabled": false, "desktop-app-scheme": "pitch", "desktop-app-user-data-dir": "Pitch", "base-desktop-url": "pitch://-", "desktop-origin": "pitch://-", "desktop-quit-when-all-windows-closed": false, "base-desktop-assets-url": null, "ipc-channel": null, "desktop-app-context-isolation": true, "desktop-app-node-integration": false, "desktop-app-remote-module": false, "desktop-app-sandbox": true, "desktop-app-jwplayer-ensure-https": true, "base_web_url": "https://app.pitch.com", "related_web_urls": ["https://719998b2-df4b-4b86-9793-3f821d281369.try-prod.pitch.com", "https://canary.pitch.com", "https://app.pitch.com"], "export_document_base_web_url": "https://app.pitch.com/", "dist_id": "719998b2-df4b-4b86-9793-3f821d281369", "document_sync_api_endpoint": "https://document-sync-4-prod.api.pitch.com", "document_sync_pool_size": 1, "document_sync_api_cdn_endpoint": "https://document-sync-4-prod-cdn.api.pitch.com", "exception_tracking": true, "expose_feature_flags": false, "in_applications_folder": false, "intercom": true, "intercom_env": "Production", "intercom-identity-verification": true, "ipc": true, "ipc-sync": true, "log_level": "info", "prefetch_stickers": true, "session_name": "pitch-session-prod", "third_party_notices_link": "https://35ba6c77-3b3a-412b-b5ba-70a1dee539c0.try-prod.pitch.com/static/app/35ba6c77-3b3a-412b-b5ba-70a1dee539c0/third-party-notices.html", "stripe_key": "pk_live_yoOX58g003zhPisbFoStzZTh000cgxxfly", "ui_tests": false, "warn_about_missing_translations": false, "legal-consent-version": 2, "legal_tou_uri": "https://pitch.com/legal-information", "legal_dpa_uri": "https://pitch.com/data-processing-agreement", "legal_privacy_policy_uri": "https://pitch.com/privacy-policy", "learn_the_basics_uri": "https://pitch.com/presentations/Learn-the-basics-of-Pitch-3RC6zu7XT7Bn5iw5Qp6W1P3K", "desktop-tabs": true, "shows-download-ios-app": false, "shows-download-android-app": false, "mobile_shake_for_logs": false, "mobile_console_logging_enabled": false, "pitch_download_uri": "https://pitch.com/download", "pitch-scheme-embed-player-origin": true, "pusher_key": "2ec0ff3aad7ce6eff14c", "pusher_cluster": "eu", "support-email": "support@pitch.com", "quickmenu_help_uri": "https://help.pitch.com/en/articles/4287519-navigate-pitch-faster-using-the-quick-menu", "guest-workspaces-help-uri": "https://help.pitch.com/en/articles/3815587-what-is-a-guest-workspace", "manage-workspace-roles-help-uri": "https://help.pitch.com/en/articles/4460746-manage-workspace-roles", "quickmenu_intercom_tour_id": 147596, "template_picker_tour_id": 334337, "loki-update-context-timeout-ms": 1500, "loki-fetch-server-flags": true, "integration_google_app_id": "557788101770", "integration_google_spreadsheet_scopes": "https://www.googleapis.com/auth/drive.file", "integration_google_spreadsheet_client_id": "557788101770-mo1vqac57k3id0kdr2e16m3kdv8kvq1g.apps.googleusercontent.com", "integration_google_spreadsheet_client_secret": "rdlTd1M84TupqMqdhvjunVA7", "integration_google_analytics_scopes": "https://www.googleapis.com/auth/analytics.readonly", "integration_google_analytics_client_id": "557788101770-lig2tmjbknchqek2642qonbnk598e9q2.apps.googleusercontent.com", "integration_google_analytics_client_secret": "b2hfu78YjlmuxfmQmRygdM9J", "document_preview_endpoint": "https://document-sync-4-prod.api.pitch.com/slide-preview/", "desktop-request-single-instance": true, "native-context-menus": true, "live-collab-available": {"zoom": false}, "prompt-self-segmentation": true, "show-welcome-screen": true, "mobile-app-store-url": null, "mobile-app-store-review-url": null, "should-log-hiring-message": false, "context-menu-inspect-in-dev-panel": false, "preload-data-hosts": ["pitch-private-d70ec670-5af7-4968-a3d3-5d4dfa095a2d.s3.eu-west-1.amazonaws.com", "pitch-export-bucket-dev.s3.eu-west-1.amazonaws.com"], "pptx_exporter_fntdata_url": "https://pitch-assets-ccb95893-de3f-4266-973c-20049231b248.s3.eu-west-1.amazonaws.com/pptx-exporter/fntdata", "maybe-reduce-vpx": true, "platform": "mac", "platform_group": "desktop", "win": false, "linux": false, "mac": true, "web": false, "ios": false, "android": false, "platforms": ["win", "linux", "mac", "web", "ios", "android"], "local-dev": false, "playground": false, "unit-tests": false, "integration-tests": false, "ui-tests": false, "branch": false, "canary-dev": false, "local-prod": false, "branch-prod": false, "canary": false, "stable": true, "app-store": false, "release_stage": "stable", "release_stage_group": "prod", "version": "1.116.1-stable.4+ci5311503", "git_commit": "7225f667360cd08dcc1637026c20b448535747bc", "ci_build_number": 5311503, "channel_name": "latest", "channel_name_desktop_app": "latest", "channel_name_mobile_app": "stable"}, "default": "prod", "env_overrides": {"platform": "PITCH_PLATFORM", "release_stage": "PITCH_RELEASE_STAGE", "segment_api_write_key": "PITCH_SEGMENT_API_WRITE_KEY", "dev_panel_layout_augmentation_tab_enabled": "DEV_PANEL_LAYOUT_AUGMENTATION_TAB_ENABLED", "xoch_snowplow_tracker_address": "PITCH_XOCH_SNOWPLOW_TRACKER_ADDRESS", "xoch_snowplow_post_path": "PITCH_XOCH_SNOWPLOW_POST_PATH", "analytics_tracking": "PITCH_ANALYTICS_TRACKING", "analytics_braze_api_key": "PITCH_ANALYTICS_BRAZE_API_KEY", "analytics_braze_base_url": "PITCH_ANALYTICS_BRAZE_BASE_URL", "datadog_tracking": "PITCH_DATADOG_TRACKING", "datadog_rum_tracking": "PITCH_DATADOG_RUM_TRACKING", "datadog_rum_client_token": "PITCH_DATADOG_RUM_CLIENT_TOKEN", "datadog_rum_application_id": "PITCH_DATADOG_RUM_APPLICATION_ID", "app_asset_endpoint": "APP_ASSET_ENDPOINT", "publish_user_assets_endpoint": "PUBLISH_USER_ASSETS_ENDPOINT", "app_name": "PITCH_APP_NAME", "asset_upload_api_endpoint": "ASSET_UPLOAD_API_ENDPOINT", "auth_client_id": "PITCH_AUTH_CLIENT_ID", "auth_client_id_web_2": "PITCH_AUTH_CLIENT_ID", "auth_endpoint": "PITCH_AUTH_ENDPOINT", "auth_leeway": "PITCH_AUTH_LEEWAY", "auto_updating": "PITCH_AUTO_UPDATING", "desktop-quit-when-all-windows-closed": "PITCH_QUIT_WHEN_ALL_WINDOWS_CLOSED", "desktop-app-context-isolation": "PITCH_DESKTOP_CONTEXT_ISOLATION", "desktop-app-node-integration": "PITCH_DESKTOP_APP_NODE_INTEGRATION", "desktop-app-remote-module": "PITCH_DESKTOP_APP_REMOTE_MODULE", "desktop-app-sandbox": "PITCH_DESKTOP_APP_SANDBOX", "desktop-app-jwplayer-ensure-https": "PITCH_DESKTOP_APP_JWPLAYER_ENSURE_HTTPS", "document_sync_api_endpoint": "DOCUMENT_SYNC_API_ENDPOINT", "document_sync_api_cdn_endpoint": "DOCUMENT_SYNC_API_CDN_ENDPOINT", "exception_tracking": "PITCH_EXCEPTION_TRACKING", "in_applications_folder": "PITCH_IN_APPLICATIONS_FOLDER", "intercom": "PITCH_INTERCOM", "intercom_env": "PITCH_INTERCOM_ENV", "intercom-identity-verification": "PITCH_INTERCOM_IDENTITY_VERIFICATION", "ipc": "PITCH_IPC", "session_name": "PITCH_SESSION_NAME", "desktop-request-single-instance": "PITCH_DESKTOP_REQUEST_SINGLE_INSTANCE", "prompt-self-segmentation": "PITCH_PROMPT_SELF_SEGMENTATION", "show-welcome-screen": "PITCH_SHOW_WELCOME_SCREEN"}}

  /** Returns "prod" or "dev". */
  const determineStageGroup = (hostname) => {
    if (window.pitch_release_stage_group_override != undefined) {
      return window.pitch_release_stage_group_override
    }

    if (!hostname) throw new Error('hostname was not expected to be null')

    if (hostname.endsWith('.try.pitch.com')) return 'prod'
    if (hostname.endsWith('.try-prod.pitch.com')) return 'prod'
    if (hostname.endsWith('.try-dev.pitch.com')) return 'dev'

    if (hostname.endsWith('.platform.pitch.com')) return 'prod'
    if (hostname.endsWith('.platform-prod.pitch.com')) return 'prod'
    if (hostname.endsWith('.platform-dev.pitch.com')) return 'dev'

    return fullConfig.default
  }

  const stageGroup = determineStageGroup(
    window.__pitch_export_base_web_url__ || window.location.hostname
  )
  window['pitch_config'] = fullConfig[stageGroup]
})()
