---
star: false
category:
  - Node.js
tag:
  - Node ORM
  - Squelize
---

# Nginx

Nginx（engine x）是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务

## 特点

- **高并发性能**：Nginx通过其事件驱动、异步非阻塞的架构设计，能够高效地处理大量并发连接，尤其是对于静态文件请求，效率极高。有报告表明，Nginx能支持高达50000个并发连接数。

- **反向代理和负载均衡**：Nginx提供强大的反向代理功能，可以作为后端服务器集群的前端，根据配置实现HTTP、HTTPS、TCP等多种协议的负载均衡，支持会话持久化、健康检查等功能。

- **热部署**：Nginx支持在不停止服务的情况下更新配置文件和软件升级，非常方便。

- 低内存消耗：在保持高性能的同时，Nginx对系统资源特别是内存的占用率较低，使得在相同的硬件条件下能提供更高的服务能力。静态内容处理：对静态文件如HTML、图片、CSS、JavaScript等有非常快速的处理能力，适合用于缓存和直接服务静态资源。

- 跨平台：Nginx可以在大多数类Unix操作系统上编译运行，并且也提供了Windows版本的移植。

- 可扩展性和可定制化：Nginx支持众多的第三方模块，可以根据需要进行自定义开发，实现更多的功能。同时，它也可以根据需要进行高度定制化，将不需要的模块和功能剔除掉，从而减少不必要的代码和资源浪费。

- 高度可靠性：Nginx是基于稳定的、成熟的事件驱动架构开发的，能够有效的避免由于代码错误或者第三方库的问题而导致的崩溃，从而保证了服务的高可靠性。




## 常用功能

**Nginx 对前端开发者有什么用？**

在前端部署过程中，我们经常会使用 Nginx 的静态文件服务功能部署前端静态资源，使用反向代理访问我们资源服务，使用Nginx 配置 HTTPS，使用 Nginx 缓存常用静态资源等：

### **静态文件服务**

Nginx可以有效地作为静态资源服务器，用于托管和提供前端项目中的静态文件，如HTML、CSS、JavaScript、图片等。通过在Nginx中配置适当的目录和文件路径，前端开发者可以确保这些资源被正确地提供给客户端。

### **反向代理**

#### **概念**

反向代理是一种网络架构模式，它隐藏了真实的服务器（或服务器集群），使得客户端无法直接访问这些服务器，而是通过代理服务器来间接访问。

#### **反向代理过程**

1. 在反向代理的架构中，代理服务器接收来自客户端的请求，并根据配置规则将这些请求转发给后端服务器。
2. 后端服务器处理请求后，将响应返回给代理服务器，代理服务器再将响应转发给客户端。

这种方式可以带来多种好处，如隐藏后端服务器的细节、提高安全性、实现负载均衡、缓存加速等。

#### **反向代理 VS 正向代理**

反向代理与正向代理的主要区别在于代理的对象不同。

1. 正向代理代理的是客户端，即客户端通过代理服务器访问外部网络；

<img src="../images/正向代理.png" alt="正向代理" style="zoom:50%;" />

2. 反向代理代理的是服务端，即客户端通过代理服务器间接访问后端的真实服务器。

<img src="../images/反向代理.png" alt="反向代理" style="zoom:50%;" />



Nginx可以作为一个反向代理服务器，用于转发客户端的请求到后端服务器。这种配置特别适用于前后端分离的开发模式，其中前端应用通过API与后端服务进行通信。通过Nginx作为反向代理，可以实现请求的路由、负载均衡、缓存等功能，提高应用的性能和可扩展性。

### **HTTPS 配置**

Nginx支持SSL/TLS协议，可以用于配置HTTPS服务，确保前端应用与客户端之间的通信是加密的，提高应用的安全性。

### **缓存**

Nginx支持静态资源缓存，可以将经常访问的静态文件缓存到本地，减少对后端服务器的请求，从而提高应用的响应速度和用户体验。

### **负载均衡**

对于大型的前端应用，可能需要部署多个后端服务器来处理请求。Nginx可以作为负载均衡器，根据配置的算法（如轮询、加权轮询、IP哈希等）将请求分发到不同的后端服务器上，从而确保请求被均衡地处理，提高系统的稳定性和吞吐量。

### **访问控制和安全设置**

Nginx提供了丰富的访问控制和安全设置选项，如限制IP访问、设置HTTP头信息、防止跨站脚本攻击（XSS）等，有助于保护前端应用免受恶意攻击。



## 安装

### **使用包管理器安装**

在大多数Linux发行版中，你可以使用包管理器来安装Nginx，这种方式更为简单和方便。

以Ubuntu为例，可以使用apt-get命令来安装：

