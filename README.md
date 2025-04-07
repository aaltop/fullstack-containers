# Contents

Contains code for part 12 of the [Full stack open](https://fullstackopen.com/en/) course.
Other parts can be found at and through https://github.com/aaltop/fullstackopen.
This part of the course deals with using Docker to make containerised
environments to run different parts of an application in. Containers
are especially useful for recreating a setup -- whether a development
or production enviroment -- anywhere. This ensures consistent functionality of an
application across setups, therefore lowering the need to test the
code in different environments or troubleshoot problems arising
from incompatibilities in setups.

A non-exhaustive list of covered concepts:
- Docker
    - Docker Desktop
    - Docker CLI
    - Dockerfile
        - set user (limit access)
    - Docker Compose
        - persist data
            - bind mounts
            - volumes
                - read-only option
        - startup order, depends_on and beyond
    - multi-stage builds
        - limit the size of an image by building different of a build
        separately, and only moving necessary content from step to step
- nginx
    - general configuration
    - reverse proxying
        - use Docker-provided DNS names to direct requests (when using nginx
        with Docker)
    - trailing slash to remove prefix when proxying
        

## Main technologies introduced

### [Docker](https://www.docker.com/)

Used for creating and managing containers. Many ready-made setups,
called images, can be pulled from the associated [Docker Hub](https://hub.docker.com/)
(though image-sharing is not limited to the Hub)
and further built upon in an automated way.
This increases the ease of creating a setup, as the developer
does not have to create every containerised setup from scratch.

### [Redis](https://redis.io/)

A highly popular key-value database. Due to it's simple design
compared to some more complex (No)SQL databases, Redis is very fast.

### [server](https://www.npmjs.com/package/serve)

Tool to simply server static (frontend) content.

### [nginx](https://nginx.org/)

A more powerful utitity for serving content, amongst other things.

### [Busybox](https://www.busybox.net/)

"[C]ombines tiny versions of many common UNIX utilities into a single small executable."
