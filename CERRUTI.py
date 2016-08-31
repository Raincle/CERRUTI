import os.path
import tornado.ioloop
import tornado.web
from tornado import gen,httpclient

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class AppHandler(tornado.web.RequestHandler):
    def get(self):
        self.redirect("http://curio.im/oapi/authorize?redirect_uri=http://cerruti.ahashike.com/oauth&client_id=e8c4600a-0c80-4fdb-835b-f2800d44655d&response_type=code")

class OAuthHandler(tornado.web.RequestHandler):
    @gen.coroutine
    def get(self):
        http_client = httpclient.AsyncHTTPClient()
        code = self.get_query_argument("code", default="")
        url = "http://curio.im/oapi/access_token?client_id=e8c4600a-0c80-4fdb-835b-f2800d44655d&client_secret=ea7d7878-1501-44d1-aaeb-e60f92ba3529&redirect_uri=http://cerruti.ahashike.com/oauth&grant_type=authorization_code&code="+code
        request = httpclient.HTTPRequest(url, method="GET")
        response = yield http_client.fetch(request)
        print(response)
        if response.status == "200":
            self.write("SUCCESS")
        else:
            self.write("SOME_ERROR_OCCURED")


application = tornado.web.Application(
    [
        (r"/", MainHandler),
        (r"/app", AppHandler),
        (r"/oauth", OAuthHandler),
    ],
    static_path=os.path.join(os.path.dirname(__file__), "static"),
)

if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.current().start()