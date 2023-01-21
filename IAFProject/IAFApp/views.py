from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser

# Create your views here.


class HelloWorld(APIView):
    parser_classes = [JSONParser]

    def post(self, request):
        data = request.data
        # Do something with the data
        return Response(data)