1. **更新软件包列表**：首先，使用`sudo apt-get update`命令更新你的软件包列表。
2. **安装Nginx**：然后，使用`sudo apt-get install nginx`命令来安装Nginx。这个命令会自动处理所有的依赖关系，并下载和安装Nginx及其所需的库和工具。
3. **启动Nginx**：安装完成后，你可以使用`sudo systemctl start nginx`命令来启动Nginx服务。

### **使用Docker安装**

使用Docker安装Nginx的步骤主要包括拉取Nginx镜像、运行Nginx容器以及映射配置文件等步骤：

1. **拉取Nginx镜像**：

   - 首先，你需要访问Docker Hub或者其他镜像仓库，查找你需要的Nginx镜像版本。
     - 例如，你可以选择`nginx:1.24.0`这个版本。
   - 在终端中执行`docker pull nginx:1.24.0`命令来拉取这个版本的Nginx镜像。Docker将会从远程仓库下载该镜像并存储在你的本地主机上。

2. **运行Nginx容器**：

   - 当你有了Nginx镜像之后，就可以运行一个Nginx容器了。使用 `docker run`命令来启动容器，并指定一些必要的参数。例如：

     ```bash
     docker run --name nginx-container -p 80:80 -d nginx:1.24.0
     ```

     - `--name nginx-container`：给容器指定一个名称，这里是`nginx-container`。
     - `-p 80:80`：将容器的80端口映射到主机的80端口。这样，你就可以通过访问主机的80端口来访问Nginx服务了。
     - `-d`：以守护进程模式运行容器，这样容器会在后台运行。

3. **映射Nginx配置文件到本地**（可选步骤）：

   - 如果你需要自定义Nginx的配置，可以将容器内的配置文件映射到本地主机上。

   - 首先，创建一个本地目录来存储配置文件。

   - 使用 `docker cp`命令将容器内的配置文件复制到本地目录。例如：

     ```bash
     mkdir -p /opt/docker/nginx  
     docker cp nginx-container:/etc/nginx/ /opt/docker/nginx  
     docker cp nginx-container:/usr/share/nginx/html /opt/docker/nginx
     ```

     这样，你就可以在 `/opt/docker/nginx`目录下找到Nginx的配置文件和HTML目录，并进行相应的修改。

4. **验证安装**：

   - 安装完成后，你可以通过访问`http://<你的主机IP地址>`来验证Nginx是否正常运行。如果一切正常，你应该能看到Nginx的默认欢迎页面。





## Nginx 操作命令

| 命令                     | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `nginx`                  | 启动nginx服务。如果nginx已经启动，则此命令会失败，除非使用`-s reload`参数来重新加载配置文件。 |
| `nginx -s stop`          | 快速停止nginx服务。不等待工作进程处理完当前连接。            |
| `nginx -s quit`          | 平稳停止nginx服务。等待工作进程处理完当前连接后再退出。      |
| `nginx -s reload`        | 重新加载nginx配置。如果修改了nginx配置文件，需要执行此命令使改动生效，而不需要停止并重新启动nginx。 |
| `nginx -s reopen`        | 重启 Nginx                                                   |
| `nginx -t`               | 测试nginx配置文件是否有语法错误。如果配置文件没有问题，它会输出`syntax is ok`和`test is successful`。 |
| `nginx -T`               | 测试nginx配置文件是否有语法错误，并显示配置文件的全部内容。这在检查配置文件是否被正确加载时非常有用。 |
| `nginx -v`               | 显示nginx的版本信息。                                        |
| `nginx -V`               | 显示nginx的版本信息以及编译时使用的参数。这有助于了解nginx是如何被编译的，包括哪些模块被包含在内。 |
| `nginx -c /path/to/conf` | 使用指定的配置文件启动nginx。这允许你使用不同于默认位置的配置文件来启动nginx实例。 |
| `nginx -g "directives;"` | 在命令行中设置全局指令。这些指令将覆盖配置文件中的同名指令。注意，指令需要以分号(`;`)结束，并且所有指令应该被引号包围。 |



**注意**：

- 在使用`nginx -s`命令时（如`nginx -s reload`），你需要先找到nginx的主进程ID（PID），然后通常通过向`/path/to/nginx/sbin/nginx -s reload`发送信号来执行操作，但如果你使用的是Nginx的systemd服务或者init脚本，那么可以直接使用`systemctl reload nginx`或`/etc/init.d/nginx reload`（取决于你的系统和服务管理工具）。
- 在生产环境中，直接修改正在运行的nginx实例的配置文件并重新加载通常是安全的，但始终建议在更改配置之前备份原配置文件，并在非生产环境中测试更改。
- `nginx -t`和`nginx -T`命令是检查配置文件是否正确以及了解nginx如何加载配置文件的非常有用的工具。





### 使用 systemctl 管理 Nginx 

