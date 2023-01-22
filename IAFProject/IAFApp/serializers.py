from rest_framework import serializers
from .models import Flashcard, Deck, Author

class FlashcardSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Flashcard
        fields = ("term", "description")


class DeckSerializer(serializers.ModelSerializer):

    class Meta:
        model = Deck
        fields = ("cards", "author")


class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = ("name", "decks")
