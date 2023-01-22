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

    def __str__(self) -> str:
        return self.cards

class Author(models.Model):
    name = models.CharField(max_length=500)
    decks = models.ManyToManyField(
        Deck
    )

    def __str__(self) -> str:
        return self.name

