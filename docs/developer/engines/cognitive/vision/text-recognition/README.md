# Building a Text Recognition Engine

![](badge/API/Yes/green)
![](badge/Search/Yes/green)
![](badge/UI/Yes/green)

Text recognition engines process documents (primarily images) to recognize text in them and express that recognized text in a structured format.
**Optical character recognition (OCR)** is a technology that is often used to implement text recognition engines.

They are similar to [text extraction](/engines/cognitive/text/text-extraction/)
engines in their output data structure.
But where text extraction engines are used to extract text content from *semi-structured* files, like PDFs or Microsoft Word documents,
text **recognition** engines are used to recognize text in *unstructured* files, such as images.

<!-- TODO

## Engine Manifest

All text recognition engines should specify the following parameters in their build manifest:

| Parameter | Value |
| --------- | ----- |
| `TODO` | `TODO` |
| `TODO` | `TODO` |

Here is a minimal example `manifest.json` that could apply to a text recognition engine:

-->


<!--TODO: Define [](manifest.example.json ':include :type=code javascript')-->

See the full documentation for [engine manifest standards](/engines/standards/engine-manifest/) for more details.

<!-- ## Engine Input -->

<!-- TODO -->

<!-- ### Training and Libraries

Text recognition engines are required to be [trainable via libraries](/libraries/engines). -->


## Engine Output

Text recognition engine output can follow two forms, depending on whether the file being processed is time-based file (e.g. audio, video) or a non-time-based (e.g. image).

### Example - Time-Based

[](vtn-standard-series.example.json ':include :type=code json')

### Example - Non-Time-Based

[](vtn-standard-object.example.json ':include :type=code json')

