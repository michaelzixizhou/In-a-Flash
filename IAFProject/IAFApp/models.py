from django.db import models

# Create your models here.


class Flashcard(models.Model):
    term = models.CharField(max_length=500)
    description = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.term + ': ' + self.description


class Deck(models.Model):
    cards = models.ManyToManyField(
        Flashcard
    )
    location = models.CharField(max_length=500)
    author = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.cards


class Author(models.Model):
    name = models.CharField(max_length=500, default="anonymous")
    decks = models.ManyToManyField(
        Deck, related_name='+'
    )

    def __str__(self) -> str:
        return self.name