#### **systemctl** 

`systemctl` 是 Linux 系统（特别是使用 systemd 作为系统和服务管理器的系统）中的一个命令行工具，用于控制系统上的服务（services）和单元（units）。

systemd 是大多数现代 Linux 发行版的初始化系统和服务管理器，它取代了传统的 init 系统。

`systemctl` 提供了一个强大的接口来启动、停止、重启、查看状态以及管理服务。

对于 Nginx，当它被配置为 systemd 服务时（这通常是现代 Linux 发行版的默认设置），你可以使用 `systemctl` 来管理 Nginx 进程。以下是一些使用 `systemctl` 对 Nginx 进行管理的相关命令：

| 命令                                       | 描述                                                         |
| ------------------------------------------ | ------------------------------------------------------------ |
| `systemctl start nginx`                    | 启动 Nginx 服务。如果服务已经运行，则此命令不会有任何效果。  |
| `systemctl stop nginx`                     | 停止 Nginx 服务。这会立即停止 Nginx 进程，但不会等待处理完当前连接。 |
| `systemctl restart nginx`                  | 重启 Nginx 服务。首先停止服务，然后启动它。这通常用于重新加载配置。 |
| `systemctl reload nginx`                   | 重新加载 Nginx 配置，无需重启服务。这是更新配置后推荐的操作方式。 |
| `systemctl status nginx`                   | 显示 Nginx 服务的状态信息，包括是否正在运行、启动时间、进程ID等。 |
| `systemctl enable nginx`                   | 设置 Nginx 服务在系统启动时自动启动。这会将 Nginx 服务添加到系统启动目标。 |
| `systemctl disable nginx`                  | 禁止 Nginx 服务在系统启动时自动启动。这会从系统启动目标中移除 Nginx 服务。 |
| `systemctl is-enabled nginx`               | 检查 Nginx 服务是否设置为在系统启动时自动启动。              |
| `systemctl is-active nginx`                | 检查 Nginx 服务当前是否正在运行。                            |
| `systemctl list-units --type=service --all | grep nginx`                                                  |

请注意，上述命令中的 `nginx` 应该是你系统中 Nginx 服务的实际单元名称。

在大多数情况下，这将是 `nginx.service`，但根据你的系统配置和 Nginx 的安装方式，它可能有所不同。

然而，在大多数情况下，简单地使用 `nginx` 作为服务名称（如上述命令中所示）应该就足够了，因为 systemd 通常会处理 `.service` 后缀的省略。

此外，`systemctl` 还提供了许多其他选项和命令，用于更深入地管理系统上的服务和单元。你可以通过运行 `man systemctl` 或 `systemctl --help` 来查看更多信息和选项。





## Nginx 配置

| 配置项             | 描述                             | 示例值                                       |
| :----------------- | :------------------------------- | :------------------------------------------- |
| `user`             | 指定运行Nginx进程的用户和组      | `user nginx nginx;`                          |
| `worker_processes` | 设置工作进程的数量               | `worker_processes auto;`                     |
| `error_log`        | 设置错误日志文件的路径和日志级别 | `error_log /var/log/nginx/error.log warn;`   |
| `pid`              | 设置Nginx主进程的PID文件路径     | `pid /var/run/nginx.pid;`                    |
| `events`           | 事件相关配置块                   | `{ worker_connections 1024; }`               |
| `http`             | HTTP相关配置块                   | `{ ... }`                                    |
| `server`           | 虚拟主机配置块                   | `{ ... }`                                    |
| `listen`           | 监听端口                         | `listen 80;`                                 |
| `server_name`      | 域名                             | `server_name example.com;`                   |
| `location`         | URL匹配位置                      | `location / { ... }`                         |
| `root`             | 设置请求的根目录                 | `root /var/www/html;`                        |
| `index`            | 设置默认索引文件                 | `index index.html index.htm;`                |
| `access_log`       | 设置访问日志文件的路径和日志格式 | `access_log /var/log/nginx/access.log main;` |



### Conf 配置文件

Nginx 的主配置文件是 `/etc/nginx/nginx.conf`，你可以使用 `cat -n nginx.conf` 来查看配置。

`nginx.conf` 结构图：

```shell
main        # 全局配置，对全局生效
├── events  # 配置影响 Nginx 服务器或与用户的网络连接
├── http    # 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置
│   ├── upstream # 配置后端服务器具体地址，负载均衡配置不可或缺的部分
│   ├── server   # 配置虚拟主机的相关参数，一个 http 块中可以有多个 server 块
│   ├── server
│   │   ├── location  # server 块可以包含多个 location 块，location 指令用于匹配 uri
│   │   ├── location
│   │   └── ...
│   └── ...
└── ...

```

