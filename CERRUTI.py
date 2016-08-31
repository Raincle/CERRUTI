import os.path
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class AppHandler(tornado.web.RequestHandler):
    def get(self):
        self.redirect("http://curio.im/oapi/authorize?redirect_uri=[http://cerruti.ahashike.com/oauth]&client_id= [e8c4600a-0c80-4fdb-835b-f2800d44655d]&response_type=code")

class OAuthHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("oauth.html")

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