var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1658069658928,
  "request_date" : "2023-09-30T10:27:38Z",
  "subscriber" : {
    "last_seen" : "2023-09-30T10:27:38Z",
    "first_seen" : "2023-09-30T10:27:38Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "wozi_pro_2023" : {
        "Author" : "ADMIN",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "com.happy.money.forever",
        "warning" : "ADMIN ",
        "original_purchase_date" : "2023-09-09T09:09:09Z",
        "purchase_date" : "2023-09-09T09:09:09Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "wozi_pro_2023" : {
        "product_identifier" : "wozi_pro_2023",
        "purchase_date" : "2023-09-30T09:09:09Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:5cac98e123034328a0dabdd62cb4a64a",
    "non_subscriptions" : {

    }
  }
}

$done({body : JSON.stringify(objc)});