> - main：
>   - 代表Nginx配置文件的全局配置部分，包含所有Nginx服务实例的通用设置。
> - events：
>   - 包含影响Nginx服务器行为或与用户的网络连接的配置。
>   - 这一部分允许你配置例如worker_connections这样的参数，它决定了每个worker进程可以同时处理的最大连接数。
> - http：
>   - 这是配置Nginx作为Web服务器的主要部分。
>   - 这里你可以设置代理、缓存、日志记录，以及使用第三方模块。
>   - 每个http块中可以包含多个server块，用于定义虚拟主机。
> - upstream：
>   - 在http块中，upstream块用于配置后端服务器的地址，这是实现负载均衡的基础。
>   - 你可以定义一组后端服务器，并为它们分配一个名称，这个名称将在server块中被引用。
> - server：
>   - server块定义了一个虚拟主机。
>   - 在一个http块中可以有多个server块，允许Nginx服务器在同一IP地址上托管多个域名或子域名。
>   - 每个server块中可以包含多个location块。
> - location：
>   - location块允许你根据URI（统一资源标识符）来配置不同的行为。
>   - 每个server块中可以有多个location块，使得Nginx可以根据请求的URL转发到不同的后端服务器或者应用不同的配置。

#### **配置文件的语法规则**

1. 配置文件由指令与指令块构成；
2. 每条指令以 `;` 分号结尾，指令与参数间以空格符号分隔；
3. 指令块以 `{}` 大括号将多条指令组织在一起；
4. `include` 语句允许组合多个配置文件以提升可维护性；
5. 使用 `#` 符号添加注释，提高可读性；
6. 使用 `$` 符号使用变量；
7. 部分指令的参数支持正则表达式；



### Nginx 配置示例

1. 使用 Nginx将监听80端口，并将所有请求映射到`/var/www/html`目录。

2. 当用户访问`example.com`时，Nginx会尝试返回`/var/www/html/index.html`或`/var/www/html/index.htm`文件作为默认页面。

3. 同时，所有的访问和错误日志都会分别记录在`/var/log/nginx/access.log`和`/var/log/nginx/error.log`文件中。


```nginx
# 设置Nginx运行的用户和组  
user nginx nginx;  
  
# 设置工作进程的数量，auto表示自动检测CPU核心数  
worker_processes auto;  
  
# 设置错误日志文件的路径和日志级别  
error_log /var/log/nginx/error.log warn;  
  
# 设置Nginx主进程的PID文件路径  
pid /var/run/nginx.pid;  
  
events {  
    # 设置每个工作进程的最大连接数  
    worker_connections 1024;  
}  
  
http {  
    # 包含其他HTTP模块的配置文件  
    include /etc/nginx/mime.types;  
    default_type application/octet-stream;  
  
    # 设置日志格式  
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '  
                    '$status $body_bytes_sent "$http_referer" '  
                    '"$http_user_agent" "$http_x_forwarded_for"';  
  
    # 设置访问日志文件的路径和日志格式  
    access_log /var/log/nginx/access.log main;  
  
    # 配置虚拟主机  
    server {  
        # 监听80端口  
        listen 80;  
  
        # 设置域名  
        server_name example.com;  
  
        # 配置URL匹配位置  
        location / {  
            # 设置请求的根目录  
            root /var/www/html;  
  
            # 设置默认索引文件  
            index index.html index.htm;  
  
            # 允许访问所有请求  
            try_files $uri $uri/ =404;  
        }  
    }  
}
```



## Nginx 全局变量

Nginx 有一些常用的全局变量，你可以在配置的任何位置使用它们：

| 全局变量名         | 功能                                                         |
| ------------------ | ------------------------------------------------------------ |
| `$host`            | 请求信息中的 `Host`，如果请求中没有 `Host` 行，则等于设置的服务器名，不包含端口 |
| `$request_method`  | 客户端请求类型，如 `GET`、`POST`                             |
| `$remote_addr`     | 客户端的 `IP` 地址                                           |
| `$args`            | 请求中的参数                                                 |
| `$arg_PARAMETER`   | `GET` 请求中变量名 PARAMETER 参数的值，例如：`$http_user_agent`(Uaer-Agent 值), `$http_referer`... |
| `$content_length`  | 请求头中的 `Content-length` 字段                             |
| `$http_user_agent` | 客户端agent信息                                              |
| `$http_cookie`     | 客户端cookie信息                                             |
| `$remote_addr`     | 客户端的IP地址                                               |
| `$remote_port`     | 客户端的端口                                                 |
| `$http_user_agent` | 客户端agent信息                                              |
| `$server_protocol` | 请求使用的协议，如 `HTTP/1.0`、`HTTP/1.1`                    |
| `$server_addr`     | 服务器地址                                                   |
| `$server_name`     | 服务器名称                                                   |
| `$server_port`     | 服务器的端口号                                               |
| `$scheme`          | HTTP 方法（如http，https）                                   |



