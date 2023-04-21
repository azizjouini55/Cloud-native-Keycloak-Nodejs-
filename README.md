 server {
        listen 80;

        location / {
            auth_request /auth/;
            error_page 401 = /auth/;
            root /usr/share/nginx/html;
            index index.html;
        }

        location /auth {
            internal;
            proxy_pass_request_body off;
            proxy_set_header Content-Length "";
            proxy_pass http://keycloak:8180/auth/realms/web-app/protocol/openid-connect/auth?client_id=nginxwebapp&response_type=code&scope=openid&redirect_uri=http://example.com/callback;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_pass_request_headers on;
        }

        location /callback {
            internal;
            proxy_pass_request_body off;
            proxy_set_header Content-Length "";
            proxy_pass http://keycloak:8180/auth/realms/web-app/protocol/openid/token;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_pass_request_headers on;
        }

        location /logout {
            internal;
            proxy_pass_request_body off;
             proxy_set_header Content-Length "";
            proxy_pass http://keycloak:8180/auth/realms/web-app/protocol/openid-connect/token;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
                         }
        }