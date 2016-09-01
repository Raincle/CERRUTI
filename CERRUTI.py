import os.path
import tornado.ioloop
import tornado.web
from tornado import gen,httpclient
import json
import motor
from tornado.gen import Return

db = motor.motor_tornado.MotorClient().cerrutiDB


class GetAccessTokenHandler(tornado.web.RequestHandler):
    @gen.coroutine
    def post(self):
        data = yield self.getAccessToken()
        self.write(data)

    @gen.coroutine
    def getAccessToken(self):
        access_token = self.settings["db"].access_token
        result = yield access_token.find_one({"status": "200"})
        result["_id"] = str(result["_id"])
        print(result)
        raise Return(result)


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")


class AppHandler(tornado.web.RequestHandler):
    def get(self):
        self.redirect("http://curio.im/oapi/authorize?redirect_uri=http://cerruti.ahashike.com/oauth&client_id=e8c4600a-0c80-4fdb-835b-f2800d44655d&response_type=code")

class OAuthHandler(tornado.web.RequestHandler):
    @gen.coroutine
    def get(self):
        http_client = httpclient.HTTPClient()
        code = self.get_query_argument("code", default="")
        url = "http://curio.im/oapi/access_token?client_id=e8c4600a-0c80-4fdb-835b-f2800d44655d&client_secret=ea7d7878-1501-44d1-aaeb-e60f92ba3529&redirect_uri=http://cerruti.ahashike.com/oauth&grant_type=authorization_code&code="+code
        response = http_client.fetch(url, method="GET")
        result = json.loads(response.body)
        if result["status"] == "200":
            data_id = yield self.saveAccessToken(result)
            print(data_id)
            self.write("SUCCESS")
        else:
            print(result)
            data_id = yield self.saveAccessToken(result)
            print(data_id)
            self.write("SOME_ERROR_OCCURED")

    @gen.coroutine
    def saveAccessToken(self, data):
        access_token = self.settings["db"].access_token
        result = yield access_token.insert(data)
        data_id = str(result)
        print(data_id)
        raise Return(data_id)


application = tornado.web.Application(
    [
        (r"/", MainHandler),
        (r"/app", AppHandler),
        (r"/oauth", OAuthHandler),
        (r"/getAccessToken", GetAccessTokenHandler),
    ],
    static_path=os.path.join(os.path.dirname(__file__), "static"),
    db = db,
)

if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.current().start()