# Building a Speaker Detection Engine

[badge/API/Yes/green]
[badge/Search/Yes/green]
[badge/UI/Yes/green]

A speaker detection (aka *diarization* or *speaker separation*) engine partitions an audio stream into segments, based on who is speaking when.
Unlike a [speaker recognition engine](/developer/engines/cognitive/speech/speaker-recognition/), a speaker *detection* engine merely determines when speaks change and possibly which speakers are the same person.
But it does not try to identify who the speaker is.

## Engine Manifest

<!-- TODO
All speaker detection engines should specify the following parameters in their build manifest:

| Parameter | Value |
| --------- | ----- |
| `TODO` | `TODO` |
| `TODO` | `TODO` |
-->

<!--TODO:  Here is a minimal example `manifest.json` that could apply to a speaker detection engine: -->

<!--TODO: Define [](manifest.example.json ':include :type=code json')-->

See the full documentation for [engine manifest standards](/developer/engines/standards/engine-manifest/) for more details.

<!-- ## Engine Input -->

<!-- TODO -->

## Engine Input

Audio-processing engines can be [stream processing](/developer/engines/processing-modes/stream-processing/) engines, or (if processing will be stateless) they can be [segment processing](/developer/engines/processing-modes/segment-processing/).

[](../../_snippets/audio-engine-mime-type.md ':include')

## Engine Output

Within the time-based `series` array (see [vtn-standard](/developer/engines/standards/engine-output/)) in the engine's output, each speaker detection record (that is, each `series` entry) should contain an `object` of type `speaker`.

### Example

Here is an example of the simplest type of speaker detection output:

[](vtn-standard.example.json ':include :type=code json')

### Legacy Format

!> There is a legacy format that is still supported but has been deprecated.

[](vtn-standard-legacy.example.json ':include :type=code json')
