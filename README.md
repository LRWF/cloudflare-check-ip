# cloudflare-check-ip

使用 cloudflare workers 部署一个查看 ip 的小玩意儿。

在 workers 控制台中创建一个 worker，粘贴下面的代码（func.js 文件内容）

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';

  const jsonResponse = {
    ip: ip
  };

  return new Response(JSON.stringify(jsonResponse), {
    headers: { 
      'Content-Type': 'application/json' 
    },
  });
}
```

然后绑定自己的域名使用即可。

用法：

- 浏览器直接访问
- 在命令行中使用，参考：

```bash
curl https://<你的域名>
```
