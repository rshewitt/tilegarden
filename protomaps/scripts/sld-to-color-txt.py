import xml.etree.ElementTree as ET

# this file was exported from QGIS
input_sld_file = "/Users/reidhewitt/pp/world_observations/tile_server_examples/protomaps/data/rasters/turbo_style.sld"
output_txt = "/Users/reidhewitt/pp/world_observations/tile_server_examples/protomaps/data/rasters/turbo_style.txt"


def write_to_color_map_txt(values):

    with open(output_txt, "w") as f:
        for val in values:
            f.write(" ".join(map(str, val)) + "\n")


def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip("#")
    return list(int(hex_str[i : i + 2], 16) for i in (0, 2, 4))


def main(sld_file):

    color_values = []

    tree = ET.parse(sld_file)
    root = tree.getroot()

    color_map_entries = root.findall(".//{http://www.opengis.net/sld}ColorMapEntry")

    for entry in color_map_entries:
        entry_attrs = entry.attrib
        value, hex_str = float(entry_attrs["quantity"]), entry_attrs["color"]

        row = hex_to_rgb(hex_str)
        row.insert(0, value)

        color_values.append(row)

    write_to_color_map_txt(color_values)


if __name__ == "__main__":
    main(input_sld_file)
