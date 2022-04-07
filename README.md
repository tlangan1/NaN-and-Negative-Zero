# NaN and Negative Zero

1. NaN and negative zero can only reliably be tested for using the Object.is method. For these values triple equals does not work.

1. NaN is not a JavaScript thing. It comes from the IEEE 754 specification which is a set of technical standards for how numbers are represented.

1. The type of NaN is a number. Although NaN is often thought of as the acronym for "not a number", it most defintely is a number. NaN is the representation of an invalid number. In the example "frog" is divided by "dog" and that returns NaN. I cannot think of any other response that would make as much sense.