## Nginx 应用

### 配置反向代理

#### **反向代理配置**

| 配置指令/块                  | 说明                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| `server`                     | 定义一个虚拟服务器，可以监听不同的端口和域名。               |
| `listen`                     | 设置服务器监听的端口和IP地址。                               |
| `server_name`                | 定义虚拟服务器的名称，用于处理请求的域名。                   |
| `location`                   | 用于匹配请求的URI，并对匹配到的请求进行特定的处理。          |
| `proxy_pass`                 | 设置后端服务器的地址，Nginx将请求转发到这个地址。            |
| `proxy_set_header`           | 允许重新定义或添加转发到后端服务器的HTTP请求头。             |
| `proxy_connect_timeout`      | 设置与后端服务器建立连接的超时时间。                         |
| `proxy_send_timeout`         | 设置向后端服务器发送请求的超时时间。                         |
| `proxy_read_timeout`         | 设置从后端服务器读取响应的超时时间。                         |
| `upstream`                   | 定义了一个服务器组，用于负载均衡配置，可以包含多个后端服务器。 |
| `server`（在`upstream`块中） | 指定后端服务器的地址和端口，可以添加多个以实现负载均衡。     |
| `least_conn`                 | 在`upstream`块中使用，指定使用最少连接数算法进行负载均衡。   |
| `ip_hash`                    | 在`upstream`块中使用，指定使用IP哈希算法以保持会话一致性。   |
| `proxy_http_version`         | 设置代理到后端服务器时使用的HTTP协议版本，如`1.1`。          |
| `proxy_cache`                | 启用缓存，并指定缓存区域。                                   |
| `proxy_cache_valid`          | 为不同的响应状态码设置缓存的有效期。                         |
| `proxy_cache_key`            | 自定义缓存键的生成方式。                                     |
| `proxy_ignore_client_abort`  | 当客户端关闭连接时，Nginx是否继续向后端服务器发送请求。      |
| `proxy_buffering`            | 控制Nginx是否缓冲来自后端服务器的响应。                      |
| `proxy_buffers`              | 设置用于缓冲后端服务器响应的缓冲区数量和大小。               |



#### **示例**

示例：访问`http://mydomain.com`，将该请求代理到 `192.168.1.100`  或 `192.168.1.101` 的 8080 端口服务。

#### 1. 配置Nginx反向代理

编辑Nginx的配置文件，通常位于`/etc/nginx/nginx.conf`，但更常见的做法是在`/etc/nginx/sites-available/`目录下创建一个新的配置文件，并通过`sites-enabled`目录进行链接。

假设我们创建一个名为`my-reverse-proxy`的配置文件：

```bash
sudo nano /etc/nginx/sites-available/my-reverse-proxy
```

在配置文件中，添加以下内容：

```nginx
server {  
    listen 80; # 监听80端口  
    server_name mydomain.com; # 域名，根据实际情况替换  
  
    # 负载均衡配置  
    upstream backend_servers {  
        server 192.168.1.100:8080; # 后端服务器1  
        server 192.168.1.101:8080; # 后端服务器2  
  
        # 可选：配置负载均衡算法  
        # least_conn; # 最少连接数算法  
        # ip_hash; # IP哈希算法，保持会话一致性  
    }  
  
    location / {  
        # 反向代理设置，主要配置 proxy_pass，表示代理的服务器组
        proxy_pass http://backend_servers; # 转发请求到upstream定义的服务器组  
        proxy_set_header Host $host; # 传递原始请求的Host头  
        proxy_set_header X-Real-IP $remote_addr; # 传递真实客户端IP  
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 传递经过代理链的客户端IP列表  
        proxy_set_header X-Forwarded-Proto $scheme; # 传递原始请求的协议（http/https）  
  
        # 可选：设置超时时间  
        proxy_connect_timeout 5s;  
        proxy_send_timeout 60s;  
        proxy_read_timeout 60s;  
  
        # 其他可选配置...  
    }  
  
    # 其他location块...  
}
```

保存并关闭配置文件后，需要将其链接到`sites-enabled`目录以启用它：

```bash
sudo ln -s /etc/nginx/sites-available/my-reverse-proxy /etc/nginx/sites-enabled/
```

#### 2. 检查并重启Nginx

在修改配置文件后，使用Nginx的`-t`选项来检查配置文件的语法是否正确：

```bash
sudo nginx -t
```

如果显示语法正确，则重启Nginx以使更改生效：

```bash
sudo systemctl restart nginx
```

或者，在较旧的系统中，可能使用`service`命令：

```bash
sudo service nginx restart
```

