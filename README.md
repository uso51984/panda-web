## 1. user模块

### 1.1. 用户
* api: `/api/v1/crm/user/detail`
* Method: `get`

```json
{
  "headers": {
      "response_code": "0000",
      "response_message": "",
      "page_info": {
          "order_by": "",
          "total_records_per_page": 30,
          "total_records": 0,
          "total_page": 1,
          "order_option": "ASC",
          "page_number": 1
      }
  },
  "body": {}
}

```
### 1.2. 添加用户
* api: `/api/v1/crm/user/new`
* Method: `post`
```
{
  name: '',
  age: ''
}
```
