import os.path
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

application = tornado.web.Application(
    [
    (r"/", MainHandler),
    ],
    static_path=os.path.join(os.path.dirname(__file__), "static"),
)

if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.current().start()