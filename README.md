# Text to Network

In this exercise, we will explore the visualisation of disease-to-gene relationships found in scientific literature.

The information has been produced by our internal NLP (Natural language processing) pipeline, which can extract biological entities and their relationships from any piece of text, for example:

Given the following sentence from a scientific article:
```
Quantitative Western blot analyses demonstrate that the 
total level of SOD1 isoforms is significantly increased in Alzheimer and 
Parkinson.
```
Our pipeline produces the following annotated sentence:

```html 
<sentence data-id="bai-sentence-1">Quantitative Western blot analyses demonstrate that the 
total level of <gene data-uuid="bai-entity-sod1">SOD1</gene> 
isoforms is significantly <relationship>
increased in</relationship> in both <disease data-uuid="bai-entity-ad"> Alzheimer</disease> and <disease data-uuid="bai-entity-pd"> 
Parkinson.</disease>
</sentence>
```

 NOTE: Each `sentence` tag only ever contains one `relationship` between a **single** gene and **one or more diseases** (i.e., in this case, both Parkinson and Alzheimer share the same relationship to SOD1, in practice this should be represented as two relationships).

Now considering that we have identified all occurences of genes and diseases from any piece of text and extracted a relationship type between the two, can you convert a textual document into a graphical network representation? 
Can you split the screen into half to diplay all the raw sentences on one side and the network on the other side?

### Example Output:
![Alt text](./text2network__output.png "Exercise output")

### Notes:
* For the network representation you may want to use a libray similar to [Cytoscape JS](https://js.cytoscape.org/), the data transformed in the previous step may need further adjustment depending on the library chosen.