#### 3. 测试反向代理

现在，通过浏览器或curl命令访问`http://mydomain.com`（替换为你的实际域名），Nginx将作为反向代理服务器，将请求转发到后端服务器组中的一个服务器，并将响应返回给客户端。

#### 总结

以上是一个Nginx反向代理配置的详细实例，展示了如何设置Nginx以将客户端请求转发到后端服务器组，并传递必要的HTTP头信息。通过配置负载均衡，可以进一步提高Web应用的性能和可靠性。此外，Nginx还提供了许多其他高级配置选项，如SSL终端代理、缓存、URL重写等，可以根据实际需求进行配置。



---





### 跨域 CORS 配置

使用Nginx反向代理解决跨域问题是一种常见且有效的方法。

跨域问题通常发生在浏览器安全策略中，它阻止了一个源（协议、域名、端口）的Web页面去请求另一个源的资源。

通过Nginx作为反向代理，你可以将来自前端的请求转发到后端服务，同时修改响应头以允许跨域请求。



#### 使用反向代理解决跨域

- 前端应用运行在 `http://frontend.example.com`
- 后端API服务运行在 `http://backend.example.com`
- 我们希望前端应用能够无跨域限制地访问后端API

####  1. 配置Nginx作为反向代理

首先，你需要在Nginx服务器上配置一个server块，该块将监听前端应用的域名（或IP和端口），并将请求转发到后端API服务。

```nginx
server {  
    listen 80;  
    server_name frontend.example.com;  
  
    location /api/ {  
        # 将所有以/api/开头的请求转发到后端服务  
        proxy_pass http://backend.example.com/;  
  
        # 必要的反向代理设置  
        proxy_http_version 1.1;  
        proxy_set_header Upgrade $http_upgrade;  
        proxy_set_header Connection 'upgrade';  
        proxy_set_header Host $host;  
        proxy_cache_bypass $http_upgrade;  
  
        # 添加CORS配置  
        add_header 'Access-Control-Allow-Origin' 'http://frontend.example.com';  
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE';  
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';  
  
        # 对于OPTIONS请求，直接返回204状态码  
        if ($request_method = 'OPTIONS') {  
            add_header 'Access-Control-Max-Age' 1728000;  
            add_header 'Content-Type' 'text/plain charset=UTF-8';  
            add_header 'Content-Length' 0;  
            return 204;  
        }  
    }  
  
    # 其他location块...  
  
    # 如果需要，还可以添加将静态文件直接返回给客户端的配置  
    location / {  
        # 假设前端应用是静态的，并且已经部署在Nginx服务器上  
        root /path/to/frontend/files;  
        try_files $uri $uri/ =404;  
    }  
}
```

####  2. 重启Nginx

保存配置文件后，你需要重启Nginx以使更改生效。

```bash
sudo systemctl restart nginx  
# 或者  
sudo service nginx restart
```

#### 3. 测试配置

现在，你可以通过访问 `http://frontend.example.com/api/some-endpoint` 来测试配置。Nginx将接收这个请求，转发到 `http://backend.example.com/api/some-endpoint`，并将响应返回给前端应用。同时，由于Nginx添加了CORS头部，浏览器将允许跨域请求。

**注意事项**

- 在生产环境中，`Access-Control-Allow-Origin` 应该被设置为确切的源，而不是 `*`，除非你有特定的理由需要这样做。
- 如果你使用的是HTTPS，请确保Nginx配置了SSL/TLS证书，并且前端和后端之间的连接也是安全的。
- Nginx配置中的 `proxy_pass` 指令后面的URL末尾的斜杠（`/`）很重要，它决定了Nginx如何转发URL。在这个例子中，我们假设后端API服务能够正确处理从 `/api/` 开始的路径。如果后端服务的路径结构与前端请求的路径结构不同，你可能需要调整 `proxy_pass` 指令或重写URL。



#### 配置 CORS 跨域

#### 1.编辑Nginx配置文件

首先，你需要找到Nginx的配置文件。这通常是`nginx.conf`文件，但你也可以在`sites-available`（对于使用Debian或Ubuntu的系统）或类似的目录下找到针对特定站点的配置文件。

#### 2. 添加CORS配置

在`server`块中，找到或添加一个`location`块来匹配你想要应用CORS策略的URL路径。然后，在该`location`块中添加以下指令来设置CORS头部。

