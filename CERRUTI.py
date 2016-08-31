import os.path
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class AppHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("app.html")

    def post(self):
        self.render("app.html")

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