```nginx
server {  
    listen 80;  
    server_name yourdomain.com;  
  
    location /api/ {  
        # 这里是处理你的API请求的配置  
  
        # 添加CORS配置  
        add_header 'Access-Control-Allow-Origin' '*';  
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';  
        # 如果你的API需要接受预检请求，请确保包含OPTIONS方法  
  
        # 如果你的API需要设置允许的头部，则添加以下行  
        # add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';  
  
        # 对于OPTIONS请求，Nginx默认返回405或404错误  
        # 以下配置将确保对于OPTIONS请求，Nginx返回204状态码，这是CORS预检请求的期望行为  
        if ($request_method = 'OPTIONS') {  
            add_header 'Access-Control-Max-Age' 1728000;  
            add_header 'Content-Type' 'text/plain charset=UTF-8';  
            add_header 'Content-Length' 0;  
            return 204;  
        }  
  
        # 你的其他配置...  
    }  
  
    # 其他server块...  
}
```

#### 3. 重启Nginx

保存配置文件后，你需要重启Nginx以使更改生效。这可以通过运行以下命令来完成（根据你的操作系统和Nginx安装方式，命令可能略有不同）：

```bash
sudo systemctl restart nginx  
# 或者  
sudo service nginx restart
```

**注意事项**

- 允许`Access-Control-Allow-Origin`为`*`会允许来自任何源的请求，这在生产环境中可能带来安全风险。建议仅允许你信任的来源。
- 根据你的需求，你可能还需要配置其他CORS头部，如`Access-Control-Allow-Headers`和`Access-Control-Expose-Headers`。
- 使用`if`指令在Nginx中通常不是最佳实践，因为它可能会导致处理请求时的性能问题或意外的行为。然而，在这个特定的用例中，它是处理OPTIONS请求的一种有效方式。
- 如果你正在运行HTTPS服务，请确保你的Nginx配置正确地处理了SSL/TLS证书。



---



### 开启 gzip 压缩

#### **GZIP压缩概述**

GZIP压缩是GNUzip的缩写，最早用于UNIX系统的文件压缩。

在HTTP协议中，GZIP编码是一种用来改进Web应用程序性能的技术。它通过压缩HTTP响应内容（主要是文本文件，如HTML、CSS、JavaScript等），来减小传输文件的大小，从而减少数据传输的带宽消耗和响应时间，提高网站的性能和速度。

GZIP压缩是无损的，意味着在压缩和解压过程中不会丢失任何信息。





#### Nginx Gzip 配置项

在Nginx中，与gzip压缩相关的配置项主要位于`http`、`server`或`location`块中，但大多数gzip相关的指令通常放在`http`块中以全局应用：

| 配置项                | 默认值                          | 说明                                                         |
| --------------------- | ------------------------------- | ------------------------------------------------------------ |
| `gzip`                | `off`                           | 启用或禁用gzip压缩。`on`表示启用。                           |
| `gzip_buffers`        | `32 4k|8k`                      | 设置用于gzip压缩的缓冲区数量和大小。默认值取决于操作系统和Nginx版本。 |
| `gzip_comp_level`     | `1`                             | 设置gzip压缩级别，范围从1（最快，压缩率最低）到9（最慢，压缩率最高）。 |
| `gzip_disable`        | `""`                            | 根据表达式禁用gzip压缩。例如，`"msie6"`会禁用对IE6的gzip压缩。 |
| `gzip_http_version`   | `1.1`                           | 启用gzip压缩所需的HTTP版本。通常设置为`1.1`，因为HTTP/1.0不支持gzip压缩。 |
| `gzip_min_length`     | `20`                            | 设置最小压缩文件大小（以字节为单位）。小于此大小的文件不会被压缩。 |
| `gzip_proxied`        | `off`                           | 定义哪些通过代理的请求应当被压缩。`off`表示不基于`Via`请求头压缩。其他值如`any`、`expired`等提供了更精细的控制。 |
| `gzip_static`         | `off`                           | 启用时，Nginx会查找以`.gz`结尾的预压缩文件，并直接发送这些文件而不是实时压缩。 |
| `gzip_types`          | `text/html`（可能还有其他）     | 设置需要压缩的MIME类型。默认为`text/html`，但通常会添加其他类型如`text/css`、`application/javascript`等。 |
| `gzip_vary`           | `off`                           | 如果启用，Nginx会在响应头中添加`Vary: Accept-Encoding`，以通知客户端内容可能根据`Accept-Encoding`请求头进行了压缩。 |
| `gzip_proxied_any`    | `off`（非直接配置项，但常提及） | 这是一个更具体的`gzip_proxied`设置，表示如果请求通过代理，则始终压缩响应。注意，这不是一个直接的配置项，而是`gzip_proxied`参数的一个常见值。 |
| `gzip_comp_level_var` | N/A                             | （某些Nginx版本支持）允许基于变量动态设置gzip压缩级别。不是所有Nginx版本都支持。 |
| `gzip_disable_msie6`  | `on`（在某些旧版本中）          | 在一些旧版本的Nginx中，有一个特定的指令来禁用对IE6的gzip压缩。但在新版本中，通常使用`gzip_disable`指令。 |

**注意**：

- 并非所有Nginx版本都支持上述所有配置项。例如，`gzip_comp_level_var`是较新版本的Nginx中引入的，可能不是所有系统都可用。
- `gzip_disable_msie6`是一个历史遗留的指令，用于早期版本的Nginx，以禁用对IE6的gzip压缩。在现代Nginx版本中，应使用`gzip_disable`指令。
- `gzip_buffers`的默认值可能因Nginx版本和操作系统而异。在配置时，请根据您的具体需求和环境进行调整。
- 在配置gzip压缩时，建议通过实际测试来确定最佳的`gzip_comp_level`值，以在压缩率和CPU使用率之间找到最佳平衡点。



#### 1. 确认Nginx版本

首先，确保你的Nginx服务器支持GZIP压缩。Nginx默认自带了gzip模块，因此大多数现代Nginx安装都支持这一功能。

使用 gzip 不仅需要 Nginx 配置，浏览器端也需要配合:

1. 需要在请求消息头中包含 `Accept-Encoding: gzip`（IE5 之后所有的浏览器都支持了，是现代浏览器的默认设置）。
2. 一般在请求 html 和 css 等静态资源的时候，支持的浏览器在 request 请求静态资源的时候，会加上 `Accept-Encoding: gzip` 这个 header，表示自己支持 gzip 的压缩方式;
3. Nginx 在拿到这个请求的时候，如果有相应配置，就会返回经过 gzip 压缩过的文件给浏览器，并在 response 相应的时候加上 `content-encoding: gzip` 来告诉浏览器自己采用的压缩方式（因为浏览器在传给服务器的时候一般还告诉服务器自己支持好几种压缩方式）;
4. 浏览器拿到压缩的文件后，根据自己的解压方式进行解析。





#### 2. 编辑Nginx配置文件

找到Nginx的配置文件（通常是`nginx.conf`，也可能位于`/etc/nginx/conf.d/`目录下的某个文件中）。

#### 3. 启用GZIP压缩

在Nginx配置文件的`http`块中，添加或修改以下指令来启用GZIP压缩：

```nginx
http {  
    # ... 其他配置 ...  
  
    # 启用gzip压缩  
    gzip on;  
  
    # 设置gzip压缩级别，1-9，数值越大压缩率越高，但CPU消耗也越大  
    gzip_comp_level 6;  
  
    # 设置最小压缩文件大小，小于此大小的文件不会被压缩  
    gzip_min_length 1000;  
  
    # 设置需要压缩的MIME类型  
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;  
  
    # 是否在响应头中添加"Vary: Accept-Encoding"字段  
    gzip_vary on;  
  
    # 禁用IE6的gzip压缩（IE6不支持gzip压缩）  
    gzip_disable "msie6";  
  
    # ... 其他gzip配置 ...  
  
    # server块配置  
    server {  
        # ... server配置 ...  
    }  
  
    # ... 其他http配置 ...  
}
```

#### 4. 保存并测试配置

保存Nginx配置文件后，需要测试配置是否正确。可以使用`nginx -t`命令来测试配置文件的语法是否正确。

```bash
bash复制代码

sudo nginx -t
```

如果配置无误，输出应该显示“syntax is ok”和“test is successful”。

#### 5. 重新加载Nginx配置

如果配置测试成功，使用以下命令重新加载Nginx配置以使更改生效：

```bash
bash复制代码

sudo nginx -s reload
```

#### 6. 验证GZIP压缩是否生效

为了验证GZIP压缩是否成功启用，可以使用浏览器的开发者工具（如Chrome的DevTools）来检查网络请求的响应头。如果响应头中包含`Content-Encoding: gzip`，则表示文件已被成功压缩。

另外，也可以使用curl命令行工具来检查：

```bash
bash复制代码

curl -I -H 'Accept-Encoding: gzip' http://your-website.com/some-file.css
```

如果服务器正确返回了gzip压缩的内容，你会在响应头中看到`Content-Encoding: gzip`。

**注意事项**

- GZIP压缩只适用于文本文件，对于已经压缩过的文件（如图片、视频等）再次进行GZIP压缩通常不会有明显效果，甚至可能增加文件大小。
- 启用GZIP压缩会增加服务器的CPU使用率，因为需要额外的计算资源来进行压缩。然而，由于减少了传输的数据量，总体上可以提高网站的加载速度，改善用户体验。
- 确保客户端（如浏览器）支持GZIP压缩，否则无法享受到GZIP压缩带来的好处。现代浏览器大多都支持GZIP压缩。



---



### 配置 HTTPS



----



### 配置负载均衡



----



### 配置动静分离



---



### 设置二级域名虚拟主机



----



### 配置高可用集群（双机热备）



-----

